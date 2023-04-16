// Assignment code here

// Defining variables for the password criteria
var lower_Characters = "abcdefghijklmnopqrstuvwxyz";
var upper_Characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special_Characters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numbers = "0123456789";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Defined password length as undefined to be able to store information in it later.
var password_length;

function passwordLength() {

 // User chooses password character length from between 8 to 128 characters.
  password_length = window.prompt ("Choose the desired length of your password. Please choose from a minimum of 8 to maximum of 128 characters in length.");
    
   if (password_length >= 8 && password_length <=128) {
    confirmCharacters();
   } else {
       window.alert ("invalid option, please choose between 8 to 128 characters");
       passwordLength();

   }
 return password_length;
};

// storage of confirmed password criteria
var passwordCriteria = ""

// User chooses the characters they want in their password.
function confirmCharacters() {

  var yes_lower_characters = confirm ("Do you want to have lowercase characters in your password? Click "Okay" for "Yes", or click "Cancel" for "No"");
  var yes_upper_characters = confirm ("Do you want to have uppercase characters in your password?");
  var yes_special_characters = confirm ("Do you want to have special characters in your password?");
  var yes_numbers = confirm ("Do you want to have numbers in your password?");
   
   if (!yes_lower_characters && !yes_upper_characters && !yes_special_characters && !yes_numbers) {
    window.alert ("invalid entry, please choose to include at least one set of characters in your password");
    return confirmCharacters();
   }
   // This section's "if statements" confirms if the user wants the password character included and then pulls the variable information from lines 4 to 7.
   if (yes_lower_characters) {
    passwordCriteria += lower_Characters;
   }
   if (yes_upper_characters) {
    passwordCriteria += upper_Characters;
   }
   if (yes_special_characters) {
    passwordCriteria += special_Characters;
   }
   if (yes_numbers) {
    passwordCriteria += numbers;
   }
  
  return passwordCriteria; 
};



// combines the confirmCharacters & passwordLength
function generatePassword() {
 passwordLength();

 var storedPassword = ""
 for (var i = 0; i < password_length; i++) {
  var generateRandom = Math.floor(Math.random() * passwordCriteria.length);
  var character = passwordCriteria.charAt(generateRandom);
  storedPassword += character;
 }
 
 return storedPassword;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  passwordCriteria = ""

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
