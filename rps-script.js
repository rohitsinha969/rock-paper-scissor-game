const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissor');
const resultParagraph = document.getElementById('result');

// Array of 3 choices :
const choices = ['rock', 'paper', 'scissor'];

// computer's choice :
function computerChoice() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

// winner calculation :
function winner(user, computer) {
    if (user === computer) {
        return "Round Tied, play again !";
    } else if ((user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')) {
        return 'Yeahhh!! You won friend';
    } else {
        return 'Ahh shit! Computer won!';
    }
}

// event listeners for user choices :
rockButton.addEventListener('click', function () {
    const userChoice = 'rock';
    const compChoice = computerChoice();
    const result = winner(userChoice, compChoice);
    resultParagraph.textContent = `You chose ${userChoice}. Computer chose ${compChoice}. ${result}`;
});

paperButton.addEventListener('click', function () {
    const userChoice = 'paper';
    const compChoice = computerChoice();
    const result = winner(userChoice, compChoice);
    resultParagraph.textContent = `You chose ${userChoice}. Computer chose ${compChoice}. ${result}`;
});

scissorButton.addEventListener('click', function () {
    const userChoice = 'scissors';
    const compChoice = computerChoice();
    const result = winner(userChoice, compChoice);
    resultParagraph.textContent = `You chose ${userChoice}. Computer chose ${compChoice}. ${result}`;
});


// restarting game again
const tryAgainButton = document.getElementById('try-again');

// Function to reset the game and clear the result
function resetGame() {
    resultParagraph.textContent = "results will appear here";
}

tryAgainButton.addEventListener('click', resetGame);