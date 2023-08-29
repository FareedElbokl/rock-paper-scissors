function getComputerChoice() {
    let randomNum = Math.floor(Math.random() *3) + 1
    if (randomNum == 1) {
        return "rock"
    } else if (randomNum == 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

let startClickStatus = true

let userScoreDiv = document.querySelector(".user-score")
let compScoreDiv = document.querySelector(".computer-score")
let compChoiceDiv = document.querySelector(".display-computer-choice")
let rockButton = document.querySelector(".rock-button")
let paperButton = document.querySelector(".paper-button")
let scissorsButton = document.querySelector(".scissors-button")






//evrything under dis will be a function called "game"
function game() {


    let userScore = 0
    let compScore = 0
    userScoreDiv.innerText = "User Score: " + userScore
    compScoreDiv.innerText = "Computer Score: " + compScore



    function clickedRock() {
            let compSelection = getComputerChoice()
            
            compChoiceDiv.style.cssText = "color: black; font-size: 50px; border: none"
            compChoiceDiv.innerText = "Computer Selected: " + compSelection
            

            if (compSelection == "paper") {
                compScore++
                compScoreDiv.innerText = "Computer Score: " + compScore
            } else if (compSelection == "scissors") {
                userScore++
                userScoreDiv.innerText = "User Score: " + userScore
            }

            if (userScore == 5 || compScore == 5) {
                startClickStatus = true
                if (userScore == 5) {
                    compChoiceDiv.innerText = "You win! Click here to play again"
                    return "yo"
                } else if (compScore == 5) {
                    compChoiceDiv.innerText = "Computer wins! Click here to play again"
                    return "yo"
                }
                
            } 

            if (userScore == 5 || compScore == 5) {
                startClickStatus = true
                if (userScore == 5) {
                    compChoiceDiv.innerText = "You win! Click here to play again"
                    return "yo"
                } else if (compScore == 5) {
                    compChoiceDiv.innerText = "Computer wins! Click here to play again"
                    return "yo"
                }
                
            } 

            return 0
        }

    function clickedPaper() {
            let compSelection = getComputerChoice()
            compChoiceDiv.style.cssText = "color: black; font-size: 50px; border: none"
            compChoiceDiv.innerText = "Computer Selected: " + compSelection
            

            if (compSelection == "scissors") {
                compScore++
                compScoreDiv.innerText = "Computer Score: " + compScore
            } else if (compSelection == "rock") {
                userScore++
                userScoreDiv.innerText = "User Score: " + userScore
            }

            if (userScore == 5 || compScore == 5) {
                startClickStatus = true
                if (userScore == 5) {
                    compChoiceDiv.innerText = "You win! Click here to play again"
                    return "yo"
                } else if (compScore == 5) {
                    compChoiceDiv.innerText = "Computer wins! Click here to play again"
                    return "yo"
                }
                
            } 
            
            return 0
        }    

    function clickedScissors() {
            let compSelection = getComputerChoice()
            compChoiceDiv.style.cssText = "color: black; font-size: 50px; border: none"
            compChoiceDiv.innerText = "Computer Selected: " + compSelection
            

            if (compSelection == "rock") {
                compScore++
                compScoreDiv.innerText = "Computer Score: " + compScore
            } else if (compSelection == "paper") {
                userScore++
                userScoreDiv.innerText = "User Score: " + userScore
            }

            if (userScore == 5 || compScore == 5) {
                startClickStatus = true
                if (userScore == 5) {
                    compChoiceDiv.innerText = "You win! Click here to play again"
                    compChoiceDiv.addEventListener("click", game)
                } else if (compScore == 5) {
                    compChoiceDiv.innerText = "Computer wins! Click here to play again"
                    compChoiceDiv.addEventListener("click", game)
                }
                
            } 

            return 0
            

        }    

    

    

    rockButton.addEventListener("click", clickedRock)   
    paperButton.addEventListener("click", clickedPaper)
    scissorsButton.addEventListener("click", clickedScissors) 
    



        


        
    

        


}


if (startClickStatus == true){
    compChoiceDiv.addEventListener("click", game)
    startClickStatus = false
}












