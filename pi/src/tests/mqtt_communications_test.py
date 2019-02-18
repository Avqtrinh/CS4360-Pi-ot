import sys
import time
from unittest.mock import MagicMock
from AWSIoTPythonSDK.MQTTLib import AWSIoTMQTTClient
import unittest
from datetime import date, datetime
path_length = sys.path[0].index("tests")
sys.path.insert(0,sys.path[0][0:path_length]+'modules')
from mqtt_comunications import communication_handler

test_endpoint = "not_a_real_endpoint"
test_ca = "not/a/real/path"
test_cert = test_ca
test_privatekey = test_ca

class test_comunication_handler(unittest.TestCase):
    #test cases:
    #?
    def test_init(self):
        test_com_handler = communication_handler(test_endpoint,test_ca,test_cert,test_privatekey)
        self.assertIsNotNone(test_com_handler.mqttClient)

    #test cases:
    #mqttClient cant send empty messgaes
    def test_send_payload(self):
        test_com_handler = communication_handler(test_endpoint,test_ca,test_cert,test_privatekey)
        self.assertFalse(test_com_handler.send_payload('test'))
        test_com_handler.mqttClient = MagicMock()
        test_com_handler.mqttClient.connect = MagicMock(return_value = 1)
        test_com_handler.mqttClient.publish = MagicMock(return_value = 1)
        self.assertFalse(test_com_handler.send_payload(""))
        self.assertFalse(test_com_handler.send_payload(''))
        self.assertFalse(test_com_handler.send_payload(None))

if __name__ == '__main__':
    unittest.main()
