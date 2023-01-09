
/*
Game of rock paper scissors against computer.

Function that RNG between the three options. Computer choice.

Function that takes 2 parameters, computer value and user input value.

function that plays round with these 2 functions, returns winner in console.log.


1 counter for computer. 
1 counter for human. 


1 counter rounds played. 3 button for human. Rock, paper scissor. With image inside button.
1 image in div for the choice human make.

1 image in div for choice computer make.

*/

const mainContainer = document.querySelector("#main-container")
const mainGameContainer = document.querySelector("#main-game-container");
const playContainer = document.querySelector("#play-container");
const titleButtonContainer = document.querySelector("#title-button-container");
const buttonContainer = document.querySelector("#button-container");
const footerContainer = document.querySelector("#footer-container");
const containerScore = document.querySelector("#score-container");
const playButton = document.querySelector("#button-play");
const resetButton = document.querySelector("#reset-button");
const titleText = document.querySelector("#title-text");
const roundsInput = document.querySelector("#rounds-input");
const toWinScoreP = document.querySelector("#p-numb-win-score");
const roundsPlayedP = document.querySelector("#rounds-played");
const aiChoiceImg = document.querySelector("#ai-choice-img");
const startButton = document.querySelector("#start-button");
const aiScoreParagraph = document.querySelector("#ai-score-p");
const humanScoreParagraph = document.querySelector("#human-score-p");
const whoWonParagraph = document.querySelector("#who-won-p");
const loadingImg = document.querySelector("#img-loading");




const buttons = Array.from(document.querySelectorAll(".game-button"));


// If user does not input integer between 1 and 10.
const errorParagraph = document.createElement("p"); 
errorParagraph.setAttribute("id", "error-rounds");
titleButtonContainer.appendChild(errorParagraph);



let winScore = 0;
let roundsPlayed = 0;

let humanScore = 0;
let computerScore = 0;


let arrayAiChoices = ["rock", "paper", "scissors"];
let aiChoice = "";

 
let clickedPlayCheck = null;
let humanWinCheck = null;
let computerWinCheck = null;
let gameOverCheck = null;

let iconTimer = null;


/* 
when play button is clicked.
Declares variable with the user input value.
Checks for invalid inputs(NaN, 0 or less and higher than 10).
if all checks return true, returns the input value.

removes everything on current screen.
Adds the hidden html.

*/

function removeTitle() {
    playContainer.style.display = "none";
    playButton.remove();
    roundsInput.remove();
}


function getWinScore() {
    if (!isNaN(roundsInput.value) && parseInt(roundsInput.value) > 0 && parseInt(roundsInput.value) <= 10) {
        return parseInt(roundsInput.value);
    }
    errorParagraph.textContent = "Invalid(Pick number between 1-10).";
    return null;
}



function displayMain() {
    titleText.style.fontSize = "40px";
    mainGameContainer.style.display = "flex";
    toWinScoreP.textContent = `Score to win: ${winScore}`;
    roundsPlayedP.textContent = `Rounds played: ${roundsPlayed}`;

    
}

function updateScore() {
    toWinScoreP.textContent = `Score to win: ${winScore}`;
    roundsPlayedP.textContent = `Rounds played: ${roundsPlayed}`;
    humanScoreParagraph.textContent = `Your score: ${humanScore}`;
    aiScoreParagraph.textContent = `AI score: ${computerScore}`;   
}


/*

Function checks if totalRounds is not null.
Executes declared functions.

*/

function clickedPlay(event) {
    winScore = getWinScore();
    if (winScore) {
        removeTitle();
        displayMain();
    }
}
playButton.addEventListener("click", clickedPlay);



/*

Game loop.
When Start button is pressed.

When start button is pressed, reset all scores, and rounds played to 0.
this loop should run while rounds played is less than total rounds.
Should break game loop if Reset button is pressed.



*/


function choiceAi(e) {
    // Function to simulate the ai choosing Rock paper or scissors.
    // Count random between 1-3 seconds. 
    // When time is passed, replace the loading gif with the choice.    
    let randomNumber = Math.floor(Math.random() * 3);

    if(!gameOverCheck) {
        aiIconChange(arrayAiChoices[randomNumber]);
        return arrayAiChoices[randomNumber];
    }

}


/*

Function that changes icon for the AI depending on the choice.

*/

function aiIconChange(selection) {

	    if (selection === "rock") {
	        loadingImg.src = "images/icons8-rock-50.png";
	    }
	    else if (selection === "paper") {
	        loadingImg.src = "images/icons8-papers-64.png";
	    }
	    else if (selection === "scissors"){
	        loadingImg.src = "images/icons8-scissor-96.png";
	    }
        if(computerWinCheck) {
            loadingImg.src = "images/icons8-fairytale-50.png";
        }
	        
}






function aiIconLoading() {
    loadingImg.src = "images/icons8-loading-circle.gif";
}



function choiceHuman(e) {
    /* 
    When one of choices is pressed.
    */

if (!gameOverCheck) {
        if (e.target.tagName !== "IMG") {
            
            return e.target.textContent.toLowerCase();
        }   
        else {
            return e.target.alt;
        }   
    }  
}



function clickedStart() {
    aiChoiceImg.style.display = "flex";
    aiScoreParagraph.style.display = "block";
    humanScoreParagraph.style.display = "block";
    whoWonParagraph.style.display = "block";
    startButton.style.display = "none";

    clickedPlayCheck = true;

    
}


function resetGame (e) {
    computerScore = 0;
    humanScore = 0;
    roundsPlayed = 0;
    clickedPlayCheck = null;
    gameOverCheck = null;
    humanWinCheck = null;
    computerWinCheck = null;
    updateScore();

    aiChoiceImg.style.display = "none";
    aiScoreParagraph.style.display = "none";
    humanScoreParagraph.textContent = "";
    startButton.style.display = "block";
    whoWonParagraph.style.display = "none";
    whoWonParagraph.textContent = "";
    loadingImg.src = "images/icons8-loading-circle.gif";
}
 



function battle(e) {
    /*

    When one of the choices is clicked, run this function.
    Calls humanChoice function, returns string.

    */

    if (!gameOverCheck && clickedPlayCheck) {
	        if((winScore !== humanScore) || (winScore !== computerScore)) {
	            let humanChoice = choiceHuman(e);
	            aiChoice = choiceAi(e);
	            console.log(`Human: ${humanChoice} AI: ${aiChoice}`);
	            if(aiChoice === humanChoice) {
	                whoWonParagraph.textContent = "Draw!";
	                roundsPlayed += 1;
	                updateScore();
	            }
	            else if(aiChoice === "rock" && humanChoice !== "paper") {
	                whoWonParagraph.textContent = "Computer Wins!";
	                computerScore += 1;
	                roundsPlayed += 1;
	                updateScore();
	            }
	            else if (aiChoice === "paper" && humanChoice !== "scissors") {
	                whoWonParagraph.textContent = "Computer Wins!";
	                computerScore += 1;
	                roundsPlayed += 1;
	                updateScore();
	            }
	            else if (aiChoice === "scissors" && humanChoice !== "rock") {
	                whoWonParagraph.textContent = "Computer Wins!";
	                computerScore += 1;
	                roundsPlayed += 1;
	                updateScore();
	            }else {
	                whoWonParagraph.textContent = "You Win!";
	                humanScore += 1;
	                roundsPlayed += 1;
	                updateScore();
	            }
	        }
    }
        
            if ((computerScore > humanScore) && (computerScore === winScore)) {    
                whoWonParagraph.style.fontSize = "25px";
                whoWonParagraph.textContent = "The Computer Wins it all!";
                computerWinCheck = true;
                gameOverCheck = true;
                aiIconChange(aiChoice);
                    
            }
            else if ((humanScore > computerScore) && (humanScore === winScore)) {
                whoWonParagraph.style.fontSize = "25px";
                whoWonParagraph.textContent = "You Win the game!";
                humanWinCheck = true;
                gameOverCheck = true;
                aiIconChange(aiChoice);

            }
        
}







startButton.addEventListener("click", clickedStart);
buttons.forEach(btn => btn.addEventListener("click", battle));
resetButton.addEventListener("click", resetGame);


