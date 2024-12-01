let count = 0;

const countLabel = document.getElementById("countLabel");
const increaseButton = document.getElementById("increaseButton");
const decreaseButton = document.getElementById("decreaseButton");
const resetButton = document.getElementById("resetButton");


increaseButton.onclick = function(){
    count ++;
    countLabel.textContent = count
}
decreaseButton.onclick = function(){
    count --;
    countLabel.textContent = count
}
resetButton.onclick = function(){
    count = 0;
    countLabel.textContent = count
}




const minSubmitBtn = document.getElementById("minSubmitBtn")
const maxSubmitBtn = document.getElementById("maxSubmitBtn")
const minInput = document.getElementById("minInput")
const maxInput = document.getElementById("maxInput")
const guessInput = document.getElementById("guessInput")

let min;
let max;
let guess;


minSubmitBtn.onclick = function(){
    if(isNaN(minInput.value)){
        window.alert(`Please Enter a Valid Number`)
    }
    else{
        min = Number(minInput.value);
        console.log(min)
    }
}
maxSubmitBtn.onclick = function(){
    if(isNaN(maxInput.value)){
        window.alert(`Please Enter a Valid Number`)
    }
    else{
        max = Number(maxInput.value);
        console.log(max)
    }
}
guessSubmitBtn.onclick = function(){
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    if(isNaN(guessInput.value) || guessInput.value > max || guessInput.value < min){
        window.alert(`Please Enter a Valid Number`)

    }
    else{
        guess = Number(guessInput.value);
    
        if(guess == randomNum){
            document.getElementById("yesNo").textContent  = `Correct! Good Job!`
        }
        else{
            document.getElementById("yesNo").textContent  = `Wrong`
        }
        console.log(randomNum)
    }

}
