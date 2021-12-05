const options = ['rock', 'paper', 'scissors'];

let computerWins = 0;

let userWins = 0;

alert("Let's play Rock, Paper, Scissors!!");

function computerPlay() {

    return options[random()];

}

function getUserPlay() {

    return prompt("Choose one: Rock, Paper, or Scissors..").toLowerCase();

}

function random() {

    return Math.floor(Math.random() * options.length);

}


function game() {
    
    let computerChoice = computerPlay();
    let userPlay = getUserPlay();
    playRound(userPlay, computerChoice);

    userPlay = getUserPlay();
    computerChoice = computerPlay();
    playRound(userPlay, computerChoice);

    userPlay = getUserPlay();
    computerChoice = computerPlay();
    playRound(userPlay, computerChoice);

    userPlay = getUserPlay();
    computerChoice = computerPlay();
    playRound(userPlay, computerChoice);

    userPlay = getUserPlay();
    computerChoice = computerPlay();
    playRound(userPlay, computerChoice);

    if (computerWins > userWins) {

        alert("You lose, computer wins! Better luck next time!")

    } else {

        alert("You win! Computer loses!")

    }

}

function playRound(userPlay, computerChoice) {

    while (computerChoice === userPlay) {
        userPlay = prompt("Its a tie!! Pick again: Rock, Paper, or Scissors");
        computerChoice = computerPlay();
    }

    if (computerChoice === "rock" && userPlay === "scissors") {

        computerWins++;

    } else if (computerChoice === "paper" && userPlay === "rock") {

        computerWins++;

    } else if (computerChoice === "scissors" && userPlay === "paper") {

        computerWins++;

    } else if (computerChoice === "rock" && userPlay === "paper") {

        userWins++;

    } else if (computerChoice === "paper" && userPlay === "scissors") {

        userWins++;

    }  else if (computerChoice === "scissors" && userPlay === "rock") {

        userWins++;

    }

}

game();


