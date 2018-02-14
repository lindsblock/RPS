var usersChoice;
var computerChoice

function startGame(e) {
  var usersChoice = e.target.id // the ID of whatever they clicked on 
  console.log(usersChoice)   
  computerChoice()
  checkWin(usersChoice)
  displayResult()
}
//computer selects random 
function computerChoice() {
  var choices = ['rock', 'paper', 'scissors']
  var index = Math.floor(Math.random() * 3)
  console.log(choices[index])
}

function checkWin(usersChoice) {
 if(usersChoice === "rock"){
  if(computerChoice === "scissors"){
      console.log( "rock wins");
  }
  else {
      console.log( "paper wins"); 
  }
}

if(usersChoice === "paper"){
  if(computerChoice === "rock"){
      console.log( "paper wins");
  }
  else {
      console.log( "scissors wins");
  }
}
if(usersChoice === "scissors"){
  if(computerChoice === "rock"){
      console.log( "rock wins");
  }
  else {
      console.log("scissors wins");
  }
}

}

function displayResult() {
  console.log()
}

var choices = document.getElementsByClassName('choice')
for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame)
  } catch(err) {
    //First load
  }
}
