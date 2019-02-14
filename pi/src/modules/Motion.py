from gpiozero import MotionSensor
from datetime import datetime as dt
from time import sleep

class pir_sensor():

    def __init__(self,gpioid):
        try:
            self.pir = MotionSensor(4)
        except:
            print("Error: 1")
            print("No motionsensor device found.")
            print("Please check that the sensor is firmly connected")
            print("and the gpio pin id is correct.")

    def look_for_motion(self):
        while True:
            self.pir.wait_for_motion()
            #send with mqtt here? or return.
            print(dt.now())
            sleep(2)
