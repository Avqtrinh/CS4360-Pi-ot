from gpiozero import MotionSensor
from datetime import datetime as dt
from time import sleep

class pir_sensor():
    pir = None
    def __init__(self, gpioid):
        try:
            self.pir = MotionSensor(4)
        except:
            print("Error: 1")
            print("No motion sensor device found.")
            print("Please check that the sensor is connected")
            print("and the GPIO pin ID is correct.")

    def look_for_motion(self):
        if self.pir.motion_detected:
            return dt.now()
        else:
            return None
