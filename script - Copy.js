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
var promptUser = function() 
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

  var userChoices = charPool.join("");
  
  // Begin Password Selection 
  var getPass = function () {
    for (var i=0; length > i; i++) {
    pword += userChoices.charAt(Math.floor(Math.random() * userChoices.length));
  }
  }
  

  // Begin Verifying Password Matches Criteria
  var checkPass = function() {
   if (criteria.uppercase != upper1.test(pword)) {
     console.log("missing upper");
     generatePassword(length);
   }
   else if (criteria.lowercase != lower1.test(pword)) {
     console.log("missing lower");
     generatePassword(length);
   }
   else if (criteria.numbers != numb1.test(pword)) {
     console.log("missing numbers");
     generatePassword(length);
   }
   else if (criteria.symbols != symb1.test(pword)) {
     console.log("missing symbols");
     generatePassword(length);
   }
   else {
     console.log("valid");
     console.log(pword);
    
     return pword;   
    }
  }
  getPass();
  checkPass();
  
  console.log(criteria);
  console.log(upper1.test(pword));
  console.log(lower1.test(pword));
  console.log(numb1.test(pword));
  console.log(symb1.test(pword));
  console.log(pword)
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function() {
  var password = generatePassword(8);
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

