var computerGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoice = computerGuess[Math.floor(Math.random() * computerGuess.length)];

var wins = 0;
var losses = 0;
var numberOfGuesses = 10;
var guessesSubmitted = [];


document.onkeyup = function(event) {

    var userChoice = event.key;
    guessesSubmitted.push(userChoice);
    
        
            if (userChoice === computerChoice) {
                wins++;
                if (wins === 1) {
                    numberOfGuesses = 10;
                    computerChoice = computerGuess[Math.floor(Math.random() * computerGuess.length)];
                    guessesSubmitted = [];
                }
            } else {
                numberOfGuesses--;
                if (numberOfGuesses === 0) {
                    losses++;
                    if (losses >=  1) {
                    numberOfGuesses = 10;
                    computerChoice = computerGuess[Math.floor(Math.random() * computerGuess.length)];
                    guessesSubmitted = [];
                    }
                }
            }

        var winsText = document.getElementById("wins");
        winsText.textContent = "Wins: " + wins;

        var lossesText = document.getElementById("losses");
        lossesText.textContent = "Losses: " + losses;

        var numberOfGuessesText = document.getElementById("guesses-left");
        numberOfGuessesText.textContent = "Guesses Left: " + numberOfGuesses;

        var guessesSubmittedText = document.getElementById("guesses-submitted");
        guessesSubmittedText.textContent = "Your Guesses So Far: " + guessesSubmitted;
        
}

