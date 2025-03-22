const hidden1 = document.querySelector('.hidden1');
const hidden2 = document.querySelector('.hidden2');
const rangeInput = document.querySelector('.slider');
const charLength = document.querySelector('.number');
const generateButton = document.querySelector('.button');
const uppercaseCheckbox = document.querySelector('#include1');
const lowercaseCheckbox = document.querySelector('#include2');
const numbersCheckbox = document.querySelector('#include3');
const symbolsCheckbox = document.querySelector('#include4');

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!#$%&?@';



function updateSliderBackground(e) {
    const value = e.target.value;
    const maxValue = e.target.max;
    const percentage = Math.floor((value/maxValue) * 100) + "%";
    e.target.style.background = `linear-gradient(to right, hsl(127deg 100% 82%) ${percentage}, hsl(248deg 15% 11%) ${percentage})`;
}

function lengthChange(e) {
    charLength.innerText = e.target.value;
    updateSliderBackground(e);
}

rangeInput.addEventListener('input', lengthChange);

function calculatePassword(length) {
    let allCharacters = '';
    uppercaseCheckbox.checked ? allCharacters += uppercaseLetters : null;
    lowercaseCheckbox.checked ? allCharacters += lowercaseLetters : null;
    numbersCheckbox.checked ? allCharacters += numbers : null;
    symbolsCheckbox.checked ? allCharacters += symbols : null;
    allCharacters == '' ? hidden1.style.display = 'block' : hidden1.style.display = 'none';
    if (length == 0) {
        hidden2.style.display = 'block', 
        hidden2.innerHTML = `<p>Character length is ${length}.</p>`;
    } else {
        hidden2.style.display = 'none';
    }
    const allCharactersArray = Array.from(allCharacters);
    console.log(allCharactersArray);
    let password = '';

    for (let i = 1; i <= length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharactersArray.length);
        password += allCharactersArray[randomIndex];
    }
    return password;

}

function display(phrase) {
    console.log(phrase);
}

function calculateAndDisplayPassword(e) {
    e.preventDefault();
    const passwordLength = rangeInput.value;
    const password = calculatePassword(passwordLength);
    display(password);
}

generateButton.addEventListener('click', calculateAndDisplayPassword);


