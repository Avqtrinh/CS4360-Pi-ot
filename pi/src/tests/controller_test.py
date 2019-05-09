import sys
from time import sleep
import unittest
from unittest.mock import MagicMock
from unittest.mock import patch
from gpiozero.pins.mock import MockFactory, MockPin, MockConnectedPin
from gpiozero import Device
from gpiozero import exc
path_length = sys.path[0].index("tests")
sys.path.insert(0,sys.path[0][0:path_length])
from modules.motion import PirSensor
from controller import Controller

class TestPiController(unittest.TestCase):
    def test__init__(self):
        Device.pin_factory = MockFactory()
        test_controller = Controller()
        self.assertIsNotNone(test_controller.com_handler)
        self.assertIsNotNone(test_controller.pir)
        test_controller.com_handler = MagicMock()
        test_controller.pir = MagicMock()
        test_controller.com_handler.send_payload = MagicMock(return_value = 1)
        test_controller.pir.look_for_motion = MagicMock(return_value = "TestMessage")
        test_controller.run()
        self.assertEqual(test_controller.payload,"TestMessage")
        test_controller.pir.look_for_motion = MagicMock(return_value = "")
        test_controller.run()
        self.assertEqual(test_controller.payload,"")

if __name__ == '__main__':
    unittest.main()
