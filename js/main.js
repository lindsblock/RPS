var user;

function startGame(e) {
  var user = e.target.id
  console.log(user)
  var cpuChoice = computerChoice()
  console.log(cpuChoice)
  checkWin()
  displayResult()
}
//computer selects random 
function computerChoice() {
  var choices = ['rock', 'paper', 'scissors']
  var index = Math.floor(Math.random() * 3)
  console.log(choices[index])
}

function checkWin() {
  //check who won
}

function displayResult() {
  //add element to page showing who won
}

var choices = document.getElementsByClassName('choice')
for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame)
  } catch(err) {
    //First load
  }
}
