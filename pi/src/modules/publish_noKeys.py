import time
from AWSIoTPythonSDK.MQTTLib import AWSIoTMQTTClient 
from datetime import date, datetime

mqttClient = AWSIoTMQTTClient("client")
mqttClient.configureEndpoint(" ", 8883) #REST endpoint
#needs CA, private key, certificate -  point to files in your local directory
mqttClient.configureCredentials(" ", " ", " ") 

#MQTT Client setup
mqttClient.configureOfflinePublishQueueing(-1)  
mqttClient.configureDrainingFrequency(2)  
mqttClient.configureConnectDisconnectTimeout(10)  
mqttClient.configureMQTTOperationTimeout(5)  

#add in Motion Sensor code or call it from here?

#JSON object
payload = '{ID: "Success", Data: "Data" }'

connecting_time = time.time() + 10

if time.time() < connecting_time:
    mqttClient.connect()
    mqttClient.publish("testConnection", payload, 0) #Topic: "testConnection" on AWS IoT
    print("Publish success.")
else:
    print("Publish failed.")

#ignore this lol
#while 1:
 #   mqttClient.publish()
  #  time.sleep(2)


