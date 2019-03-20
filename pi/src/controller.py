#insert path to the rest of the files will change for safty later
import sys
from time import sleep
from modules.Motion import PirSensor
from modules.mqtt_communications import CommunicationHandler
sys.path.insert(0, 'modules/*')


class Controller():
    """
    Class for Controller of All Pi-ot functions.
    Attributes:
        -ENDPOINT - The endpoint for AWS Connection for IOT
        -CA - Certification Info for AWS
        -CERT - Certificate details for AWS
        -PRIVATE KEY - Private Key for AWS
        -Communication Handler - The Mqtt communications handler
        -Pir - The pi's sensor controller
        -PAYLOAD - The datetime object from the Pi
    """


    def __init__(self):
        """This Method Initializes The Controller it contains the following:
        Args:
            -self - this object
        """
        self.ENDPOINT = "a2vjr670r30pov-ats.iot.us-east-2.amazonaws.com"
        self.CA = "certinfo/CA.pem"
        self.CERT = "certinfo/29c44ddf59-certificate.pem.crt"
        self.PRIVATE_KEY = 'certinfo/29c44ddf59-private.pem.key'
        self.COM_HANDLER = CommunicationHandler(ENDPOINT, CA, CERT, PRIVATE_KEY)
        #create settings ini later for this
        self.PIR = PirSensor(4)
        while True
            self.PAYLOAD = self.PIR.look_for_motion()
            if self.PAYLOAD is not None:
                self.COM_HANDLER.send_payload(PAYLOAD)
                sleep(5)
