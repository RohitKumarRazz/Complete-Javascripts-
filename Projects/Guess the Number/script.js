let randomNum = parseInt(Math.random() *100 + 1);

const submit = document.querySelector('#subt')
const UserInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowerHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')


const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(UserInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter a valid Number')
    }else if (guess < 1){
        alert('Please Enter a valid Number')
    }
    else if(guess > 100){
        alert('Please Enter a valid Number')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number is ${randomNum}`)
            endGame()

        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`You Guessed it right `)
        endGame()
    }
    else if(guess < randomNum){
        displayMessage(`Number is to low`)
    }
    else if(guess > randomNum){
        displayMessage(`Number is to high`)
    }

}

function displayGuess(guess){
    UserInput.value = ""
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML  = `${11-numGuess} `
    
}
function displayMessage(message){
    lowerHigh.innerHTML = `<h2>${message}</h2> `


}
function endGame(){
    UserInput.value = ""
    UserInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame()

}
function newGame(){
    const newBtn = document.querySelector('#newGame')
    newBtn.addEventListener('click', function(e){
        randomNum = parseInt(Math.random() *100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML  = `${11-numGuess} `
        UserInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    })

}






