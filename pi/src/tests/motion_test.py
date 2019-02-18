import sys
from gpiozero.pins.mock import MockFactory,MockPin,MockConnectedPin
import unittest
from time import sleep
from gpiozero import MotionSensor,Device
path_length = sys.path[0].index("tests")
sys.path.insert(0,sys.path[0][0:path_length]+'modules')
from Motion import pir_sensor


class testMotionSensor(unittest.TestCase):
    #test cases:
    # no sensor found
    # sensor is found
    def test_init(self):
        test_pir=pir_sensor(1)
        self.assertIsNone(test_pir.pir)
        Device.pin_factory = MockFactory()
        test_pir=pir_sensor(4)
        self.assertIsNotNone(test_pir.pir)

    #test cases:
    #make sure that if motion_detected returns true to output a datetime
    #make sure that if motion_detected returns false to output None
    def test_look_for_motion(self):
        Device.pin_factory = MockFactory()
        test_pir=pir_sensor(4)
        pin = Device.pin_factory.pin(4)
        self.assertEqual(test_pir.look_for_motion(),None)
        pin.drive_high()
        sleep(0.5) #give time for state switch
        self.assertNotEqual(test_pir.look_for_motion(),None)

if __name__ == '__main__':
    unittest.main()
