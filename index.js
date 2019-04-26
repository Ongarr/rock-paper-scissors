

const computerPlay = () => {
    let stringArray = ["scissors", "paper", "rock"];
    let randomIndex = Math.floor(Math.random() * stringArray.length);
    return stringArray[randomIndex];
};

let computerSelection = computerPlay();
let i = 0;

const game = () => {
    while (i < 5) {
    let playerSelection = prompt("Choose your weapon");

    const oneRound = (playerSelection, computerSelection) => {
        playerSelection = playerSelection.toLowerCase();
        
        const round = () => {
        if ((playerSelection == computerSelection)) {
            return "draw" 
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            return "win";
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            return "win";
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            return "win";
        } else {
            return "lose";
        }};

    if (round() == "win") {
        return `You won, ${playerSelection} beat ${computerSelection}`;
    } else if (round() == "lose") {
        return `You lose, ${playerSelection} is beaten by ${computerSelection}`;
    } else if (round() == "draw") {
        return `DRAW`;
    };
    
    };

    console.log(oneRound(playerSelection,computerSelection));
    i++;
};

};

game();






