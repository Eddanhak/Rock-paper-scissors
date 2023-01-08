
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
const titleText = document.querySelector("#title-text");
const roundsInput = document.querySelector("#rounds-input");
const totalRoundsP = document.querySelector("#p-numb-rounds");
const roundsPlayedP = document.querySelector("#rounds-played");
const aiChoiceImg = document.querySelector("#ai-choice-img");
const startButton = document.querySelector("#start-button");
const aiScoreParagraph = document.querySelector("#ai-score-p");
const humanScoreParagraph = document.querySelector("#human-score-p");




const buttons = Array.from(document.querySelectorAll(".game-button"));


// If user does not input integer between 1 and 10.
const errorParagraph =document.createElement("p"); 
errorParagraph.setAttribute("id", "error-rounds");
errorParagraph.textContent = "Invalid(Pick number between 1-10).";



let totalRounds = 0;
let roundsPlayed = 0;

let humanScore = 0;
let computerScore = 0;


let arrayAiChoices = ["rock", "paper", "scissors"];
let aiChoice = "";

 

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


function getTotalRounds() {
    if (!isNaN(roundsInput.value) && parseInt(roundsInput.value) > 0 && parseInt(roundsInput.value) <= 10) {
        return parseInt(roundsInput.value);
    }
    const errorParagraph =document.createElement("p"); 
    errorParagraph.setAttribute("id", "error-rounds");
    errorParagraph.textContent = "Invalid(Pick number between 1-10).";
    titleButtonContainer.appendChild(errorParagraph);
    return null;
}



function displayMain() {
    titleText.style.fontSize = "40px";
    mainGameContainer.style.display = "flex";
    totalRoundsP.textContent = `Number of rounds: ${totalRounds}`;
    roundsPlayedP.textContent = `Rounds played: ${roundsPlayed}`;

    
}

/*

Function checks if totalRounds is not null.
Executes declared functions.

*/

function clickedPlay(event) {
    totalRounds = getTotalRounds();
    if (totalRounds) {
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


function choiceAi() {
    // Function to simulate the ai choosing Rock paper or scissors.
    // Count random between 1-3 seconds. 
    // When time is passed, replace the loading gif with the choice.    
    let randomNumber = Math.floor(Math.random() * 2) + 1;
    return arrayAiChoices[randomNumber];

}




function choiceHuman(e) {
    /* 
    When one of choices is pressed.
    */
    if (e.target.tagName !== "IMG") {
        
        return e.target.textContent.toLowerCase();
    }   
    else {
        return e.target.alt;

    }   

}





function addScoreAi() {


}








function clickedStart() {
    aiChoiceImg.style.display = "flex";
    aiScoreParagraph.style.display = "block";
    humanScoreParagraph.style.display = "block";
    startButton.remove();
    
}




function battle(e) {
    /*

    When one of the choices is clicked, run this function.
    Calls humanChoice function, returns string.


    */

    let humanChoice = choiceHuman(e);
    aiChoice = choiceAi();

    if(humanChoice === "rock" && aiChoice === "scissors") {

    }


}






startButton.addEventListener("click", clickedStart);
buttons.forEach(btn => btn.addEventListener("click", battle));



