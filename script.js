const options = ['rock', 'paper', 'scissors'];

function random() {

    return Math.floor(Math.random() * options.length);

}

function computerPlay() {

    return options[random()]

}