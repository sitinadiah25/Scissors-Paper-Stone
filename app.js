let userScore = 0;
let compScore = 0; 
const userScore_span = document.getElementById("user-score"); 
const compScore_span = document.getElementById("comp-score"); 
const scoreBoard_div = document.querySelector(".score-board"); 
const result_div = document.querySelector(".result > p");
const stone_div = document.getElementById("Stone");  
const paper_div = document.getElementById("Paper");  
const scissors_div = document.getElementById("Scissors");
const smallUser = "user".fontsize(3).sub(); 
const smallComp = "comp".fontsize(3).sub(); 

function getComputerChoice() {
    const choices = ["Stone", "Paper", "Scissors"]; 
    const randomNum = (Math.floor(Math.random() * 3));
    return choices[randomNum]; 
}

function win(user, comp) {
    console.log(user);
    const userChoice_div = document.getElementById(user);
    userScore++; 
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${user}${smallUser} beats ${comp}${smallComp}. <br />You win! 🔥`; 
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(user, comp) {
    console.log(user);
    const userChoice_div = document.getElementById(user);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${user}${smallUser} loses to ${comp}${smallComp}. <br />You lost... 💩`; 
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(user, comp) {
    console.log(user);
    const userChoice_div = document.getElementById(user);
    result_div.innerHTML = `${user}${smallUser} draws with ${comp}${smallComp}. <br />It's a draw. 🤭`; 
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300);
}

function game(input) {
    const compChoice = getComputerChoice();
    switch (input + compChoice) {
        case "StoneScissors":
        case "PaperStone": 
        case "ScissorsPaper":
            win(input, compChoice);
            break;
        case "StonePaper":
        case "PaperScissors": 
        case "ScissorsStone": 
            lose(input, compChoice);
            break;
        case "StoneStone": 
        case "PaperPaper":
        case "ScissorsScissors":
            draw(input, compChoice);
    }
}

function main() {
    stone_div.addEventListener('click', () => game("Stone"));
    
    paper_div.addEventListener('click', () => game("Paper"));
    
    scissors_div.addEventListener('click', () => game("Scissors"));
}

main();