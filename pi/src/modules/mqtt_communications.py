from AWSIoTPythonSDK.MQTTLib import AWSIoTMQTTClient


class CommunicationHandler():
    """
    This class handles the communication to AWS.
    Attributes:
        -mqtt_client - the client used to connect to AWS
        -initalized - used for testing
    """


    def __init__(self, ENDPOINT, CA, CERT, PRIVATE_KEY):
        """
        This method initializes the CommunicationHandler class with the MQTT client and handles errors on client creation.
        Args:
            -self
            -ENDPOINT - The endpoint for AWS Connection for IOT
            -CA - Certification Info for AWS
            -CERT - Certificate details for AWS
            -PRIVATE KEY - Private Key for AWS
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
        Handles the sending of the data to AWS in a Json format.
        Args:
            -self - this object
            -data - the string object that is to be formated and sent to aws

        Attributes:
            -PAYLOAD - the json object that is sent to aws
        """
        if data in("", '', None):
            print("Error: Message Empty.")
            return False
        payload = '{"ID": "'+getSerial()+'", "Data": "'+str(data)+'" }'
        try:
            self.mqtt_client.connect()
            self.mqtt_client.publish("testConnection", payload, 0)
            print("Publish Success.")
            return True
        except FailedToSendError:
            print("Publish Failed.")
            return False
            
    ##https://www.raspberrypi-spy.co.uk/2012/09/getting-your-raspberry-pi-serial-number-using-python/
    def getSerial():
        cpuserial = "0000000000000000"
        try:
            f = open('/proc/cpuinfo','r')
            for line in f:
                if line[0:6]=='Serial':
                    cpuserial = line[10:26]
            f.close()
        except:
            cpuserial = "ERROR000000000"

  return cpuserial
class Error(Exception):
    """Base class for other exceptions"""

class FailedToSendError(Error):
    """The device has failed to send the payload to AWS"""

class FailedToCreateMQTTConnection(Error):
    """The device has failed connect to AWS"""
