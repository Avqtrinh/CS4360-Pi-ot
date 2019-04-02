import sys
from time import sleep
import unittest
from gpiozero.pins.mock import MockFactory
from gpiozero import Device
sys.path.insert(0, sys.path[0][0:sys.path[0].index("tests")]+'modules')
from Motion import PirSensor


class TestMotionSensor(unittest.TestCase):
    #test cases:
    # no sensor found
    # sensor is found
    def test_init(self):
        Device.pin_factory = MockFactory()
        #test_pir = PirSensor(1)
        #self.assertIsNone(test_pir.pir)
        test_pir = PirSensor(4)
        self.assertIsNotNone(test_pir.pir)

    #test cases:
    #make sure that if motion_detected returns true to output a datetime
    #make sure that if motion_detected returns false to output None
    def test_look_for_motion(self):
        Device.pin_factory = MockFactory()
        test_pir = PirSensor(4)
        pin = Device.pin_factory.pin(4)
        self.assertEqual(test_pir.look_for_motion(), None)
        pin.drive_high()
        sleep(0.5) #give time for state switch
        self.assertNotEqual(test_pir.look_for_motion(), None)

if __name__ == '__main__':
    unittest.main()
