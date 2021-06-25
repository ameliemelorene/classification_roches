from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('test.html')

@socketio.on("requete")
def f(json):
    n=json["image"]
    socketio.emit("reponse", {"bonjour" : 2*n}) 

if __name__=="__main__":
    socketio.run(app, port=5001)