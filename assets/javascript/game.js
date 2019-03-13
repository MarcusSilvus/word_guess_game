// Countries array
var asia = ["China", "India", "Indonesia", "Pakistan", "Bangladesh", "Japan", "Philippines", "Vietnam", "Turkey", "Iran", "Thailand", "Myanmar", "South Korea", "Iraq", "Afghanistan", "Saudi Arabia", "Uzbekistan", "Malaysia", "Nepal", "Yemen", "North Korea", "Sri Lanka", "Kazakhstan", "Syria", "Cambodia", "Jordan", "Azerbaijan", "United Arab Emerates", "Tajikistan", "Israel", "Laos", "Kyrgyzstan", "Lebanon", "Turkmenistan", "Singapore", "Palestine", "Oman", "Kuwait", "Georgia", "Mongolia", "Armenia", "Qatar", "Bahrain", "East Timor", "Cyprus", "Bhutan", "Maldives", "Brunei", "Taiwan"];

var winCount = document.getElementById("wins");
var lossCount = document.getElementById("losses");
var wrongLetterBank = document.getElementById("guessed"); 
var newWord = document.getElementById("word")



// score keeping varibles
var wins = 0;
var losses = 0;
var guessesRemaining = 6;
var secretWord = [];
var underScores = [];
var wrongGuesses = [];
var randomCountry = '';


// Start game when button is pressed
function newGame() {
    // reset varibles
    guessesRemaining = 6;
    wrongGuesses = [];
    underScores = [];

    // randomly select a word from the asia array
    randomCountry = asia[Math.floor(Math.random() * asia.length)];
    console.log(randomCountry);

    // show underscores for randomly selected word
    for (var i = 0; i < randomCountry.length; i++) {
        if (randomCountry[i] === ' ') {
            underScores.push(' ');
        } else {
            underScores.push('_');
        }
    }
    
}

winCount.textContent = wins;
lossCount.textContent = losses;
wrongLetterBank.textContent = wrongGuesses;
newWord.textContent = randomCountry;

