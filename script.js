function setup(){
    roundCounter=0;
    playerScore=0;
    computerScore=0;
    playerSelection = "";
    computerSelection="";
    playerNameBox= document.querySelector('#player-name');
    playerScoreBox= document.querySelector('#player-score');
    computerScoreBox= document.querySelector('#computer-score');
    playerSelectionBox= document.querySelector('#player-selection');
    computerSelectionBox= document.querySelector('#computer-selection');
    resultBox= document.querySelector('#result');
    rockBtn = document.querySelector("#rock-button");
    paperBtn = document.querySelector("#paper-button");
    scissorsBtn = document.querySelector("#scissors-button");
    rockBtn.addEventListener('click', function(){playerSelection ="rock";  playRound("rock");});
    paperBtn.addEventListener('click',function(){playerSelection ="paper";  playRound("paper");});
    scissorsBtn.addEventListener('click', function(){playerSelection ="scissors";  playRound("scissors");});
    setPlayerName();
    updateUI();
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
    }
}

function playRound(playerSelection){
    if(roundCounter<5){
        roundCounter ++;
        computerSelection = computerPlay();
        calculateRoundWinner(playerSelection,computerSelection);
        console.log(playerScore+computerScore);
        updateUI();
    }
    else if (roundCounter == 5){endGame();}

}

function calculateRoundWinner(playerSelection,computerSelection){
    if(playerSelection == computerSelection){}
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection =="paper" && computerSelection =="rock") 
        || (playerSelection == "scissors" && computerSelection =="paper")){playerScore=playerScore+1;}
    else {computerScore=computerScore+ 1;}
}

function updateUI(){
    playerScoreBox.textContent = playerScore;
    computerScoreBox.textContent = computerScore;
    playerScoreBox.textContent = playerScore;
    playerSelectionBox.textContent = playerSelection;
    computerSelectionBox.textContent = computerSelection;
}
function endGame(){
    if(computerScore > playerScore){ resultBox.textContent = "Computer Won";}
    if(playerScore>computerScore){  resultBox.textContent = "Player Won";}
    else{ resultBox.textContent = "Draw";}

}

setup();