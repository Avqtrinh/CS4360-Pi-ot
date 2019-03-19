from datetime import datetime as dt
from gpiozero import MotionSensor

class PirSensor():
    """
    Class for Sensor for Pi Infrared sensor
    -Define pir to none
    """
    pir = None
    def __init__(self, gpioid):
        """
        Args: gpioid (GPIO pin ID)
        -try statement to set instance of pir to Motion Sensor
        -if no sensor is detected then print error message
        """
        try:
            self.pir = MotionSensor(gpioid)
        except NoSensorError:
            print("Error: 1")
            print("No motion sensor device found.")
            print("Please check that the sensor is connected")
            print("and the GPIO pin ID is correct.")

    def look_for_motion(self):
        """
        -if motion was detected return the event
        -next, return none
        """
        if self.pir.motion_detected:
            return dt.now()
        return None

class Error(Exception):
    """Base class for other exceptions"""

class NoSensorError(Error):
    """The device has failed to send the payload to AWS"""
