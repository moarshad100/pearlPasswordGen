// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var set_number = "0123456789";
var special_char = "!#$%&'()*+,-./:;<=>?@[\"\\]^";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Choose a length between 8 to 128 characters
  var length = window.prompt("How many characters would you like?\nEnter a number between 8 and 128");
  while ((length < 8) || (length > 128)) {
    var length = window.prompt("Please, Enter a number between 8 and 128");
  }

}
