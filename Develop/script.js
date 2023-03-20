// Assignment code here

// Defining variables for the password criteria
var lower_Characters = "abcdefghijklmnopqrstuvwxyz";
var upper_Characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special_Characters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = "0123456789";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function passwordLength() {

 // User chooses password character length from between 8 to 128 characters.
  var password_length = window.prompt ("Choose how many characters would you like this password to be? Please choose from a minimum of 8 to maximum of 128 characters.");
    
   if (password_length >= 8 && password_length <=128) {
    confirmCharacters();
   } else {
       window.alert ("invalid option, please choose between 8 to 128 characters");
       passwordLength();
   }

};

// User chooses the characters they want in their password.
function confirmCharacters() {

  var yes_lower_characters = confirm ("Do you want to have lowercase characters in your password?");
  var yes_upper_characters = confirm ("Do you want to have uppercase characters in your password?");
  var yes_special_characters = confirm ("Do you want to have special characters in your password?");
  var yes_numbers = confirm ("Do you want to have numbers in your password?")
   
   if (!yes_lower_characters && !yes_upper_characters && !yes_special_characters && !yes_numbers) {
    window.alert ("invalid entry, please choose to include at least one set of characters in your password");
    confirmCharacters();
   }


};

function generatePassword() {
 var confirmed_length = passwordLength();
 
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
