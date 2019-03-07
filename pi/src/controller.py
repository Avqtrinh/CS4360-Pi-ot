#insert path to the rest of the files will change for safty later
import sys
from time import sleep
from modules.Motion import PirSensor
from modules.mqtt_communications import CommunicationHandler
sys.path.insert(0, 'modules/*')

ENDPOINT = "a2vjr670r30pov-ats.iot.us-east-2.amazonaws.com"
CA = "certinfo/CA.pem"
CERT = "certinfo/29c44ddf59-certificate.pem.crt"
PRIVATE_KEY = 'certinfo/29c44ddf59-private.pem.key'
COM_HANDLER = CommunicationHandler(ENDPOINT, CA, CERT, PRIVATE_KEY)
#create settings ini later for this
PIR = PirSensor(4)
while True:
    PAYLOAD = None
    PAYLOAD = PIR.look_for_motion()
    if PAYLOAD is not None:
        COM_HANDLER.send_payload(PAYLOAD)
        print(PAYLOAD)
        sleep(5)
