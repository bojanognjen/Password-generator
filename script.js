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

    let characterSets = [];

    uppercaseCheckbox.checked ? characterSets.push(uppercaseLetters): null;
    lowercaseCheckbox.checked ? characterSets.push(lowercaseLetters): null;
    numbersCheckbox.checked ? characterSets.push(numbers): null;
    symbolsCheckbox.checked ? characterSets.push(symbols): null;

    characterSets.length === 0 ? hidden1.style.display = 'block' : hidden1.style.display = 'none';
    if (length == 0) {
        hidden2.style.display = 'block', 
        hidden2.innerHTML = `<p>Character length is ${length}.</p>`;
    } else {
        hidden2.style.display = 'none';
    }

    let passwordArray = [];
    let remainingLength = length;
    let typeDistribution = Array(characterSets.length).fill(1);
    remainingLength -= characterSets.length;


    // It makes array where every element has value of 1 and
    // it secure that every characterSet has it's symbol in password
    for (let i = 0; i < remainingLength; i++) {
        let randomIndex = Math.floor(Math.random() * characterSets.length);
        typeDistribution[randomIndex]++;
    }


    //It makes this draw of this password
    characterSets.forEach((set, index) => {
        for (let i = 0; i < typeDistribution[index]; i++) {
            passwordArray.push(set[Math.floor(Math.random() * set.length)]);
        }
    });

    
    //It's swapping elements of password
    for (let i = passwordArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
    }
    
    return passwordArray.join('');
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


