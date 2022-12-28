
/*
Game of rock paper scissors against computer.

Function that RNG between the three options. Computer choice.

Function that takes 2 parameters, computer value and user input value.

function that plays round with these 2 functions, returns winner in console.log.


*/



const choices = ["Rock", "Paper", "Scissors"]

let computerScore = 0
let humanScore = 0
let rounds = 0


function getComputerChoice() {
    let randNumb = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randNumb];

    console.log(computerChoice)
    return computerChoice

}

function getUserChoice() {
    let userPrompt = prompt("Rock paper or scissors?");
    let upperCase = userPrompt.charAt(0)
    upperCase = upperCase.toUpperCase()
    let lowerCase = userPrompt.slice(1)
    lowerCase = lowerCase.toLowerCase()
    
    userPrompt = upperCase + lowerCase
    
    return userPrompt
    
}

/*
This function will call both functions to a variable each.
Then compare these two variables.

if computer or human has rock, and computer or human has scissor. computer or human wins.
A loop that loops through the choices. Every loop checks the computers choice.
*/
function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getUserChoice();
    
    if (computerChoice == humanChoice) {
        console.log("Draw!")
    } else {
        if (computerChoice == "Rock" && humanChoice != "Paper") {
            ++computerScore
            ++rounds
            console.log("Computer Wins!")
            console.log("Computer score: " + computerScore + ", " + "Human score: " + humanScore + ".")
            console.log("Rounds played: " + rounds + ".")
        } else if (computerChoice == "Scissors" && humanChoice != "Rock") {
            ++computerScore
            ++rounds
            console.log("Computer Wins!")
            console.log("Computer score: " + computerScore + ", " + "Human score: " + humanScore + ".")
            console.log("Rounds played: " + rounds + ".")
        } else if (computerChoice == "Paper" && humanChoice != "Scissors") {
            ++computerScore
            ++rounds
            console.log("Computer Wins!")
            console.log("Computer score: " + computerScore + ", " + "Human score: " + humanScore + ".")
            console.log("Rounds played: " + rounds + ".")
        } else {
            ++humanScore
            ++rounds
            console.log("Human Wins!")
            console.log("Computer score: " + computerScore + ", " + "Human score: " + humanScore + ".")
            console.log("Rounds played: " + rounds + ".")

        }
    }
    
}

while (rounds != 5 && computerScore != 3 && humanScore != 3) {
    playRound()

};

if (computerScore > humanScore) {
    console.log("The Computer Wins the game!")
    
    }else if (computerScore == humanScore) {
        console.log("This game is a draw!")
        
    } else {
        console.log("You win!")
    }

/*tjeeena
*/

