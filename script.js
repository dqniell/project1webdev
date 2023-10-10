document.addEventListener('DOMContentLoaded', function() {
    let currentGuess = 50;
    let guessesRemaining = 5;
    let randomNumber = generateRandomNumber();
    let log = [];

    const guessLog = document.getElementById('guess-log');
    const currentGuessSpan = document.getElementById('current-guess');
    const guessesRemainingSpan = document.getElementById('guesses-remaining');

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function updateCurrentGuess() {
        currentGuessSpan.textContent = currentGuess;
    }

    function updateGuessesRemaining() {
        guessesRemainingSpan.textContent = guessesRemaining;
    }

    function logMessage(message) {
        const listItem = document.createElement('li');
        listItem.textContent = message;
        guessLog.appendChild(listItem);
    }

    function calculateHotOrCold() {
        const difference = Math.abs(randomNumber - currentGuess);

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
            const lieResponse = calculateHotOrCold();
            logMessage(`Computer lied: ${lieResponse}`);
        }
    }

    function commitGuess() {
        const response = calculateHotOrCold();
        logMessage(`Guess: ${currentGuess} - Response: ${response}`);
    
        if (response === 'Very Hot' || response === 'Hot' || response === 'Very Warm' || response === 'Warm') {
            if (currentGuess !== randomNumber) {
                // Correct guess, but not the target number
                logMessage(`Close, but not quite. Keep guessing!`);
            } else {
                // Correct guess, player wins
                logMessage(`Congratulations! You won. The number was ${randomNumber}.`);
            }
        } else {
            guessesRemaining--;
            updateGuessesRemaining();
    
            if (guessesRemaining === 0) {
                // Out of guesses, player loses
                logMessage(`Out of guesses! You lost. The number was ${randomNumber}.`);
            }
        }
    
        currentGuess = 50;
        updateCurrentGuess();
    }
    

    function resetGame() {
        currentGuess = 50;
        guessesRemaining = 5;
        randomNumber = generateRandomNumber();
        log = [];
        guessLog.innerHTML = '';
        updateCurrentGuess();
        updateGuessesRemaining();
    }

    document.getElementById('subtract-1').addEventListener('click', function() {
        if (currentGuess > 1) {
            currentGuess -= 1;
            updateCurrentGuess();
        }
    });

    document.getElementById('subtract-5').addEventListener('click', function() {
        if (currentGuess > 5) {
            currentGuess -= 5;
            updateCurrentGuess();
        } else {
            currentGuess = 1;
            updateCurrentGuess();
        }
    });

    document.getElementById('subtract-10').addEventListener('click', function() {
        if (currentGuess > 10) {
            currentGuess -= 10;
            updateCurrentGuess();
        } else {
            currentGuess = 1;
            updateCurrentGuess();
        }
    });

    document.getElementById('subtract-25').addEventListener('click', function() {
        if (currentGuess > 25) {
            currentGuess -= 25;
            updateCurrentGuess();
        } else {
            currentGuess = 1;
            updateCurrentGuess();
        }
    });

    document.getElementById('add-1').addEventListener('click', function() {
        if (currentGuess < 100) {
            currentGuess += 1;
            updateCurrentGuess();
        }
    });

    document.getElementById('add-5').addEventListener('click', function() {
        if (currentGuess < 96) {
            currentGuess += 5;
            updateCurrentGuess();
        } else {
            currentGuess = 100;
            updateCurrentGuess();
        }
    });

    document.getElementById('add-10').addEventListener('click', function() {
        if (currentGuess < 91) {
            currentGuess += 10;
            updateCurrentGuess();
        } else {
            currentGuess = 100;
            updateCurrentGuess();
        }
    });

    document.getElementById('add-25').addEventListener('click', function() {
        if (currentGuess < 76) {
            currentGuess += 25;
            updateCurrentGuess();
        } else {
            currentGuess = 100;
            updateCurrentGuess();
        }
    });

    document.getElementById('commit').addEventListener('click', function() {
        if (guessesRemaining > 0) {
            commitGuess();
        }
    });

    document.getElementById('reset').addEventListener('click', function() {
        resetGame();
    });

    // Initial updates
    updateCurrentGuess();
    updateGuessesRemaining();
});
