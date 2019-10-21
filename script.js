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
