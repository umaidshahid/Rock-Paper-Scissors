//generating random choice from computer
function getCompChoice () {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() *3)]
}

function playRound (computerChoice, playerChoice) {
    
    console.log(computerChoice)
    console.log(playerChoice)
    if (computerChoice == "rock" && playerChoice == "rock") {
        return("It's a tie!")
    }

    else if (computerChoice == "rock" && playerChoice == "paper") {
        return("Player wins!")
    }

    else if (computerChoice == "rock" && playerChoice == "scissors") {
        return("PC wins!")
    }

    else if (computerChoice == "paper" && playerChoice == "rock") {
        return("PC wins!")
    }

    else if (computerChoice == "paper" && playerChoice == "paper") {
        return("It's a tie!")
    }

    else if (computerChoice == "paper" && playerChoice == "scissors") {
        return("Player wins!")
    }

    else if (computerChoice == "scissors" && playerChoice == "rock") {
        return("Player wins!")
    }

    else if (computerChoice == "scissors" && playerChoice == "paper") {
        return("PC wins!")
    }

    else if (computerChoice == "scissors" && playerChoice == "scissors") {
        return("It's a tie!")
    }
}

function playGame(computerChoice, playerChoice, pcScore, playerScore) {
    
    const scoreKeeper = playRound(computerChoice, playerChoice)
    if (scoreKeeper == "PC wins!") {
        console.log(scoreKeeper)
        pcScore.value++
    }

    else if (scoreKeeper == "Player wins!") {
        console.log(scoreKeeper)
        playerScore.value++
    }

    console.log("Player Score: ", playerScore)
    console.log("PC Score: ", pcScore)
}
    
let pcScore = {value: 0}
let playerScore = {value: 0}
//getting user input

    let playerChoice = prompt("Enter your choice: Rock, Paper, or Scissors").toLowerCase()
    const computerChoice = getCompChoice()

    if (playerChoice != "rock" && playerChoice != 'paper' && playerChoice && "scissors") {
        console.log("Incorrect input, please try again")
    }

    playGame(computerChoice,playerChoice, pcScore, playerScore)

