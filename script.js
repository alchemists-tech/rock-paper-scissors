const options = ['rock', 'paper', 'scissors'];

let computerWins = 0;

let userWins = 0;

let computerChoice = computerPlay();

const computerScore = document.querySelector('#computer');

const buttons = document.querySelectorAll('.buttons');

const userScore = document.querySelector('#user');

const winner = document.querySelector('.winner');

const winnerButton = document.querySelector('.winner-button')

const resetButton = document.createElement('BUTTON');
resetButton.classList.add('buttons')
resetButton.innerText = "PLAY AGAIN";

function random() {

    return Math.floor(Math.random() * options.length);

}

function computerPlay() {

    return options[random()];

}

function checkScore() {

    if (computerWins === 5 || userWins === 5) {

        if (computerWins === 5) {

            winner.textContent = 'Computer Wins! Better luck next time! Play again if you would like...';

        } else if (userWins === 5) {

            winner.textContent = "WOW! You win! Play again if you would like...";
        }

        winnerButton.appendChild(resetButton)

        resetButton.addEventListener('click', resetGame);

    } else {

        return

    }
}

buttons.forEach((button) => {

    button.addEventListener('click', function() {playRound(button.id, computerChoice)});

});


function resetGame() {

    userScore.textContent = 0;
    computerScore.textContent = 0;
    userWins = 0;
    computerWins = 0;
    winnerButton.removeChild(resetButton);
    winner.textContent = "";

}

function playRound(userPlay, computerChoice) {

    while (computerChoice === userPlay) {

        userPlay = prompt("Its a tie!! Pick again: Rock, Paper, or Scissors").toString().toLowerCase();

        while (options.indexOf(userPlay) === -1) {
            
            userPlay = prompt("You did not choose one of the options, try again!").toString().toLowerCase();

        }

        computerChoice = computerPlay();
    }

    if (computerChoice === "rock" && userPlay === "scissors") {

        computerWins++;
        computerScore.textContent = computerWins;

    } else if (computerChoice === "paper" && userPlay === "rock") {

        computerWins++;
        computerScore.textContent = computerWins;

    } else if (computerChoice === "scissors" && userPlay === "paper") {

        computerWins++;
        computerScore.textContent = computerWins;

    } else if (computerChoice === "rock" && userPlay === "paper") {

        userWins++;
        userScore.textContent = userWins;

    } else if (computerChoice === "paper" && userPlay === "scissors") {

        userWins++;
        userScore.textContent = userWins;

    }  else if (computerChoice === "scissors" && userPlay === "rock") {

        userWins++;
        userScore.textContent = userWins;

    }

    checkScore()

}


