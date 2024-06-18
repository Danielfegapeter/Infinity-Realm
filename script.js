let secretNumber;
let attempts = 0;

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('attemptCount').textContent = attempts;
    document.getElementById('message').textContent = '';
}

function checkGuess() {
    let guess = parseInt(document.getElementById('guessInput').value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

    attempts++;
    document.getElementById('attemptCount').textContent = attempts;

    if (guess === secretNumber) {
        document.getElementById('message').textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
    } else if (guess < secretNumber) {
        document.getElementById('message').textContent = 'Too low. Try again!';
    } else {
        document.getElementById('message').textContent = 'Too high. Try again!';
    }
}

function resetGame() {
    startGame();
    document.getElementById('guessInput').value = '';
    document.getElementById('message').textContent = '';
}

startGame(); // Start the game when the page loads
