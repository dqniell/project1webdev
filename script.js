let currentGuess = 50;
let guessesRemain = 5;
let newNum = generateRandom();
let log = [];

const guess = document.getElementById('guess-log');
const currGuessSpan = document.getElementById('current-guess');
const guessesRemainSpan = document.getElementById('guesses-remaining');

function generateRandom() {
    return Math.floor(Math.random() * 100) + 1;
}

function updateCurr() {
    currGuessSpan.textContent = currentGuess;
}

function updateGuessesRemaining() {
    guessesRemainSpan.textContent = guessesRemain;
}

function logMess(message) {
    const p = document.createElement('p'); 
    guess.appendChild(p); 
    guess.appendChild(document.createTextNode(message)); 
}



function hotOrCOld() {
    const difference = Math.abs(newNum - currentGuess);

    if (difference <= 5) {
    return 'Very Hot';
    } else if (difference <= 8) {
    return 'Hot';
    } else if (difference <= 15) {
    return 'Very Warm';
    } else if (difference <= 20) {
    return 'Warm';
    } else if (difference <= 30) {
    return 'Cool';
    } else if (difference <= 40) {
    return 'Very Cool';
    } else if (difference <= 55) {
    return 'Cold';
    } else {
    return 'Very Cold';
}
}

function makeComputerLie() {
    const lieChance = Math.random();
    if (lieChance <= 0.05) {
    const lieResponse = hotOrCOld();
    logMess(`Computer lied: ${lieResponse}`);
    }
}

function commitGuess() {
    const response = hotOrCOld();
    logMess(`Guess: ${currentGuess} - Response: ${response}`);

    if (response === 'Very Hot' || response === 'Hot' || response === 'Very Warm' || response === 'Warm') {
        if (currentGuess !== newNum) {
            logMess(`Close, but not quite. Keep guessing!`);
        } else {
            logMess(`Congratulations! You won. The number was ${newNum}.`);
        }
    } else {
        guessesRemain--;
        updateGuessesRemaining();

        if (guessesRemain === 0) {
            logMess(`Out of guesses! You lost. The number was ${newNum}.`);
        }
    }
}



function resetGame() {
    currentGuess = 50;
    guessesRemain = 5;
    newNum = generateRandom();
    log = [];
    guess.innerHTML = '';
    updateCurr();
    updateGuessesRemaining();
}

document.getElementById('subtract-1').addEventListener('click', function() {
    if (currentGuess > 1) {
    currentGuess -= 1;
    updateCurr();
    }
});

document.getElementById('subtract-5').addEventListener('click', function() {
    if (currentGuess > 5) {
    currentGuess -= 5;
    updateCurr();
    } else {
    currentGuess = 1;
    updateCurr();
    }
});

document.getElementById('subtract-10').addEventListener('click', function() {
    if (currentGuess > 10) {
    currentGuess -= 10;
    updateCurr();
    } else {
    currentGuess = 1;
    updateCurr();
    }
});

document.getElementById('subtract-25').addEventListener('click', function() {
    if (currentGuess > 25) {
    currentGuess -= 25;
    updateCurr();
    } else {
    currentGuess = 1;
    updateCurr();
    }
});

document.getElementById('add-1').addEventListener('click', function() {
    if (currentGuess < 100) {
    currentGuess += 1;
    updateCurr();
    }
});

document.getElementById('add-5').addEventListener('click', function() {
    if (currentGuess < 96) {
    currentGuess += 5;
    updateCurr();
    } else {
    currentGuess = 100;
    updateCurr();
    }
});

document.getElementById('add-10').addEventListener('click', function() {
    if (currentGuess < 91) {
    currentGuess += 10;
    updateCurr();
    } else {
    currentGuess = 100;
    updateCurr();
    }
});

document.getElementById('add-25').addEventListener('click', function() {
    if (currentGuess < 76) {
    currentGuess += 25;
    updateCurr();
    } else {
    currentGuess = 100;
    updateCurr();
    }
});

document.getElementById('commit').addEventListener('click', function() {
    if (guessesRemain > 0) {
    commitGuess();
    }
});

document.getElementById('reset').addEventListener('click', function() {
    resetGame();
});

updateCurr();
updateGuessesRemaining();
