function tabulateAnswers(event) {
  console.log("CLICK", event)


  // Détermination du type de roche par réponse au questionnaire 
let cristallized = false  
let roundholes = false
let holes = false 
let schiste= false
let gneiss= false
let orientation = false



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
    typeroche = "une roche sédimentaire : Schiste"
  }else if (gneiss == true){
    typeroche = "une roche métamorphique : Gneiss"
  }else if(cristallized==true && holes==false && orientation==false){
    typeroche= "une roche magmatique plutonique : Granite"
  }else if(cristallized==true && orientation==true){
    typeroche= "une roche métamorphique : Gneiss"
  }else if (cristallized==true && holes==true &&orientation==false){
      typeroche= "une roche sédimentaire : Gypse"
  }else if(cristallized==true && holes==true && orientation==true){
    typeroche= "une roche métamorphique : Gneiss"
  }else if (orientation==true && holes==true){
    typeroche="une roche sédimentaire : Marne"
  }else if (orientation==true){
    typeroche="une plus probablement une marne (schiste possible)"
  }else if (holes==true && orientation==false){
    typeroche="une roche sédimentaire : grès ou calcaire"
  }else if (holes==false && orientation==false){
    typeroche="probablement une roche sédimentaire : grès ou calcaire, observe mieux, elle comporte probablement quelques porosités"
  }

  if (!document.getElementsByName('q1')[0].checked && !document.getElementsByName('q1')[1].checked 
  && !document.getElementsByName('q2')[0].checked && !document.getElementsByName('q2')[1].checked && !document.getElementsByName('q2')[2].checked
  && !document.getElementsByName('q3')[0].checked && !document.getElementsByName('q3')[1].checked && !document.getElementsByName('q3')[2].checked && !document.getElementsByName('q3')[3].checked){
    typeroche = 'non connue'
  }



// Détermination du type de roche par analyse de photo
  // var photo = document.getElementById('input')
  // roche_algo = algo(photo)



  
// Affichage des résultats
  if (!(typeroche == 'non connue')){
    document.getElementById("result").textContent = 'D\'après la réponse au questionnaire, la roche est ' 
    document.getElementById("result").textContent += typeroche
    document.getElementById("result").style.fontFamily = "Arial"
    document.getElementById("result").style.fontSize = "18px"
    document.getElementById("result").style.backgroundColor = 'rgb(92, 148, 148)'
    document.getElementById("result").style.borderRadius = '10px'
    document.getElementById("result").style.padding = '10px'
    document.getElementById("result").style.textAlign = "center"
  }
  
  //if (!(roche_algo == 'non connue')){
  // document.getElementById("result").textContent = 'D\'après l\'analyse de votre photo, la roche est ' 
  // document.getElementById("result").textContent += roche_algo 
  // document.getElementById("result").style.fontFamily = "Arial"
  // document.getElementById("result").style.fontSize = "18px"
  // document.getElementById("result").style.backgroundColor = 'rgb(92, 148, 148)'
  // document.getElementById("result").style.borderRadius = '10px'
  // document.getElementById("result").style.padding = '10px'
  // document.getElementById("result").style.textAlign = "center"
  // }
  
  

}