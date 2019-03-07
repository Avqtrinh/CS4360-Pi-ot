from AWSIoTPythonSDK.MQTTLib import AWSIoTMQTTClient

class CommunicationHandler():

    def __init__(self, ENDPOINT, CA, CERT, PRIVATE_KEY):
        try:
            print("test")
            self.mqtt_client = AWSIoTMQTTClient("client")
            self.mqtt_client.configureEndpoint(ENDPOINT, 8883)
            self.mqtt_client.configureCredentials(CA, PRIVATE_KEY, CERT)
            self.mqtt_client.configureOfflinePublishQueueing(-1)
            self.mqtt_client.configureDrainingFrequency(2)
            self.mqtt_client.configureConnectDisconnectTimeout(10)
            self.mqtt_client.configureMQTTOperationTimeout(5)
            self.initilized = True
        except FailedToCreateMQTTConnection:
            print("Error: MQTTClient Construction Failed.")
            self.initilized = False

    def send_payload(self, data):
        if data in("", '', None):
            print("Error: Message Empty.")
            return False
        payload = '{"ID": "Success", "Data": "'+str(data)+'" }'
        try:
            self.mqtt_client.connect()
            self.mqtt_client.publish("testConnection", payload, 0)
            print("Publish Success.")
            return True
        except FailedToSendError:
            print("Publish Failed.")
            return False

class Error(Exception):
    """Base class for other exceptions"""

class FailedToSendError(Error):
    """The device has failed to send the payload to AWS"""

class FailedToCreateMQTTConnection(Error):
    """The device has failed connect to AWS"""
