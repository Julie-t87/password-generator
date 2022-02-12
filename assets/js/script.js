// Assignment code here
var alphaLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var alphaUpper = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Z"]
var number = ["1", "2", "3","4","5","6","7","8","9","0"]
var specialCharacter = [ "$", "!", "%","*","&","@","?","+","<",">","-","_","~","[","]","{","}"]
var finalCharList = []
var finalPassword = ""

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


//prompt to confirm how many characters the user wants in their password
function generatePassword(){
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  if (confirmLength <= 7 || confirmLength >= 128){
    alert("passwrod length must be between 8-128 characters. Please try again")
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
  }

  
    var confirmLowercase = prompt("Click ok if you would like your password to include lowercase. Please enter 'yes' or 'no'");
  
    if (confirmLowercase === "yes" ){
      finalCharList = finalCharList.concat(alphaLower);
    }
    else if (confirmLowercase === "no" ){
      
    }
    else{
      console.log("try again")
    }
    var confirmUppercase = prompt("Click ok if you would like your password to include uppercase. Please enter  'yes' or 'no");

    if (confirmUppercase === "yes"){
      finalCharList = finalCharList.concat(alphaUpper);
    }
    else if (confirmUppercase == "no"){
     
    }
    else{
      console.log("try again")
    }
    var confirmNumber = prompt("Click ok if you would like your password to include a number. Please enter 'yes' or 'no'");
  
    if (confirmNumber=== "yes" ){
      finalCharList = finalCharList.concat(number);
    }
    else if (confirmNumber === "no" ){
    
    }
    else{
      console.log("try again")
    }
    var confirmSpecialCharacter = prompt("Click ok if you would like your password to include a special character. Please enter 'yes' or 'no'");
  
    if (confirmSpecialCharacter === "yes" ){
      finalCharList = finalCharList.concat(specialCharacter);
    }
    else if (confirmSpecialCharacter === "no" ){
      
    }
    else{
      console.log("try again")
    }
    console.log(finalCharList)

    //
    for (let i = 0; i < confirmLength; i++) {
      const randomElement = finalCharList[Math.floor(Math.random() * finalCharList.length)];
      finalPassword = finalPassword.concat(randomElement);
    }

    return finalPassword
};



