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

@socketio.on("requete")
def f(json):
    print(json)
    #ima=json["image_roche"]
    socketio.emit("reponse", {"premier_pixel" : 'tchoin', "petit_test" : 22}) 

if __name__=="__main__":
    socketio.run(app, port=5001)