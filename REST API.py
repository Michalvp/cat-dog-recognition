from flask import Flask,render_template, request, url_for
from keras.models import load_model
from PIL import Image
from keras.utils import img_to_array
import numpy as np
app = Flask(__name__)
model = load_model("CVDR_model.keras", compile=False)
@app.route('/')
def index():
    return render_template("CVDR app.html")

@app.route('/check', methods=["POST"])
def checking():
    file=request.files['Image']
    img = Image.open(file)
    test = np.array(img_to_array(img))
    test = np.expand_dims(test, axis=0)
    prediction=model.predict(test) 
    prediction=np.argmax(prediction,axis=1)
    if (prediction== 1):
        return "dog"
    elif (prediction==0):
        return "cat"
    else:
        return "error"
if (__name__ == '__main__'):
    app.run(debug=True)