var computerGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoice = computerGuess[Math.floor(Math.random() * computerGuess.length)];

var wins = 0;
var winsText = document.getElementById("wins");

var losses = 0;
var lossesText = document.getElementById("losses");

var guessesSubmitted = 20;
var guessesSubmittedText = document.getElementById("guesses-submitted");

var guessesSubmitted = []
var numberOfGuessesText = document.getElementById("guesses-left");


document.onkeyup = function(event) {

    var userChoice = event.key;
    
    for (i = 0; i < computerGuess.length; i++){
        
        if (userChoice === computerGuess[i]) {
        
            if (userChoice === computerChoice) {
                wins++;
            } else {
                losses++;
                guessesSubmitted--;
            }

            winsText.textContent = "Wins: " + wins;
            lossesText.textContent = "Losses: " + losses;
            numberOfGuessesText.textContent = "Guesses Left " + numberOfGuesses;
            guessesSubmittedText.textContent = "Your Guesses So Far: " + guessesSubmitted.push(userChoice);
        }    
    }
}

function resetGame () {
    if (wins === 1) {
        var computerChoice = computerGuess[Math.floor(Math.random() * computerGuess.length)];
    } else if (losses === 20) {
        var computerChoice = computerGuess[Math.floor(Math.random() * computerGuess.length)];
    }
}
