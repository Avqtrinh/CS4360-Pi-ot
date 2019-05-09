"""
    controller is the main class that manages all the pi's functions
"""
import sys
from time import sleep
from modules.motion import PirSensor
from modules.mqtt_communications import CommunicationHandler
sys.path.insert(0, 'modules/*')


def get_serial():
    """
        this method ispulled from
        https://www.raspberrypi-spy.co.uk/2012/09/getting-your-raspberry-pi-serial-number-using-python/
    """
    cpuserial = "0000000000000000"
    try:
        file = open('/proc/cpuinfo', 'r')
        for line in file:
            if line[0:6] == 'Serial':
                cpuserial = line[10:26]
        file.close()
    except FileNotFoundError:
        cpuserial = "ERROR000000000"
    return cpuserial

class Controller():
    """
    Class for Controller of All Pi-ot functions.
    Attributes:
        -endpoint - The endpoint for AWS Connection for IOT
        -ca - certification Info for AWS
        -cert - certificate details for AWS
        -PRIVATE KEY - Private Key for AWS
        -Communication Handler - The Mqtt communications handler
        -pir - The pi's sensor controller
        -payload - The datetime object from the Pi
    """


    def __init__(self):
        """This Method Initializes The Controller it contains the following:
        Args:
            -self - this object
        """
        self.endpoint = "a2vjr670r30pov-ats.iot.us-east-2.amazonaws.com"

        self.ca = "keys\\CA.pem"
        self.cert = "keys\\certificate.pem.crt"
        self.private_key = 'keys\\private.pem.key'
        self.com_handler = CommunicationHandler(self.endpoint, self.ca, self.cert, self.private_key)
        print(get_serial())
        #create settings ini later for this
        self.pir = PirSensor(4)
        while True:
            self.payload = self.pir.look_for_motion()
            if self.payload is not None:
                self.payload = '{"deviceid":"'+ get_serial() +'","data":"'+self.payload+'"}'
                self.com_handler.send_payload(self.payload)
                sleep(5)





if __name__ == '__main__':
    Controller()
