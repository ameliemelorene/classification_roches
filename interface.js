function tabulateAnswers(event) {
    console.log("CLICK", event)
    
  let raph = false
  let cancer = false 
  let lion = false
  let typeroche = "Remplis le form Pauline"

    if (document.getElementsByName('q1')[0].checked) {
        raph = true;
    }

    if (document.getElementsByName('q2')[0].checked) {
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
      typeroche = "Oulà ça je c'est Chloé"
    }

    if ((lion==true) && (cancer==true)){
      typeroche = "T'as rien compris chérie, on peut pas être deux signes à la fois "
    }
    
    document.getElementById("result").textContent = typeroche   
}
