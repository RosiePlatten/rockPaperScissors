function setup(){
    playerNameBox= document.querySelector('#player-name');
    playerScoreBox= document.querySelector('#player-score');
    computerScoreBox= document.querySelector('#computer-score');
    playerSelectionBox= document.querySelector('#player-selection');
    computerSelectionBox= document.querySelector('#computer-selection');
    resultBox= document.querySelector('#result');
    rockBtn = document.querySelector("#rock-button");
    paperBtn = document.querySelector("#paper-button");
    scissorsBtn = document.querySelector("#scissors-button");
    rockBtn.addEventListener('click', playRound("rock"));
    
    setPlayerName();
}

function setPlayerName(){
    let PlayerName = prompt("Please enter your name ");
    playerNameBox.textContent = PlayerName;
}

function computerPlay(){
    //generates the computers selection randomly
    //first we generate 0, 1 or 2 randomly
    let num = Math.floor(Math.random()*3); 
    //then convert to rock paper or scissors
    switch(num){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "Error COMPUTER PLAY";
    }
}

function playRound(computerSelection, playerSelection){
    //determines the winner of a round
    //playerSelection is not case sensitive so first we convert to lower case 
    playerSelection=playerSelection.toLowerCase();

    //then we determine and return the winner
    if(playerSelection == computerSelection){return "Draw";}
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection =="paper" && computerSelection =="rock") 
        || (playerSelection == "scissors" && computerSelection =="paper")){return "Player Wins";}
    else if ((computerSelection =="rock" && playerSelection == "scissors") || (computerSelection =="paper" && playerSelection == "rock") 
        || (computerSelection == "scissors" && playerSelection =="paper")) {return "Computer Wins";}
    else{return "Error PLAYROUND";}

}

function game(){
    //plays 5 rounds and displays the winner
    //initialise a score variable
    let playerScore=0;
    let computerScore=0;
    //loop 5 times:
    for(let i=0; i<5; i++){
        let playerSelection = prompt("Please enter your play", "ERROR");
        let computerSelection = computerPlay();
        let winner = playRound(computerSelection,playerSelection);
        let output = "Computer Played " + computerSelection +" "+ winner+" Score is now computer ";
        if(winner == "Player Wins"){playerScore++;}
        if(winner == "Computer Wins"){computerScore++;}
        output += computerScore +" player "+ playerScore;
        console.log(output);
    }
    console.log(findWinner(playerScore,computerScore));
}

function findWinner(playerScore, computerScore){
    if(computerScore > playerScore){ return "computer scored "+ computerScore+" player scored "+ playerScore+" computer wins!";}
    if(playerScore>computerScore){ return "computer scored "+ computerScore+" player scored "+ playerScore+" player wins!";}
    else{return "computer scored "+ computerScore+" player scored "+ playerScore+" draw!";}

}

setup();
game();