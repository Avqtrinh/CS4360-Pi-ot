#insert path to the rest of the files will change for safty later
import sys
from time import sleep
from modules.Motion import PirSensor
from modules.mqtt_communications import CommunicationHandler
sys.path.insert(0, 'modules/*')

class Controller():

    def __init__(self):
        self.ENDPOINT = "a2vjr670r30pov-ats.iot.us-east-2.amazonaws.com"
        self.CA = "certinfo/CA.pem"
        self.CERT = "certinfo/29c44ddf59-certificate.pem.crt"
        self.PRIVATE_KEY = 'certinfo/29c44ddf59-private.pem.key'

        self.COM_HANDLER = CommunicationHandler(ENDPOINT, CA, CERT, PRIVATE_KEY)
        #create settings ini later for this
        self.PIR = PirSensor(4)
        while True:
            self.PAYLOAD = None
            self.PAYLOAD = self.PIR.look_for_motion()
            if self.PAYLOAD is not None:
                self.COM_HANDLER.send_payload(PAYLOAD)
                print(PAYLOAD)
                sleep(5)
