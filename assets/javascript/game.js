//Countries array
var asia = ["China","India","Indonesia","Pakistan","Bangladesh","Japan","Philippines","Vietnam","Turkey","Iran","Thailand","Myanmar","South Korea","Iraq","Afghanistan","Saudi Arabia","Uzbekistan","Malaysia","Nepal","Yemen","North Korea","Sri Lanka","Kazakhstan","Syria","Cambodia","Jordan","Azerbaijan","United Arab Emerates","Tajikistan","Israel","Laos","Kyrgyzstan","Lebanon","Turkmenistan","Singapore","Palestine","Oman","Kuwait","Georgia","Mongolia","Armenia","Qatar","Bahrain","East Timor","Cyprus","Bhutan","Maldives","Brunei","Taiwan"];

//Random country selector
var randomCountry = asia[Math.floor(Math.random() * asia.length)];
console.log(randomCountry);

//score keeping varibles
var wins = 0
var loss = 0
var guesses = 6
var lettersGuessed = [];



document.onkeyup = function (guess) {
    var userGuess = guess.key;
    console.log(userGuess);

}