function tabulateAnswers(event) {
  console.log("CLICK", event)

let cristallized = false  
let roundholes = false
let holes = false 
let schiste= false
let gneiss= false
let orientation = false
let typeroche = "Réponds aux trois questions"


  if (document.getElementsByName('q1')[0].checked) {
    cristallized = true;
  }

  if (document.getElementsByName('q2')[0].checked) {
      roundholes = true;
  }

  if (document.getElementsByName('q2')[1].checked) {
      holes = true;
  }

  if (document.getElementsByName('q3')[0].checked) {
      schiste = true;
  }

  if (document.getElementsByName('q3')[1].checked) {
    gneiss = true;
  }

  if (document.getElementsByName('q3')[2].checked) {
    orientation = true;
  }

  if (roundholes == true) {
    typeroche = "Roche magmatique volcanique : Basalte";
  } else if (schiste == true) {
    typeroche = "Roche sédimentaire : Schiste"
  }else if (gneiss == true){
    typeroche = "Roche métamorphique : Gneiss"
  }else if(cristallized==true && holes==false && orientation==false){
    typeroche= "Roche magmatique plutonique : Granite"
  }else if(cristallized==true && orientation==true){
    typeroche= "Roche métamorphique : Gneiss"
  }else if (cristallized==true && holes==true &&orientation==false){
      typeroche= "Roche sédimentaire : Gypse"
  }else if(cristallized==true && holes==true && orientation==true){
    typeroche= "Roche métamorphique : Gneiss"
  }else if (orientation==true && holes==true){
    typeroche="Roche sédimentaire : Marne"
  }else if (orientation==true){
    typeroche="Plus probablement une marne (schiste possible)"
  }else if (holes==true && orientation==false){
    typeroche="Roche sédimentaire : grès ou calcaire"
  }else if (holes==false && orientation==false){
    typeroche="Probablement une roche sédimentaire : grès ou calcaire, observe mieux, elle comporte probablement quelques porosités"
  }

  
  document.getElementById("result").textContent = typeroche  
  document.getElementById("result").style.fontFamily = "Arial"
  document.getElementById("result").style.fontSize = "13px"

 
}