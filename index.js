function gessedNumber() {
  let givenNumber1 = parseInt(prompt("Donne-moi un nombre entre 0 et 50"))
  while(givenNumber1 > 50 || givenNumber1 < 0){
    givenNumber1 = prompt("entre 0 et 50 !")
  }
  return givenNumber1
}
//entrer le nombre 1

function recupNumber2() {
  let givenNumber2 = document.getElementById("givenNumber2").value
  //console.log(givenNumber2) c'est OK
  return givenNumber2
}

function didWin(givenNumber1, givenNumber2) {
  if (givenNumber2 == givenNumber1) {
    alert("Bravo! vous avez deviné le nombre.");
    return true
  }
  else if (givenNumber2 < givenNumber1) { 
     alert("Plus grand"); 
    }
  else {
    alert("Plus petit"); 
    }
  return false
  //retourne le résultat mais pas le nom
}

function tentatives() {

}

function Effassoor(){

}  


function gamePlay() {
  let givenNumber2 = recupNumber2();
  let Win = didWin(givenNumber1,givenNumber2)
  if(Win){
    Effassoor()
  }
 /* while (didWin(givenNumber1,givenNumber2) === false) {
    ;
    } */
  //la fonction se rappelle elle même si False
}
// gamePlay gere les appels de fonctions et la transmission de votre variable 
// d’une fonction à une autre.
//Dans la fonction gamePlay, si didIWin a retourné true, on arrete le jeu. 

let givenNumber1 = gessedNumber()
//je stocke le résultat de la fonction
let validate = document.getElementById("validate")
validate.addEventListener('click', gamePlay)






