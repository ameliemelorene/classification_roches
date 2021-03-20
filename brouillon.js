if (roundholes == true) {
    typeroche = "Roche magmatique volcanique : Basalte";
} else if (schiste == true) {
    typeroche = "Roche sédimentaire : Schiste"
} else if (gneiss == true){
  typeroche = "Roche métamorphique : Gneiss"
}else if (cristallized==true){
  if (holes==true){
    typeroche= "Roche sédimentaire : Gypse"
  }
  else{
    typeroche= "Roche magmatique plutonique : Granite"
  }
}else if (orientation==true){
  if(holes==true){
    typeroche="Roche sédimentaire : Marne"
  }
  else{typeroche="Plus probablement une marne, ou du schiste, voire du gneiss"}
}else if (holes==true and cristallized==false){
  typeroche="Roche sédimentaire : grès ou calcaire"
}else if (holes==false and cristallized==false){
  typeroche="Probablement une roche sédimentaire : grès ou calcaire, observe mieux, elle comporte probablement quelques porosités"
}
function tabulateAnswers(event) {
    console.log("CLICK", event)
    
  let schiste = false
  let sedimentaire = false 
  let metamorphique = false
  let schiste
  let typeroche = "Essaye de répondre aux plus de questions possibles pour une meilleure détermination de la roche"
  
    if (document.getElementsByName('q1')[1].checked) {
        raph = true;
    }
  
    if (document.getElementsByName('q1')[0].checked) {
        cancer = true;
    }
  
    if (document.getElementsByName('q3')[0].checked) {
        lion = true;
  }
  
    if (cancer == true) {
        typeroche = "Amélie";
    } else if (lion == true) {
        typeroche = "Inès"
    } else if (raph == true){
      typeroche = "Oulà ça je sais c'est Chloé"
    }
  
    if ((lion==true) && (cancer==true)){
      typeroche = "T'as rien compris chérie, on peut pas être deux signes à la fois "
    }
    
    document.getElementById("result").textContent = typeroche   
  }