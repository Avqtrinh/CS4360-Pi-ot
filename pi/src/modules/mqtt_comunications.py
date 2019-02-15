import time
from AWSIoTPythonSDK.MQTTLib import AWSIoTMQTTClient
from datetime import date, datetime

class communication_handler():

    def __init__(self,endpoint,ca,cert,privatekey):
        self.mqttClient = AWSIoTMQTTClient("client")
        self.mqttClient.configureEndpoint(endpoint, 8883) #REST endpoint
        #needs CA, private key, certificate -  point to files in your local directory
        self.mqttClient.configureCredentials(ca,privatekey,cert)

        #MQTT Client setup
        self.mqttClient.configureOfflinePublishQueueing(-1)
        self.mqttClient.configureDrainingFrequency(2)
        self.mqttClient.configureConnectDisconnectTimeout(10)
        self.mqttClient.configureMQTTOperationTimeout(5)


    def send_payload(self,data):
        #JSON object
        connecting_time = time.time() + 10
        payload = '{ID: "Success", Data: '+str(data)+' }'
        if time.time() < connecting_time:
            self.mqttClient.connect()
            self.mqttClient.publish("testConnection", payload, 0) #Topic: "testConnection" on AWS IoT
            print("Publish success.")
        else:
            print("Publish failed.")
