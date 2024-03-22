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

function playGame(playerChoice, pcScore, playerScore) {
    
    const computerChoice = getCompChoice()
    const scoreKeeper = playRound(computerChoice, playerChoice)
    if (scoreKeeper == "PC wins!") {
        console.log(scoreKeeper)
        pcScore.value++
    }

    else if (scoreKeeper == "Player wins!") {
        console.log(scoreKeeper)
        playerScore.value++
    }

    else {
        console.log("it's a tie!")
    }

    console.log("Player Score: ", playerScore)
    console.log("PC Score: ", pcScore)

    displayComputerScore.textContent = `PC Score : ${pcScore.value}`
    displayPlayerScore.textContent = `Player Score: ${playerScore.value}`
}
    
let pcScore = {value: 0}
let playerScore = {value: 0}

let displayComputerScore = document.querySelector('#pcScore')

let displayPlayerScore = document.querySelector('#playerScore')

//getting user input
document.getElementById("rock").addEventListener('click', function () {
    playGame('rock', pcScore, playerScore)
})

document.getElementById("paper").addEventListener('click', function () {
    playGame('paper', pcScore, playerScore)
})

document.getElementById("scissors").addEventListener('click', function () {
    playGame('scissors', pcScore, playerScore)
})

// const resultsDiv = document.querySelector('.results')

// const results = document.createElement('div')



