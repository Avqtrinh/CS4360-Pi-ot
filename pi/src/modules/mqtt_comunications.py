from AWSIoTPythonSDK.MQTTLib import AWSIoTMQTTClient
from datetime import date, datetime as dt

class communication_handler():
    def __init__(self, endpoint, ca, cert, privatekey):
        try:
            self.mqttClient = AWSIoTMQTTClient("client")
            self.mqttClient.configureEndpoint(endpoint, 8883) #REST endpoint
            self.mqttClient.configureCredentials(ca, privatekey, cert) #needs CA, private key, certificate -  point to local files in directory
            #MQTT Client setup
            self.mqttClient.configureOfflinePublishQueueing(-1)
            self.mqttClient.configureDrainingFrequency(2)
            self.mqttClient.configureConnectDisconnectTimeout(10)
            self.mqttClient.configureMQTTOperationTimeout(5)
        except:
            print("Error: MQTTClient construction failed.")


    def send_payload(self, data):
        if data == '' or data == None:
            print("Error: Message Empty")
            return False
        
        #Payload as JSON object
        payload = '{"id": "001", "data": "'+str(data)+'"}'
        try:
            self.mqttClient.connect()
            self.mqttClient.publish("testConnection", payload, 0) #Topic: "testConnection" on AWS IoT
            print("Publish Success.")
            return True
        except:
            print("Publish Failed.")
            return False
