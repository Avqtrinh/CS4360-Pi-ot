from AWSIoTPythonSDK.MQTTLib import AWSIoTMQTTClient

class CommunicationHandler():
    """
    This class handles the communication to AWS
    """

    def __init__(self, ENDPOINT, CA, CERT, PRIVATE_KEY):
        """
        This method defines instance variables of mqtt client and initalizes
        Attributes:
        -mqtt_client
        -initalized
        Args:
        -self
        -ENDPOINT
        -CA -Certification Info
        -CERT -Certification Cridential Details
        -PRIVATE_KEY -private key for Certification
        -Return True

        -catches if connection to MQTT was unsucessfully created
        """
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
        """
        Attributes:
        -mqtt_client -AWS IoT connection through mqtt
        -PAYLOAD -Pi information data with ID
        Args:
        -self
        -data -Raspberry Pi event outcome

        Sends data payload to mqtt
        -if there is no data then print Message
        -return False
        -Define payload as data with ID

        -Try statement to connect and publish data to AWS
        -connect mqtt_client
        -Publish data to AWS
        -print publish success
        -return True

        -Catch if failed to send Data
        -print published failed
        -return False
        """
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
