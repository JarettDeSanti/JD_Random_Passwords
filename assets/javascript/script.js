// Assignment Code
var generateBtn = document.querySelector("#generate");


// assign a variable for all lowercase characters
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];

// assign a variable for all uppercase characters
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

// assign a variable for all numeric characters
var numeric = ["0123456789"];

// assign a variable for all special characters 
var specialCharacters = ["!#$%&*+-<>=?@^_{}~"];

// assign a variable for amount of characters desired in password length
var passwordLength = 0;

// assign a variable for empty string
var empty = [];


// must create a function for receiving the User input data
function receiveUserInput() {
  empty = []; // this is called to set back to empty
  passwordLength = window.prompt("Choose a password length (Enter a number between 8 and 128)");

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Must enter a number between 8 and 128!");
    return;
  }


  // must create a confirm box for lowercase letters
  if (window.confirm("Do you want to include lowercase letters in the password?")) {
    empty = empty + lowerCase;
  }

  // must create a confirm box for uppercase letters
  if (window.confirm("Do you want to include uppercase letters in the password?")) {
    empty = empty + upperCase;
  }

  // must create a confirm box for numeric characters
  if (window.confirm("Do you want to include numbers in the password?")) {
    empty = empty + numeric;
  }

  // must create a confirm box for special characters
  if (window.confirm("Do you want to include special characters in the password?")) {
    empty = empty + specialCharacters;
  }
  return true;  // must return true to end the function
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  receiveUserInput();  //must call the function to start prompts
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// must create a "function generatePassword" as a result from the User input
function generatePassword() {
  var userPassword = "";    // must create a variable for the user password result
  for (var i = 0; i < passwordLength; i++) {
    var character = Math.floor(Math.random() * empty.length);
    userPassword = userPassword + empty[character];
  }
  return userPassword;
}