// Assignment Code
var generateBtn = document.querySelector("#generate");
var symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "?", "<", ">"];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var upperCase = ["A", "B","C", "D", "E", "F" ,"H", "I", "J", "K", "L", "M", "O","P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
  passwordCombo()
  //console.log(index)
}
function passwordCombo() {
  var promptAnswer = prompt("choose number of characters 8-128");
  
 
   if (promptAnswer < 8) {
    alert("didn't I say 8-128?");
    return null
  }
  if (Number.isNaN(promptAnswer)) {
    alert("password length has to be a number, duh");
    return null;
  }
  if (promptAnswer > 128) {
    alert("can you read bro?");
    return null
  }
  var lower = confirm(
    "you want lowercase?"
  );
  var upper = confirm(
    "YOU WANT UPPERCASE?!"
  );
  var numb = confirm(
    "#'s?"
  );
  var spec = confirm(
    "cool characters?"
  )

}
var index = Math.floor(Math.random() * symbols.length);
var indexx = Math.floor(Math.random() * numbers.length);
var indexxx = Math.floor(Math.random() * upperCase.length);
var indexxxx = Math.floor(Math.random() * lowerCase.length);


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


