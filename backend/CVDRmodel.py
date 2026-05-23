from PIL import Image
from keras.models import load_model
from keras.utils import img_to_array
import numpy as np
import sys
model = load_model("CVDR_model.keras", compile=False)
file = sys.argv[1]
img = Image.open(file)
test = np.array(img_to_array(img.resize((512,512))))
test = np.expand_dims(test, axis=0)
prediction=model.predict(test, verbose=0) 
prediction=np.argmax(prediction,axis=1)
if (prediction== 1):
        print ("dog")
elif (prediction==0):
        print ("cat")
else:
        print("error")