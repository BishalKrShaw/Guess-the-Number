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
let pastGuesses = document.querySelector("p #pastGuesses").innerHTML;
let pastGuessesArr = [];
let chanceCounterNumber = document.querySelector("#chanceCount span").innerHTML;

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
    pastGuesses = pastGuessesArr;
}

// Counter of Chance
function chanceCounter() {
    if(chanceCounterNumber > 0) {
        chanceCounterNumber--;
    }
}

// Work when button got clicked
button.addEventListener("click", ()=>{
    checkGuessNumber();
    guessRecord();
    chanceCounter();
    input.value = "";
});