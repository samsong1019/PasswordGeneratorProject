// Assignment Code
//symbols is variable for symbols
// numbers is var for numbers
// upperCase is var for Upper case
// lowerCase is var for lower case 
// passwordCombo is a function delcaring combination types and length of password






//all are potential characters that can be pulled for the random number generator. also known as an array. 
// an array is an order lost of values. each calue is called an element specified by an index.
var symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "?", "<", ">"];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var upperCase = ["A", "B", "C", "D", "E", "F", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Write password to the #password input

//this function will prompt the user for password options. 
function getPasswordCombo() {
  //variable to store how many characters the user wants.
  var length = prompt("choose number of characters 8-128");
  

  //  need an if statements. 
  // this will insure the customer chooses a number between 8 and 128. 
  // if customer chooses below 8 will give a alert with error
  // if its not a number customer will have same problem and same with above 128
  if (length < 8) {
    alert("didn't I say 8-128?");
    return null
  }
  if (Number.isNaN(length)) {
    alert("password length has to be a number, duh");
    return null;
  }
  if (length > 128) {
    alert("can you read bro?");
    return null
  }
  // variables to store boolean values to include or not include password options
  var hasLowerCase = confirm(
    "you want lowercase?"
  );
  var hasUpperCase = confirm(
    "YOU WANT UPPERCASE?!"
  );
  var hasNumbers = confirm(
    "#'s?"
  );
  var hasSymbols = confirm(
    "cool characters?"
  )
  //if statement to make sure customer chooses atleast one character type
  if (
    hasLowerCase === false &&
    hasUpperCase === false &&
    hasNumbers === false &&
    hasSymbols === false
  ) {
    alert("Bruh choose something, how you gonna make a password with no characters silly");
    return null
  }

// stores customer responses
  var PasswordChoices = {
    length: length,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasNumbers: hasNumbers,
    hasSymbols: hasSymbols,
  };

  return PasswordChoices;
}

// function for getting random element from arrasys
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordCombo();
  //stores password while all characters are being combined using .concat
  var result = [];
  // stores all types of characters the user wishes to have. [] is empty array
  var characterTypes = [];
  //arrary to hold each type of character so all of them will be used
  var includedCharacters = [];
  // if (does not exists) return null
  if (!options) return null;

  //if (options (includes)has symbols) { character types = character types concatentating the symbols push included characters to the empty included characters array which would be symbols while using the function get random}
  if (options.hasSymbols) {
    characterTypes = characterTypes.concat(symbols);
    includedCharacters.push(getRandom(symbols));
  }

  if (options.hasNumbers) {
    characterTypes = characterTypes.concat(numbers);
    includedCharacters.push(getRandom(numbers));
  }

  if (options.hasLowerCase) {
    characterTypes = characterTypes.concat(lowerCase);
   includedCharacters.push(getRandom(lowerCase));
  }

  if (options.hasUpperCase) {
    characterTypes = characterTypes.concat(upperCase);
    includedCharacters.push(getRandom(upperCase));
  }
  //Loops allow programs to perform repetitive tasks, such as iterating through an array, while adhering to the DRY principle (Don't Repeat Yourself). 
  //need a loop so all elements are not being repeated int he passsword
  // "for" inidactes it will loop through a block of code a number of times (var i = 0 executes one time before execution of the code block, (options.length) is defining the condition for executing the code block. is executed after the code block has been executed (++ is an increment operator) )
  for (var i = 0; i < options.length; i++) {
    var characterType = getRandom(characterTypes);

    result.push(characterType);
  }

  for (var i = 0; i <includedCharacters.length; i++) {
    result[i] = includedCharacters[i];
  }
  return result.join('');
}






var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
// the method addEventListener() works by adding a function, or an object that implements EventListener , to the list of event listeners for the specified event type on the EventTarget on which it's called
generateBtn.addEventListener("click", writePassword);


