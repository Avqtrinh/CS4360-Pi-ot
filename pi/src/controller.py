#insert path to the rest of the files will change for safty later
import sys
from time import sleep
from modules.Motion import PirSensor
from modules.mqtt_communications import CommunicationHandler

class Controller():
    def __init__(self):
        self.endpoint = "a2vjr670r30pov-ats.iot.us-east-2.amazonaws.com"
        self.ca = sys.path[0]+"/certinfo/CA.pem"
        self.cert = sys.path[0]+"/certinfo/29c44ddf59-certificate.pem.crt"
        self.private_key = sys.path[0]+'/certinfo/29c44ddf59-private.pem.key'
        self.com_handler = CommunicationHandler(self.endpoint, self.ca, self.cert, self.private_key)
        self.pir = PirSensor(4)
        self.payload = ""
    def run(self):
        try:
            while True:
                self.payload = self.pir.look_for_motion()
                if self.payload is not None:
                    self.com_handler.send_payload(self.payload)
                    print(self.payload)
                    sleep(5)
        except:
            print("message failed to send")

if __name__ == '__main__':
    controller = Controller()
    controller.run()
