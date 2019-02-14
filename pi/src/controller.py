#insert path to the rest of the files will change for safty later
import sys
sys.path.insert(0,'/*')
from Motion import pir_sensor

#create settings ini later for this
pir = pir_sensor(4)
pir.look_for_motion()
