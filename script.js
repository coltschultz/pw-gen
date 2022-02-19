// Assignment code here




var generatePassword = function(length) {
  const charPool = [];
  var pword = '';
  var validated='';
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var numb = '1234567890';
  var symb = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const upper1 = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/;
  const lower1 = /[abcdefghijklmnopqrstuvwxyz]/;
  const numb1 = /[1234567890]/;
  var symb1 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  var criteria = {
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  }

// Begin User Prompts

    var length = prompt('How long do you want your password to be? (Between 8 and 128 Characters)');

    if (length >= 8 && length <= 128) {

    if (confirm("Do you want uppercase letters? Ok for Yes, Cancel for No.")) {
      charPool.push(upper);
      criteria.uppercase = true;
    }

    if (confirm("Do you want lowercase letters? Ok for Yes, Cancel for No.")) {
      charPool.push(lower);
      criteria.lowercase = true;
    }

    if (confirm("Do you want numbers? Ok for Yes, Cancel for No.")) {
      charPool.push(numb);
      criteria.numbers = true;      
    }

    if (confirm("Do you want symbols (!@#$%^&*)? Ok for Yes, Cancel for No.")) {
      charPool.push(symb);
      criteria.symbols = true;
    }
  }
  else {
    alert('Invalid entry');
  }
  var userChoices = charPool.join("");
  
// Begin Password Selection 
  var getPass = function() {
    pword = '';
    for (var i=0; length > i; i++) {
    pword += userChoices.charAt(Math.floor(Math.random() * userChoices.length));
  }
  
  
  console.log(pword);

// Begin Verifying Password Matches Criteria
  
   if (criteria.uppercase != upper1.test(pword)) {
     console.log("missing upper");
     getPass(length);
   }
   else if (criteria.lowercase != lower1.test(pword)) {
     console.log("missing lower");
     getPass(length);
   }
   else if (criteria.numbers != numb1.test(pword)) {
     console.log("missing numbers");
     getPass(length);
   }
   else if (criteria.symbols != symb1.test(pword)) {
     console.log("missing symbols");
     getPass(length);
   }
   else {
     console.log("valid");
     console.log(pword);
    
     return pword;   
    }
  }

  getPass();
//  console.log(criteria);
//  console.log(upper1.test(pword));
//  console.log(lower1.test(pword));
//  console.log(numb1.test(pword));
//  console.log(symb1.test(pword));
//  console.log(pword)
  return pword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function() {
  var password = generatePassword(length);
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

