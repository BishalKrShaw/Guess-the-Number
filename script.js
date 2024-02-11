// Generate Random Number between 1 - 100
const generatedNumber = Math.floor(Math.random()*100) + 1;

// Making Submit button preventDefault()
const form = document.querySelector("form");
form.addEventListener("submit", (event)=>{
    event.preventDefault();
});

const input = document.querySelector("form input[type='text']");
const button = document.querySelector("form input[type='submit']");
const message = document.querySelector("#displayMessage");
let pastGuesses = document.querySelector("p #pastGuesses");
let pastGuessesArr = [];
let chanceCounterNumber = document.querySelector("#chanceCount span");

// Convert input from String type to Number type
function convertInputType() {
    let inputNumber = parseInt(input.value);
    return inputNumber;
}

// Check the Guess Number
function checkGuessNumber() {
    let inputNumber = convertInputType();
    if(inputNumber === generatedNumber) {
        message.innerHTML = `MATCHED SUCCESSFULLY :)`;
    }
    else if(inputNumber > generatedNumber) {
        message.innerHTML = `You guesses it too Large`;
    }
    else{
        message.innerHTML = `You guessed it too Small`;
    }
}

// Record of past guesses
function guessRecord() {
    pastGuessesArr.push(convertInputType());
    pastGuesses.innerHTML = pastGuessesArr;
}

// Counter of Chance
function chanceCounter() {
    let counterNumber = parseInt(chanceCounterNumber.innerHTML);
    if(counterNumber > 0) {
        counterNumber--;
        chanceCounterNumber.innerHTML = counterNumber;
    }
    else {
        button.disabled = true;
        input.disabled = true;
        button.style.background = "grey";
        button.style.cursor = "no-drop";
        message.innerHTML = `Your Limit is Over!!`;
        input.style.cursor = "no-drop";
    }
}

// Work when button got clicked
button.addEventListener("click", ()=>{
    let number = convertInputType();
    if(number <= 100) {
        checkGuessNumber();
        guessRecord();
        chanceCounter();
    }
    else{
        message.innerHTML = "Choose number between 0 - 100";
    }
    input.value = "";
});