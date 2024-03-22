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

function playGame(playerChoice) {
    
    const computerChoice = getCompChoice()
    const scoreKeeper = playRound(computerChoice, playerChoice)
    if (scoreKeeper == "PC wins!") {
        console.log(scoreKeeper)
        pcScore++
    }

    else if (scoreKeeper == "Player wins!") {
        console.log(scoreKeeper)
        playerScore++
    }

    else {
        displayResults.textContent = 'Round Tied'
    }


    displayComputerScore.textContent = `PC Score : ${pcScore}`
    displayPlayerScore.textContent = `Player Score: ${playerScore}`

    if (pcScore == 5 ) {
        displayResults.textContent = 'PC wins! Game Over'
        pcScore = 0
        playerScore = 0
    }
    
    else if (playerScore == 5 ) {
        displayResults.textContent = 'Player wins! Game Over'
        pcScore = 0
        playerScore = 0
    }
}
    
let pcScore = 0
let playerScore = 0

let displayComputerScore = document.querySelector('#pcScore')

let displayPlayerScore = document.querySelector('#playerScore')

//getting user input
document.getElementById("rock").addEventListener('click', function () {
    playGame('rock')
})

document.getElementById("paper").addEventListener('click', function () {
    playGame('paper')
})

document.getElementById("scissors").addEventListener('click', function () {
    playGame('scissors')
})



const divResults = document.querySelector('#results')
const displayResults = document.createElement('div')
divResults.appendChild(displayResults)






