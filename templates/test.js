window.addEventListener("DOMContentLoaded", (event) => {
    var socket = io.connect("http://" + document.domain + ":" + location.port );//ouvrir dans le serveur

    button = document.getElementById("button")
    button.onclick = function(){
        console.log('click');
        socket.emit("requete",{"image": avatar});//ça doit etre un dictionnaire
    }

    socket.on("reponse",function(data){
        div = document.getElementById("gateau");
        div.textContent=data["bonjour"];
    })
})