/* 
IIFE = Immediately Invoked Function Expressions
1. Write IIFE that replaces the first and the last element of the given array and prints out its
elements.
Input array: [4, 5, 11, 9]
Output array: [ 9, 5, 11, 4]
*/
"use strict";

var a = (function (numbers) {
  var newArray = [];

  for (var i = 0; i < numbers.length; i++) {
    if (i === 0) {
      newArray[i] = numbers[numbers.length - 1];
    } else if (i === numbers.length - 1) {
      newArray[i] = numbers[0];
    } else {
      newArray[i] = numbers[i];
    }
  }
  return newArray;
})([4, 5, 11, 9]);

console.log(a);
/*
2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
Input: 4 5
Output: 20
 */
("use strict");

var rectangleSurface = (function (a, b) {
  return a * b;
})(4, 5);

console.log(rectangleSurface);
/*
3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
number of replacements.
Input: prograMming
Output: progra**ing, 2* 3.
*/
("use strict");

var replaceLetter = (function (word) {
  var counter = 0;
  var newString = "";
  var output = "";
  for (var i = 0; i < word.length; i++) {
    if (word[i] === "m" || word[i] === "M") {
      counter++;
      newString += "*";
    } else {
      newString += word[i];
    }
  }

  return (output = newString + ", " + counter);
})("prograMming");

console.log(replaceLetter);
/* 
4.
 4. Write a function with parameters name and surname that returns a function that
suggests an email in the form name.surname@gmail.com.
Input: pera peric
Output: pera.peric@gmail.com
*/
("use strict");

var emailSuggestion = (function (name, surname) {
  function newEmail(newName, newSurname) {
    return newName + "." + newSurname + "@gmail.com";
  }
  return newEmail(name, surname);
})("barbara", "vasic");
/* 
5. Write a function that returns a function that calculates a decimal value of the given octal
number.
Input: 034
Output: 28
*/
function octalToDecimal(octalNum) {
  var str = octalNum + "";

  return parseInt(str);
}
console.log(octalToDecimal(034));

/*
6. Write a function that checks if a given string is valid password. The password is valid if it
is at least 6 characters long and contains at least one digit. The function should receive
two callbacks named successCallback and errorCallback that should be called in case
password is correct or invalid.
Input: JSGuru
Output: Your password is invalid!
Input: JSGuru123
Output: Your password is cool!
*/
("use strict");

var validPassword = function () {
  var output = "Your password is cool!";
  return output;
};

var invalidPassword = function () {
  var output = "Your password is invalid!";
  return output;
};

var checkPassword = function (password, successCallback, errorCallback) {
  var isValid = true;
  for (var i = 0; i < password.length; i++) {
    if (typeof password[i] !== "number" && password.length < 6) {
      isValid = false;
    }
  }

  if (isValid) {
    return successCallback();
  } else {
    return errorCallback();
  }
};
/*7. Write a function that filters elements of the given array so that they satisfy a condition
given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] */
("use strict");

function isOdd(number) {
  if (number % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

var filterElements = (function (someArray, checkIfOdd) {
  var newArray = [];

  for (var i = 0; i < someArray.length; i++) {
    if (checkIfOdd(someArray[i])) {
      newArray[newArray.length] = someArray[i];
    }
  }
  return newArray;
})([2, 8, 11, 4, 9, 3], isOdd);

console.log(filterElements);
