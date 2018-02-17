
//choices
var words = [
    "frame",
    "fork",
    "handlebar",
    "shifter",
    "chain",
    "derailleur",
    "brakes",
    "tire",
    "tube",
    "wheel",
];

// Random Word
var word = words[Math.floor(Math.random() * words.length)];

// Answer Array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "*";
}
var remainingLetters = word.length;

// Game
while (remainingLetters > 0) {

    // Game Progress
    alert(answerArray.join(" "));

    // Choose a word
    var guess = prompt("Guess a letter, or click Cancel to stop the game.");
    if (guess === null) {

        // End
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");

    } else {

        // Update the game state with the guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }

}

// Final alert
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);