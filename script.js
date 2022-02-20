//get a random number for a d6 dice roll
function diceRoll () {
    return Math.floor((Math.random() * 6) + 1);
}

//play a game and return the winner or draw
function diceGame () {
    let playerOne = diceRoll();
    let playerTwo = diceRoll();

    if (playerOne > playerTwo) {
        return document.getElementById("heading").innerHTML = "Player One Wins!";
    } else if (playerOne < playerTwo) {
        return document.getElementById("heading").innerHTML = "Player Two Wins!";
    } else {
        return document.getElementById("heading").innerHTML = "It's a Draw.";
    }
}

//on refresh play the game and update the h1 heading with result
document.getElementById("button").addEventListener("click", diceGame());