// Constant arrays of accepted characters
const alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const specialCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\\","|", ";", ":", "'", "\"", ",", "<", ".", ">", "/", "?"]
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// Function for generating password
function generatePassword() {

  // Empty password string and array for password generation
  let password = ""
  let passwordArray = []

  // Sets password length to zero and keeps asking user for a
  // password length until they enter one within the range provided
  let passwordLength = 0  
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Passwords must be between 8 and 128 characters.\nHow long would you like your password to be?")
  }
  
  // Prompts user for password character inclusions
  let passwordLower = confirm("Would you like to include lowercase letters?")
  let passwordUpper = confirm("Would you like to include uppercase letters?")
  let passwordSpecial = confirm("Would you like to include special characters?")
  let passwordNumbers = confirm ("Would you like to include numbers?")

  // Logic for adding selected characters to password characters
  if (passwordLower == true) {
    passwordArray = passwordArray.concat(alphabetLower)
  }
  if (passwordUpper == true) {
    passwordArray = passwordArray.concat(alphabetUpper)
  }
  if (passwordSpecial == true) {
    passwordArray = passwordArray.concat(specialCharacters)
  }
  if (passwordNumbers == true) {
    passwordArray = passwordArray.concat(numbers)
  }

  // If no characters were selected, return an empty string and ask user to try again.
  if (passwordArray.length == 0) {
    alert("You have selected no characters for your password.\nPlease select characters to include in your password next time.")
    return ""
  }

  // Cycles through password, adding a random character each cycle
  for (let i = 0; i < passwordLength; i++) {
    password = password + passwordArray[Math.floor(Math.random() * (passwordArray.length + 1))]
  }
  
  // returns password to be displayed
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