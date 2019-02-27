import sys
import unittest
from unittest.mock import MagicMock
from time import sleep
from modules.Motion import PirSensor
path_length = sys.path[0].index("tests")
sys.path.insert(0,sys.path[0][0:path_length])
from controller import Controller

class TestPiController(unittest.TestCase):

    def test__init__(self):
        test_controller = Controller()
        self.assertIsNotNone(test_controller.COM_HANDLER)
        self.assertNotEqual(test_controller.PAYLOAD , 'TEST')
        test_controller.PIR.look_for_motion = MagicMock(return_value = 'TEST')
        self.assertEqual(test_controller.PAYLOAD , 'TEST')
        #self.assertFalse(test_controller.COM_HANDLER.send_payload(PAYLOAD))
        #self.assertTrue(test_controller.COM_HANDLER.send_payload(PAYLOAD))

if __name__ == '__main__':
    unittest.main()
