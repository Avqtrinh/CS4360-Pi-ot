from datetime import datetime as dt
from gpiozero import MotionSensor

class PirSensor():
    pir = None
    def __init__(self, gpioid):
        try:
            self.pir = MotionSensor(gpioid)
        except NoSensorError:
            print("Error: 1")
            print("No motion sensor device found.")
            print("Please check that the sensor is connected")
            print("and the GPIO pin ID is correct.")

    def look_for_motion(self):
        if self.pir.motion_detected:
            return dt.now()
        return None

class Error(Exception):
    """Base class for other exceptions"""

class NoSensorError(Error):
    """The device has failed to send the payload to AWS"""
