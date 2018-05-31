let winCount = 0;
let lossesCount = 0;
let guessesLeft = 9;
let guessesSoFar = []


let computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


document.onkeypress = function () {
    let userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guessesSoFar.push(userGuess);

    if (userGuess == computerGuess) {
        winCount++;
        alert('Aw Yeah. You guesesed correctly. You Won!');
        guessesLeft = 9;
        guessesSoFar.length = 0;
    } else if (guessesLeft == 1) {
        lossesCount++;
        alert('You didn\'t get the right letter. You lost. Let\'s try again.');
        guessesLeft = 9;
        guessesSoFar.length = 0;
    } else if (userGuess !== computerGuess) {
        guessesLeft--;
    }

    let html = "<h1>The Psychic Game...</h1>" +
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Total Wins: " +
        winCount +
        "</p>" +
        "<p>Total Losses: " +
        lossesCount +
        "</p>" +
        "<p>Guesses Left: " +
        guessesLeft +
        "</p>" +
        "<p>Your Guesses so far: " +
        guessesSoFar +
        "</p>";

    document.querySelector('#game').innerHTML = html;
}