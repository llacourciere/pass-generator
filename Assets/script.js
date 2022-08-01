// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
var passwordText = document.querySelector("#password")

var passwordLength = 128;

function generatePassword() {

  var passwordLength = parseInt(prompt(
    'How long do you want your password? Choose a number between 8 and 128'
  ));

  //check to make sure pass is more then 8 and less than 128
  //make sure user input is a number
  if (isNaN(passwordLength)) {
    alert("Please enter a number between 8-128")
    return null;
  }
  else if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8-128");
    return null;
  }

  //ask user to choose what kind of characters they want
  //add those characters to become valid symbols to pull from
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numberCase = "1234567890";
  var specialCase = "!@#$%^&*()";
  var validSymbols = "";

  var upperCaseConfirm = window.confirm(
    "Do you want upper case letters in your password?"
  );

  if (upperCaseConfirm) {
    validSymbols += upperCase
  }

  var lowerCaseConfirm = window.confirm(
    "Do you want lower case letters in your password?"
  );

  if (lowerCaseConfirm) {
    validSymbols += lowerCase
  }

  var numberCaseConfirm = window.confirm(
    "Do you want numbers in your password?"
  );

  if (numberCaseConfirm) {
    validSymbols += numberCase
  }

  var specialCaseConfirm = window.confirm(
    "Do you want special characters in your password?"
  );

  if (specialCaseConfirm) {
    validSymbols += specialCase
  }

  var password = "";

  //generate password by taking validsymbols and the lenth and creating a random number 
  //for each 'randomX' or character wanted
  for (var i = 0; i <= passwordLength; i++) {
    var randomX = Math.floor(Math.random() * validSymbols.length);
    password += validSymbols[randomX];
  }
  return password;
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
