let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");



const Computerchoice = () => {
    //rocck , paper, choice
    const options = ["rock","paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3 );
    // learn math.random
    return options[randIdx];
};
const drawGame = (compChoice) => {
    console.log("The Game was Draw");
    msg.innerText = `A draw computer choose ${compChoice}`
    msg.style.backgroundColor ="darkblue";
    };
    
const showWinner = (userWin, compChoice) => {
    if (userWin == true){
        userScore++;
        userscore.innerText = userScore;
        console.log("You Won");
        msg.innerText=`You won! computer picked ${compChoice}`;
        msg.style.backgroundColor ="green";

        
    }else {
        compScore++;
        compscore.innerText= compScore;
        console.log("You lose");
        msg.innerText=`You lost! computer picked ${compChoice}`;
        msg.style.backgroundColor ="red";
        

    }
};

const playgame = (choiceId) => {
    console.log("user choice = ",choiceId);
    // generates computer choice 
    const compChoice = Computerchoice();
    console.log("comp choice =", compChoice);
    

    if ( choiceId === compChoice)
    {
        //draw game 
        drawGame(compChoice);
    } else 
    {
        let userWin = true;
        if(choiceId === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (choiceId === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else if ( choiceId === "scissors"){
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner (userWin,  compChoice);
    }


};

choices.forEach((choice)=> {
    choice.addEventListener("click", () =>{
        const choiceId = choice.getAttribute("id");
        console.log("choice was cliked",choiceId);
        playgame(choiceId);
    });
});

