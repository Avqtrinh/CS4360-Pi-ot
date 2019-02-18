#insert path to the rest of the files will change for safty later
import sys
sys.path.insert(0,'modules/*')
from modules.Motion import pir_sensor
from modules.mqtt_comunications import communication_handler
from time import sleep

endpoint = "a2vjr670r30pov-ats.iot.us-east-2.amazonaws.com"
ca = "certinfo/CA.pem"
cert = "certinfo/29c44ddf59-certificate.pem.crt"
privatekey = 'certinfo/29c44ddf59-private.pem.key'

com_handler = communication_handler(endpoint,ca,cert,privatekey)
#create settings ini later for this
pir = pir_sensor(4)
while True:
    payload = None
    payload = pir.look_for_motion()
    if payload != None:
        com_handler.send_payload(payload)
        print(payload)
        sleep(5)
