// Assignment code here
var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\\","|", ";", ":", "'", "\"", ",", "<", ".", ">", "/", "?"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

function generatePassword() {
  let password = ""
  let passwordArray = []
  let passwordLength = prompt("How long would you like your password to be?")
  let passwordLower = confirm("Would you like to include lowercase letters?")
  let passwordUpper = confirm("Would you like to include uppercase letters?")
  let passwordSpecial = confirm("Would you like to include special characters?")
  let passwordNumbers = confirm ("Would you like to include numbers?")
  
  return password
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);