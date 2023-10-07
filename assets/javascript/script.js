// Assignment Code

// finds the first element that matches "#generate" (button in HTML/CSS), stores it in the variable "generateBtn", and is used in the "addEventListener" below (when you click on the button the writePassword function is activated)
var generateBtn = document.querySelector("#generate");


// assign a variable for all lowercase characters
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];

// assign a variable for all uppercase characters
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

// assign a variable for all numeric characters
var numeric = ["0123456789"];

// assign a variable for all special characters 
var specialCharacters = ["!#$%&*+-<>=?@^_{}~"];

// assign a variable for amount of characters desired in password length, this value will change as the user inputs data according to the prompts (can be manipulated by user input)
var passwordLength = 0;

// assign a variable for empty string, this stores all possible characters that can be used when password is created
var empty = [];




// must create a function for receiving the User input data
function receiveUserInput() {

  //  this is called to set back to empty when starting again each time
  empty = []; 

  // the user input is then stored in the passwordLength variable
  passwordLength = window.prompt("Choose a password length (Enter a number between 8 and 128)");

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Must enter a number between 8 and 128!");

    //return will then stop this function
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
   // must return true to end the function
  return true;  
}



// Add event listener to generate button, "addEventListener" allows developers to attach a function (writePassword) to be called when a specific event happens (when you "click" on the button then the "writePassword" function is activated)
generateBtn.addEventListener("click", writePassword);




// Write password to the #password input
function writePassword() {

  //must call the function to start prompts
  receiveUserInput();  

  // takes the function "generatePassword" and stores it in the variable "password", so you need a "generatePassword" function
  var password = generatePassword(); 

  //finds the first element that matches "#password" (<textarea> "Your Secure Password",) stores it in the variable "passwordText", and is used in the "passwordText.value" below 
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password;
}



// must create a function "generatePassword" as a result from the User input (password is generated base on user input)
function generatePassword() {

// must create a variable for the user password result using an empty string
  var userPassword = "";   

   // for each character choice, this math.floor formula is then used
  for (var i = 0; i < passwordLength; i++) {
    var character = Math.floor(Math.random() * empty.length);

    //stores new value into userPassword
    userPassword = userPassword + empty[character];
  }  
  return userPassword;
}