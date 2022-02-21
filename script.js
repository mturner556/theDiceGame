//getting a random number between 1 - 6
let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomNumber2 = Math.floor((Math.random() * 6) + 1);

//update player 1 dice to the matching random number
function playerOneRoll () {
    if (randomNumber1 === 2) {
        document.getElementById("player1D1").setAttribute("class", "dice1 dice hidden");
        document.getElementById("player1D2").setAttribute("class", "dice2 dice visible");
    } else if (randomNumber1 === 3) {
        document.getElementById("player1D1").setAttribute("class", "dice1 dice hidden");
        document.getElementById("player1D3").setAttribute("class", "dice3 dice visible");
    } else if (randomNumber1 === 4) {
        document.getElementById("player1D1").setAttribute("class", "dice1 dice hidden");
        document.getElementById("player1D4").setAttribute("class", "dice4 dice visible");
    } else if (randomNumber1 === 5) {
        document.getElementById("player1D1").setAttribute("class", "dice1 dice hidden");
        document.getElementById("player1D5").setAttribute("class", "dice5 dice visible");
    } else if (randomNumber1 === 6) {
        document.getElementById("player1D1").setAttribute("class", "dice1 dice hidden");
        document.getElementById("player1D6").setAttribute("class", "dice6 dice visible");
    }
    
    return randomNumber1;
}

//update player 2 dice to the matching random number
function playerTwoRoll () {
    if (randomNumber2 === 2) {
        document.getElementById("player2D1").setAttribute("class", "dice1 dice hidden");
        document.getElementById("player2D2").setAttribute("class", "dice2 dice visible");
    } else if (randomNumber2 === 3) {
        document.getElementById("player2D1").setAttribute("class", "dice1 dice hidden");
        document.getElementById("player2D3").setAttribute("class", "dice3 dice visible");
    } else if (randomNumber2 === 4) {
        document.getElementById("player2D1").setAttribute("class", "dice1 dice hidden");
        document.getElementById("player2D4").setAttribute("class", "dice4 dice visible");
    } else if (randomNumber2 === 5) {
        document.getElementById("player2D1").setAttribute("class", "dice1 dice hidden");
        document.getElementById("player2D5").setAttribute("class", "dice5 dice visible");
    } else if (randomNumber2 === 6) {
        document.getElementById("player2D1").setAttribute("class", "dice1 dice hidden");
        document.getElementById("player2D6").setAttribute("class", "dice6 dice visible");
    }

    return randomNumber2;
}

function playGame() {

    if (playerOneRoll() > playerTwoRoll()) {
        return document.querySelector("h1").textContent = "Player One Wins!";
    } else if (playerOneRoll() < playerTwoRoll()) {
        return document.querySelector("h1").textContent = "Player Two Wins!";
    } else {
        return document.querySelector("h1").textContent = "It's a Draw.";
    }
}

playGame();

console.log(playerOneRoll());
console.log(playerTwoRoll());