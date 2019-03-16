// Countries array
var asia = ["China", "India", "Indonesia", "Pakistan", "Bangladesh", "Japan", "Philippines", "Vietnam", "Turkey", "Iran", "Thailand", "Myanmar", "South Korea", "Iraq", "Afghanistan", "Saudi Arabia", "Uzbekistan", "Malaysia", "Nepal", "Yemen", "North Korea", "Sri Lanka", "Kazakhstan", "Syria", "Cambodia", "Jordan", "Azerbaijan", "United Arab Emerates", "Tajikistan", "Israel", "Laos", "Kyrgyzstan", "Lebanon", "Turkmenistan", "Singapore", "Palestine", "Oman", "Kuwait", "Georgia", "Mongolia", "Armenia", "Qatar", "Bahrain", "East Timor", "Cyprus", "Bhutan", "Maldives", "Brunei", "Taiwan"];

var winCount = document.getElementById("wins");
var lossCount = document.getElementById("losses");
var wrongLetterBank = document.getElementById("guessed");
var newWord = document.getElementById("word");
var guessLeft = document.getElementById("guessesRemaining");




// score keeping varibles
var wins = 0;
var losses = 0;
var guessesRemaining = 6;
var underScores = [];
var wrongGuesses = [];
var correctGuess = [];
var randomCountry = '';


randomCountry = asia[Math.floor(Math.random() * asia.length)];
console.log(randomCountry);

for (var i = 0; i < randomCountry.length; i++) {
    if (randomCountry[i] === ' ') {
        underScores.push(' ');
    } else {
        underScores.push('_');
    }
}

// Start game when button is pressed

function newGame() {
    //  reset varibles
    guessesRemaining = 6;
    // letter bank to clear
    wrongGuesses = [];

    //new word to randomly select
    randomCountry = asia[Math.floor(Math.random() * asia.length)];
    console.log(randomCountry);

    //clear underscores
    underScores = [];

    // show underscores for randomly selected word
    for (var i = 0; i < randomCountry.length; i++) {
        if (randomCountry[i] === ' ') {
            underScores.push(' ');
        } else {
            underScores.push('_');
        }
    }
    screenRefresh();
}


screenRefresh();

document.getElementById("newGameButton").addEventListener("click", newGame);

document.onkeyup = function (guess) {


    //when user presses a key, that key is checked against the value of the 
    //randomCountry array
    var userGuess = guess.key;
    console.log(userGuess);
    var correct = false;
    var alpha = "abcdefghijklmnopqrstuvwxyz";

    //This loop compares user's guess the word
    if (alpha.includes(userGuess)) {
        //loop that cycles through the array
        for (var i = 0; i < randomCountry.length; i++) {
            if (userGuess.toUpperCase() === randomCountry[i] || randomCountry[i] == userGuess.toLowerCase()) {
                correct = true;
                underScores[i] = randomCountry[i];
                console.log(underScores);
            }
        }
        if (correct == false) {
            if (wrongGuesses.includes(userGuess) == false) {
                wrongGuesses.push(userGuess);
                guessesRemaining--;
            }
        }

        //logs wins
        if (underScores.join('') === randomCountry) {
            wins++;
            screenRefresh();
            alert("YOU WIN - " + randomCountry);
            // newGame();
        }

        //logs losses
        if (guessesRemaining <= 0) {
            losses++;
            alert("YOU LOSE");
            for (var i = 0; i < randomCountry.length; i++) {
                underScores[i] = randomCountry[i];
            }
        }

        guessLeft.textContent = guessesRemaining;
        //if the value is in the array, it is revealed in the appropriate spot
        word.textContent = underScores.join('');
        wrongLetterBank.textContent = wrongGuesses.join('  ');
        lossCount.textContent = losses;
        winCount.textContent = wins;

        screenRefresh();
    }

}


function screenRefresh() {
    winCount.textContent = wins;
    lossCount.textContent = losses;
    wrongLetterBank.textContent = wrongGuesses;
    newWord.textContent = underScores.join('');
    guessLeft.textContent = guessesRemaining;
    wrongLetterBank.textContent = wrongGuesses.join('  ');
}

