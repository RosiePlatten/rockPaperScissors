function computerPlay(){
    num = Math.floor(Math.random()*3);
    switch(num){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            return "ERROR";
    }
}

console.log(computerPlay());