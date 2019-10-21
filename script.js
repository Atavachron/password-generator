//Access the DOM Elements

const outputElem = document.getElementById('output');
const lengthElem = document.getElementById('length');
const uppercaseElem = document.getElementById('uppercase');
const lowercaseElem = document.getElementById('lowercase');
const numbersElem = document.getElementById('numbers');
const symbolsElem = document.getElementById('symbols');
const clipboardElem = document.getElementById('clipboard');
const generateElem = document.getElementById('generate-pwd');


//Generator functions

//Generate a random lowercase letter
function generateLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97); 
}

//Generate a random uppercase letter
function generateUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65); 
}

//Generate a random number
function generateNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48); 
}

//Generate a random symbol
function generateSymbol() {
  const symbols = '~!@#$%^&*()_+=[]{}:;<>,.';
  return symbols[Math.floor(Math.random() * symbols.length)]; 
}

//Add all generator functions to an object
const randomFunction = {
  lower: generateLower,
  upper: generateUpper,
  number: generateNumber,
  symbol: generateSymbol
}

//Generate Password Function
function generatePassword(lower, upper, number, symbol, length) {
  //Initialize a password variable
  let password = '';

  //Filter out the unchecked types
  const checkedTypesArray = [{lower}, {upper}, {number}, {symbol}].filter(elem => Object.values(elem)[0]);

  //If none are checked return empty string
  const checkedTypesCount = lower + upper + number + symbol;
  if (checkedTypesCount === 0) {
    return '';
  }  

  for (let i = 0; i < length; i += checkedTypesCount) {
    checkedTypesArray.forEach(elem => {
      const functionName = Object.keys(elem)[0];
      password += randomFunction[functionName]();
    });
  }
  return password.slice(0, length);
}

//Event Listeners
generateElem.addEventListener('click', () => {
  const length = parseInt(lengthElem.value);
  const hasLower = lowercaseElem.checked;
  const hasUpper = uppercaseElem.checked;
  const hasNumber = numbersElem.checked;
  const hasSymbol = symbolsElem.checked; 

  outputElem.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});


clipboardElem.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = outputElem.innerText;
  
  if (!password) {
    return
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard'); 
});