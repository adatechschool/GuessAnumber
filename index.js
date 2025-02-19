function gessedNumber() {
  let givenNumber1 = parseInt(prompt("Donne-moi un nombre entre 0 et 50"))
  while (givenNumber1 > 50 || givenNumber1 < 0) {
    givenNumber1 = prompt("entre 0 et 50 !")
  }
  return givenNumber1
}
//entrer le nombre1

function recupNumber2() {
  let givenNumber2 = document.getElementById("givenNumber2").value
  //console.log(givenNumber2) c'est OK
  return givenNumber2
}

function didWin(givenNumber1, givenNumber2) {
  if (givenNumber2 == givenNumber1) {
    let game = document.getElementById("game");
    game.style.display ="none";
    let win = document.getElementById("win");
    win.style.display = "inline-block"
    return true
  }
  else if (givenNumber2 < givenNumber1) {
    alert("Plus grand");
    let min = document.getElementById("min");
    min.innerText = givenNumber2;
  }
  else {
    alert("Plus petit");
    let max = document.getElementById("max");
    max.innerText = givenNumber2;
  }
  return false
  //retourne le résultat mais pas le nom
}

function gamePlay() {
  const clickButton = document.querySelector('#validate')
  count++; clickButton.innerText = `Nombre de tentatives : ${count}`;
  let givenNumber2 = recupNumber2();
  let Win = didWin(givenNumber1, givenNumber2)

}
// gamePlay gere les appels de fonctions et la transmission de la variable 
// d’une fonction à une autre.

//Dans la fonction gamePlay, si didIWin a retourné true, on arrete le jeu. 

let givenNumber1 = gessedNumber();
//je stocke le résultat de la fonction
let validate = document.getElementById("validate");
let count = 0;
validate.addEventListener('click', gamePlay);






