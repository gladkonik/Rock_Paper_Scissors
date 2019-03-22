let playerScore = 0;
let computerScore = 0;
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const rockSpan = document.getElementById("rock");
const paperSpan = document.getElementById("paper");
const scissorsSpan = document.getElementById("scissors");
const resultSpan = document.getElementById("result");

let userChoiceButton = null;
rockSpan.onclick = () => {
    userChoiceButton = rockSpan;
    game('r');
}

paperSpan.onclick = () => {
    userChoiceButton = paperSpan;
    game('p');
}

scissorsSpan.onclick = () => {
    userChoiceButton = scissorsSpan;
    game('s');
}

function game(userChoice) {
    const options = ['r', 'p', 's'];
    let computerChoice = Math.floor(Math.random() * 3);
    computerChoice = options[computerChoice];

    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            {
                win();
                break;
            }
        case 'rp':
        case 'ps':
        case 'sr':
            {
                lose();
                break;
            }
        case 'rr':
        case 'pp':
        case 'ss':
            {
                tie();
                break;
            }
    }
}

function win() {
    playerScore++;
    playerScoreSpan.innerHTML = playerScore;
    resultSpan.innerHTML = 'You rock!';
    userChoiceButton.style.backgroundColor = "green";
    setTimeout(() => userChoiceButton.style.backgroundColor = "white", 500);
}

function lose() {
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    resultSpan.innerHTML = 'You were beaten!';
    userChoiceButton.style.backgroundColor = "red";
    setTimeout(() => userChoiceButton.style.backgroundColor = "white", 500);
}

function tie() {
    resultSpan.innerHTML = "A tie. Try again!";
}