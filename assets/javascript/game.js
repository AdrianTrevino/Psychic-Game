var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = []; // array to push user choices to
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //user guessing into code
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; //computer "guessing" random
    guessesSoFar.push(userGuess); //adding the users guess into the array

    if (userGuess == computerGuess) {
        wins++;
        alert('You really ARE Psychic!');
        guessesLeft = 9; //reseting game for another play through
        guessesSoFar.length = 0; // removes the guessesSoFar in order to have second playthrough.
    }
    else if (guessesLeft == 0){
        losses++;
        alert('You need to work on your psychic skills');
        guessesLeft = 9;
        guessesSoFar.length = 0;
    }
    else if (userGuess !== computerGuess){
        guessesLeft--; // starts to tickdown the amount of guesses left as an indicator of a loss.
    }  
    // Information gathered about game into the HTML    
    var html = "<h1>The Psychic Game</h1>" + 
    "<p>Guess what letter I'm thinking of!</p>" +
    "<p>Total Wins: " + 
    wins + 
    "</p>" +
    "<p>Total Losses: " + 
    losses + 
    "</p>" +
    "<p>Guesses Left: " + 
    guessesLeft + 
    "</p>" +
    "<p>Your Guesses so far: " +
    guessesSoFar +
    "</p>"
    ;
    // Placing the html into the ID for GAME so it shows up on the website. Using query selector because its a CSS class.

    document.querySelector('#game').innerHTML = html;
}
