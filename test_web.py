from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('interface_web.html')

@socketio.on("requete")
def f(json):
    ima=json["image"]
    socketio.emit("reponse", {"premier_pixel" : 33}) 

if __name__=="__main__":
    socketio.run(app, port=5001)