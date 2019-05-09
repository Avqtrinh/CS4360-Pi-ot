import sys
import time
from datetime import date
from datetime import datetime
import unittest
from unittest.mock import MagicMock
from AWSIoTPythonSDK.MQTTLib import AWSIoTmqtt_client
from mqtt_communications import CommunicationHandler

path_length = sys.path[0].index("tests")
sys.path.insert(0,sys.path[0][0:path_length]+'modules')

test_endpoint = "not_a_real_endpoint"
test_ca = "not/a/real/path"
test_cert = test_ca
test_privatekey = test_ca
test_dummyfile = "DummyFile.txt"

class test_comunication_handler(unittest.TestCase):

    def test_init(self):
        test_com_handler = CommunicationHandler(test_endpoint,test_ca,test_cert,test_privatekey)
        self.assertIsNotNone(test_com_handler)
        self.assertIsNotNone(test_com_handler.mqtt_client)
        self.assertFalse(test_com_handler.initilized)
        test_com_handler = CommunicationHandler(test_endpoint,test_dummyfile,test_dummyfile,test_dummyfile)

    def test_send_payload(self):
        test_com_handler = CommunicationHandler(test_endpoint,test_ca,test_cert,test_privatekey)
        self.assertFalse(test_com_handler.send_payload('test'))
        test_com_handler.mqtt_client = MagicMock()
        test_com_handler.mqtt_client.connect = MagicMock(return_value = 1)
        test_com_handler.mqtt_client.publish = MagicMock(return_value = 1)
        self.assertTrue(test_com_handler.send_payload('test'))
        self.assertFalse(test_com_handler.send_payload(""))
        self.assertFalse(test_com_handler.send_payload(''))
        self.assertFalse(test_com_handler.send_payload(None))

if __name__ == '__main__':
    unittest.main()
