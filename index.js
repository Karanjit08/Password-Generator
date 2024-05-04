

var passwordSlider = document.querySelector("#password-slider");
var sliderValue = document.querySelector("#slider-value");
var result = document.querySelector(".result");
var upperElement = document.querySelector("#uppercase");
var lowerElement = document.querySelector("#lowercase");
var numbersElement = document.querySelector("#numbers");
var symbolsElement = document.querySelector("#symbol");
var passwordBtn = document.querySelector(".password-box-3");
var copyIconElement = document.querySelector(".copy-icon");

passwordSlider.addEventListener("input",()=>{
    sliderValue.textContent = passwordSlider.value
});

copyIconElement.addEventListener('click',async()=>{
    
    var copyText = result.textContent;
    await navigator.clipboard.writeText(copyText);
    alert("Password copied to clipboard");


    
});

passwordBtn.addEventListener('click',() =>{
    // console.log(getRandomUpperCaseLetters());
    // console.log(getRandomLowerCaseLetters());
    // console.log(getRandomNumbers());
    // console.log(getRandomSymbol());
    // console.log(sliderValue.textContent);
    // console.log(result);
    // console.log(upperElement);
    // console.log(lowerElement);
    // console.log(numbersElement);
    // console.log(symbolsElement);
    // console.log(copyIconElement);

    const isUpperCase = upperElement.checked;
    const isLowerCase = lowerElement.checked;
    const isNumber = numbersElement.checked;
    const isSymbol = symbolsElement.checked;
    
    let characters = '';
    if(isUpperCase){
        characters = characters + getRandomUpperCaseLetters();
        // console.log(characters);
    }
    if(isLowerCase){
        characters = characters + getRandomLowerCaseLetters();
        // console.log(characters);
    }
    if(isNumber){
        characters = characters + getRandomNumbers();
        // console.log(characters);
    }
    if(isSymbol){
        characters = characters + getRandomSymbol();
        // console.log(characters);
    }
    console.log(`FINAL CHARACTERS: ${characters}`);

    if(!characters){
        alert("Please select atleat one option to proceed");
        return;
    }

    let password = '';
    for (let i = 0; i < parseInt(sliderValue.textContent); i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        
        password += characters[randomIndex];
    }

    console.log(password);

    result.textContent = password;
});


function getRandomUpperCaseLetters(){
     // Generate a random index between 0 and 25 (inclusive)
    const randomIndex = Math.floor(Math.random() * 26);
    
    // Convert the random index to a character code and add it to the character code of 'A'
    const randomCharCode = 65 + randomIndex;
    
    // Convert the character code to its corresponding uppercase letter
    const randomLetter = String.fromCharCode(randomCharCode);
    
    return randomLetter;
}

function getRandomLowerCaseLetters(){
    const randomIndex = Math.floor(Math.random() * 26);
    
    // Convert the random index to a character code and add it to the character code of 'A'
    const randomCharCode = 97 + randomIndex;
    
    // Convert the character code to its corresponding uppercase letter
    const randomLetter = String.fromCharCode(randomCharCode);
    
    return randomLetter;
}

function getRandomNumbers(){
    const randomNumber = Math.floor(Math.random()*10);
    return randomNumber;
}

function getRandomSymbol() {
    const symbols = "!@#$%^&*()_-+=[]{}|;:,.<>?";
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
}


// console.log(getRandomUpperCaseLetters());
// console.log(getRandomLowerCaseLetters());
// console.log(getRandomNumbers());
// console.log(getRandomSymbol());