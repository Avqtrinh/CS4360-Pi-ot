"""
    Motion module that handles all motion related functions of the pi
"""
from gpiozero import MotionSensor

class PirSensor():
    """
    Class for Sensor for Pi Infrared sensor.
    Attributes
        pir - the motion sensor object from gpiozero
    """
    def __init__(self, gpioid):
        """
        This Method Initializes the pir sensor with the connection to the pi's gpio
        Args:
            -self - this object
            -gpioid - the pin ID (int) for the I/O
        """
        try:
            self.pir = MotionSensor(gpioid)
        except NoSensorError:
            pass


    def look_for_motion(self):
        """
        This method checks to see if there is currently any motion.
        Args:
            -self - this object
        """
        if self.pir.motion_detected:
            return 'gps n/a'
        return None


class Error(Exception):
    """Base class for other exceptions"""


class NoSensorError(Error):
    """The device has failed to send the payload to AWS"""
