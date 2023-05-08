// First Requirement
// Your game is going to play against the computer.
// So begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
// We’ll use this function in the game to make the computer’s play. 
// Tip: use the console to make sure this is returning the expected output before moving to the next step!

// Algorithm:
// variable as array to store rock, paper and scissors
// define function to choose random entry in the array
function getComputerChoice() {
    let computerChoice = ["Rock", "Paper", "Scissors"];
    computerChoice = computerChoice[(Math.floor(Math.random() * computerChoice.length))];
    return computerChoice;
}
// Second Requirement 
// Write a function that plays a single round of Rock Paper Scissors. 
// The function should take two parameters - the playerSelection and computerSelection - 
// and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

// Algorithm:
// define a function the takes two parameter player Selection and computer Selection -
let playerSelection;
let computerSelection;
let result; // result of each round
let finalResult; // final game result
let win = 0; // counter for winning times to be used in game function
let lose = 0; // counter for lose times to be used in game function
let draw = 0; // counter for draw times to be used in game function
function playRound(){
    playerSelection= prompt("Please choose rock or paper or scissors");
    computerSelection= getComputerChoice();
// Transfer the user and computer selection to lowerCase letters for comparing
        playerSelection = playerSelection.toLowerCase();
        console.log("Player Selection is " + playerSelection)
        computerSelection = computerSelection.toLowerCase();
        console.log("Computer Selection is " + computerSelection);
// make a condition to compare the input and decide who is the winner.
// player choice rock wil be evaluated and compared against th three possible computer selections
        if(playerSelection == "rock"){ 
            switch (computerSelection){
                case "rock" :
                    result = "Draw!";
                    draw++;
                   break;
                case "paper" :
                    result = "You Lose! Paper beats Rock";
                    lose++;
                    break;
                case "scissors" :
                    result = "You Win! Rock beats Scissors";
                    win++;
                    break;
            }
// player choice paper wil be evaluated and compared against th three possible computer selections
        } else if (playerSelection == "paper"){
            switch (computerSelection){
                case "rock" :
                    result = "You Win! Paper beats Rock";
                    win++;
                    break;
                case "paper" :
                    result = "Draw!";
                    draw++;
                    break;
                case "scissors" :
                    result = "You Lose! Scissors beats Paper";
                    lose;
                    break;
            }
// player choice scissors wil be evaluated and compared against th three possible computer selections
        } else if(playerSelection == "scissors"){
            switch (computerSelection){
                case "rock" :
                    result = "You Lose! Rock beats Scissors";
                    lose++;
                    break;
                case "paper" :
                    result = "You Win! Scissors beats Paper";
                    win++;
                    break;
                case "scissors" :
                    result = "Draw!";
                    draw++;
                    break;
                }
        } 
        return result;
}

// Third Requirement
// Write a NEW function called game(). 
// Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

// Algorithm:
// Define game function.
function game(){
// Define loop with counter to run 5 times
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
// Compare winning time with lose and draw times
  if (win > lose && win > draw){
    finalResult = "You Win";
  }
// Compare lose times with winning and draw times
  if (lose > win && lose > draw){
    finalResult = "lose";
  }
// Compare draw times with winning and lose times
  if(draw> win && draw > lose){
    finalResult = "Draw";
  }
}
  return finalResult;
}
console.log("The Final Result is " + game());


