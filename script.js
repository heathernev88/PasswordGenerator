const result = document.querySelector("#password");
const charLower = [97, 122];
const charUpper = [65, 90];
const numbers = [48, 57];
const symbols = [33, 47];




document.querySelector("#generate").addEventListener("click", () => {
  var charNum = document.querySelector("#charAmountNumber").value;
  const upper = document.querySelector("#includeUppercase").checked;
  const lower = document.querySelector("#includeLowercase").checked;
  const num = document.querySelector("#includeNumbers").checked;
  const sym = document.querySelector("#includeSymbols").checked;
  
  const randSelector = [];
  const password = [];

if (upper === true) {
    for (let i = charUpper[0]; i <= charUpper[1]; i++)
    randSelector.push(i);
  }
  if (lower === true) {
    for (let i = charLower[0]; i <= charLower[1]; i++)
    randSelector.push(i);
  }
  if (num === true) {
    for (let i = numbers[0]; i <= numbers[1]; i++)
    randSelector.push(i);
  }
  if (sym === true) {
    for (let i = symbols[0]; i <= symbols[1]; i++)
    randSelector.push(i);
  }
  
  for(let i = 0; i < charNum; i++) {
    password.push(String.fromCharCode(randSelector[Math.floor(Math.random()*randSelector.length)]))
  }
  result.textContent = password.join('');
})
