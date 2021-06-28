import cv2
import numpy as np
from PIL import Image
import random as rd

from keras.models import model_from_json
import numpy as np
import matplotlib.pyplot as plt

import statistics
from statistics import mode

import os
import glob

from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('interface_web.html')

@app.route('/i2')
def i2():
    return render_template('interface2_web.html')




##1. Lecture et redimensionnement de la photo


#On introduit d'abord une fonction qui découpe un carré à partir du centre de la photo
def crop_around_center(image, width, height):
    """
    Given a NumPy / OpenCV 2 image, crops it to the given width and height, around it's centre point
    """

    image_size = (image.shape[1], image.shape[0])
    image_center = (int(image_size[0] * 0.5), int(image_size[1] * 0.5))

    if(width > image_size[0]):
        width = image_size[0]

    if(height > image_size[1]):
        height = image_size[1]

    x1 = int(image_center[0] - width * 0.5)
    x2 = int(image_center[0] + width * 0.5)
    y1 = int(image_center[1] - height * 0.5)
    y2 = int(image_center[1] + height * 0.5)

    return image[y1:y2, x1:x2]

#Fonction qui permet de lire et redimensionner l'image avant passage dans le réseau
def read_and_redim(path):
    """
    Given the picture's path, crops it in a square around its centre point and resize it to 256*256 pixels
    """
    img=cv2.imread(path)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

    taille = 256
    longueur, largeur = (img.shape[1], img.shape[0])
    l = min(longueur,largeur)

    im_final = crop_around_center(img,l,l)
    im_final = Image.fromarray(im_final)
    im_final = im_final.resize((taille,taille))
    return im_final

#Fonction qui coupe une image carrée de côté x en 4 carrés
def cut_in_four(img,x):
    """
    Given a square picture of size x*x open in Image, return four squares cropped from the picture
    """
    im1 = img.crop((0, 0, x/2, x/2))
    im2 = img.crop((x/2, 0, x, x/2))
    im3 = img.crop((0, x/2, x/2, x))
    im4 = img.crop((x/2, x/2, x, x))
    return im1, im2, im3, im4

#Fonction qui permet d'obtenir le bon format d'image à faire tester au réseau
def picture_network(img):
    """
    Given a numpy picture, return the right picture for the network
    """
    img_final = img.reshape((1,128,128,3))
    img_final = img_final/255
    return img_final

##2. Passage dans le réseau

def network_test(img):

    json_file = open('rock_model_c2.json', 'r')
    loaded_rock_model_json = json_file.read()
    json_file.close()
    loaded_rock_model = model_from_json(loaded_rock_model_json)
    loaded_rock_model.load_weights("model_c2.h5")

    prediction = loaded_rock_model.predict(img)
    predicted = np.argmax(np.round(prediction),axis=1)
    return int(predicted)


def rocks(number):

    dico_roches = {"0":"basalte","1":"calcaire","2":"gneiss","3":"granite","4":"grès","5":"gypse","6":"schiste"}
    return dico_roches[str(number)]

##3. Fonction finale


def final_function(path):
    print("loading...")
    
    img = read_and_redim(path)
    img1, img2, img3, img4 = cut_in_four(img,256)
    list_img = [img1, img2, img3, img4]

    list_results = []
    i = 1
    for image in list_img:
        print(i,"/ 4")
        image_np = np.asarray(image,dtype = float)
        image_redim = picture_network(image_np)
        list_results.append(network_test(image_redim))

        i += 1
    rock_number = mode(list_results)

    return rocks(rock_number)

#print(final_function("6.jpg"))