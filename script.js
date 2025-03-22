const hidden = document.querySelector('.hidden');
const form = document.querySelector('.form');
const rangeInput = document.querySelector('.slider');
const charLength = document.querySelector('.number');
const generateButton = document.querySelector('.button');
const uppercaseCheckbox = document.querySelector('#include1');
const lowercaseCheckbox = document.querySelector('#include2');
const numbersCheckbox = document.querySelector('#include2');
const symbolsCheckbox = document.querySelector('#include2');



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

function calculatePassword(e) {
    e.preventDefault();
    const allCharacters = '';
    uppercaseCheckbox.checked ? allCharacters += uppercaseLetters : null;
    lowercaseCheckbox.checked ? allCharacters += lowercaseLetters : null;
    numbersCheckbox.checked ? allCharacters += numbers : null;
    symbolsCheckbox.checked ? allCharacters += symbols : null;
    allCharacters == '' ? hidden.style.display = 'block' : null;
    
    const generateLength = rangeInput.value;
    let password = '';

}

generateButton.addEventListener('click', calculatePassword);


