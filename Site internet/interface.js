function onclick(event) {
    console.log("CLICK", event)
    
  let grenue = False
  let signe = False 

    if (document.getElementById('grenue').checked) {
        grenue = True;
    }


    if (document.getElementById('cancer').checked) {
        signe = True;
    }

    if (signe == True) {
        var typeroche = "Amélie";
    } else if (signe == False) {
        var typeroche = "Inès"
    }
  
    
    document.getElementById("result").textContent = typeroche   
}


function onload (event) {
    console.log("page loaded, arming callbacks")
    document.getElementById("submit")
      .addEventListener("click", onclick);
}

window.addEventListener("load", onload);

