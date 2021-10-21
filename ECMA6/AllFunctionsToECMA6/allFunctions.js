/*1. *Write a function to check whether the `input` is a string or not.
"My random string" -> true
12 -> false*/

let result = (string) => (typeof string === "string" ? true : false);
console.log(result("My random string"));

/*2. Write a function to check whether a string is blank or not.
"My random string" -> false
" " -> true
12 -> false
false -> false*/

let isBlankString = (string) => (string === " " ? true : false);
console.log(isBlankString(" "));

/*3. Write a function that concatenates a given string n times (default is 1).
    "Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"*/

let concatString = (string, p = 1) => {
  let stringN = "";
  for (let i = 0; i < p; i++) {
    stringN += string;
  }
  return stringN;
};
console.log(concatString("Ha ha", "3"));

/*4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2*/

let countString = (string, p) => string.split(p).length - 1;
console.log(countString("My random string", "n"));

/*5. Write a function to find the position of the first occurrence of a character in a string.
The result should be in human numeration form.If there are no occurrences of the character, the function should return -1.*/

let firstOcc = (string, p) => {
  let index = string.indexOf(p);
  return index >= 0 ? index + 1 : -1;
};
console.log(firstOcc("My random string", "f"));

/* 6. Write a function to find the position of the last occurrence of a character in a string.
The result should be in human numeration form.If there are no occurrences of the character, function should return -1.*/

let lastOcc = (string, n) => {
  let index = string.lastIndexOf(n);
  return index >= 0 ? index + 1 : -1;
};
console.log(lastOcc("My random string", "n"));

/* 7. Write a function to convert string into an array.Space in a string should be represented as “null” in new array.
"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]
*/
let convert = (string) => Array.from(string);
console.log(convert("My random string"));

/*8. Write a function that accepts a number as a parameter and checks if the number is prime or not.
    Note: A prime number(or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.*/

let primeNumber = (number) => {
  if (number === 1) {
    return false;
  } else if (number === 2) {
    return true;
  } else {
    for (let i = 0; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
};
console.log(primeNumber(6));

/* 9. Write a function that replaces spaces in a string with provided separator.If separator is not provided, use “-” (dash) as the default separator.
    "My random string", "_" -> "My_random_string"
"My random string", "+" -> "My+random+string"
"My random string" -> "My-random-string"
*/
let separator = (str, s = "-") => (str = str.replace(/\s+/g, s));
console.log(separator("My random string"));

/*10. Write a function to get the first n characters and add “...” 
at the end of newly created string.*/

let replaceDots = (string, d) => string.substring(0, d) + "...";
console.log(replaceDots("My random string", 9));

/*11. Write a function that converts an array of strings into an array of numbers.Filter out all non - numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
*/

let array = ["1", "21", undefined, "42", "1e+3", Infinity, 23];
let convertsArray = array.filter(function (element) {
  return !isNaN(element) && isFinite(element);
});
let niz = convertsArray.map(function (element) {
  return parseFloat(element);
});
console.log(niz);

/*12. Write a function to calculate how many years there are left until retirement based on the year of birth.
Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.*/

let calculateAge = (yearsOfBirth) => parseFloat(2021 - yearsOfBirth);
let isInReintrement = (calculateAge, gender = "m") => {
  gender === "m" ? calculateAge >= 65 : calculateAge >= 60;
};
let reintrement = (calculateAge, gender = "m") => {
  if (calculateAge > 65) {
    return "person is in retirement";
  } else if (gender === "m") {
    return 65 - calculateAge;
  } else {
    return 60 - calculateAge;
  }
};
console.log(reintrement(calculateAge(1980), "m"));

/* 13. Write a function to humanize a number(formats a number to a human - readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th
Hint: num % 100 >= 11 && num % 100 <= 13
*/
let humanizeNumber = (num) => {
  if (typeof num === "undefined") {
    return;
  }
  if (num % 100 >= 11 && num % 100 <= 13) {
    return num + "th";
  }
  switch (num % 10) {
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
  }
  return num + "th";
};
console.log(humanizeNumber());
console.log(humanizeNumber(1));
console.log(humanizeNumber(8));
console.log(humanizeNumber(301));
console.log(humanizeNumber(402));

/* 14. 
Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
*/
let findElement = (array, n) => {
  return array.includes(n) ? true : false;
};
array = [5, -4.2, 18, 7];
console.log(findElement(array, 7));
/*
15. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/
let multiplies = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= 0) {
      newArray[i] = array[i];
    } else {
      newArray[i] = array[i] * 2;
    }
  }
  return newArray;
};
console.log(multiplies([-3, 11, 5, 3.4, -8]));

/*16. 
Write a program that finds the minimum of a given array and prints out its value and index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

let smallest = (array) => Math.min(...array);

const numbers = [2, 4, 9, -2, 0, 16, 24];
console.log(smallest(numbers));
let broj = smallest(numbers);
console.log(numbers.indexOf(broj));

/* 17. Write a program that finds the second largest number and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2 */

let secondLargest = (array) => {
  array.sort();
  return array[array.length - 2];
};
console.log(secondLargest([4, 2, 2, -1, 6]));

/* 18. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16*/

let sumPositive = (array) => {
  let sum = 0;
  array.filter(function (element) {
    if (element > 0) {
      sum += element;
    }
  });
  return sum;
};
console.log(sumPositive([3, 11, -5, -3, 2]));

/* 19. Write a program that checks if a given array is symmetric.An array is symmetric if it can be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.
*/
let isSymmetric = (array) => {
  let arrayR = array.reverse();
  return array === arrayR ? true : false;
};
console.log(isSymmetric([2, 4, -2, 7, -2, 4, 2]));

/* 20. Write a program that intertwines two arrays.You can assume the arrays are of the same length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/

let array1 = [4, 5, 6, 2],
  array2 = [3, 8, 11, 9],
  result = [],
  i,
  l = Math.min(array1.length, array2.length);

for (i = 0; i < l; i++) {
  result.push(array1[i], array2[i]);
}
//result.push(...array1.slice(l), ...array2.slice(l));
console.log(result);

/* 21. 
Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/
let concatArrays = (arr1, arr2) => {
  return arr1.concat(arr2);
};
console.log(concatArrays([4, 5, 6, 2], [3, 8, 11, 9]));

/*22. 
Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/
let delElem = (array, e) => {
  return array.filter(function (element) {
    return element != e;
  });
};
console.log(delElem([4, 6, 2, 8, 2, 2], 2));

/*23. 

Write a program that inserts a given element e 
on the given position p in the array a.If the value 
of the position is greater than the array length, print the error message.
   Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/
let insertElement = (array, e, p) => {
  array.splice(p, 0, e);
  console.log(array);
};
let e = 78,
  p = 3,
  array = [2, -2, 33, 12, 5, 8];
insertElement(array, e, p);

/*24.
Write a function that checks if a given number is odd.
*/

let isOdd = (n) => (n % 2 === 1 ? "odd" : "even");
console.log(isOdd(23));

/*25. 
Write a function that checks if a given number is a three digit long number.
*/
let checkingNumber = (number) => {
  let string = number.toString();
  return string.length > 3 ? "it is long" : "is not";
};
console.log(checkingNumber(2345));

/*26. 
Write a function that calculates an arithmetic mean of four numbers.
*/
let arithmeticMean = (number) => {
  let string = number.toString();
  let array = string.split("");
  let len = array.length;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += parseInt(array[i]);
  }
  let avg = sum / len;
  return avg;
};
console.log(arithmeticMean(3456));

/*27. 
Write a function that draws a square of a given size.For example,  if the size of square is 5 the function should draw: 
*****
*    *
*    *
*    *
*****
*/
let square = (parameter) => {
  let firsAndLastRows = "";
  let middleRows = "";
  let starsRow = "";
  for (let i = 0; i < parameter; i++) {
    firsAndLastRows += " *";
  }
  firsAndLastRows += "\n";
  for (let j = 0; j < parameter; j++) {
    if (j === 0 || j === parameter - 1) {
      middleRows += " *";
    } else middleRows += "  ";
  }
  middleRows += "\n";
  for (let k = 0; k < parameter; k++) {
    if (k === 0 || k === parameter - 1) {
      starsRow += firsAndLastRows;
    } else starsRow += middleRows;
  }
  return starsRow;
};
let output = square(5);
console.log(output);

/*
28.
Write a function that draws a square of a given size.For example,  if the size of square is 5 the function should draw: 
*
**
***
****
*****
*/
let square = (parameter) => {
  let stars = "";
  let stars1 = "";
  for (let i = 0; i < parameter; i++) {
    stars += " *";
    console.log(stars);
  }
};
let output = square(5);

/*29. 
Write a function that draws a horizontal chart representing three given values.For example, if values are 5, 3, and 7, the function should draw:
* * * * *
* * *
* * * * * * *
*/

let square = (n1, n2, n3) => {
  let starsRow1 = "";
  let starsRow2 = "";
  let starsRow3 = "";
  for (let i = 0; i < n1; i++) {
    starsRow1 += " *";
    if (i === n1) {
      starsRow1 += "\n";
    }
  }
  for (let j = 0; j < n2; j++) {
    starsRow2 += " *";
    if (j === n2) {
      starsRow2 += "\n";
    }
  }
  for (let k = 0; k < n3; k++) {
    starsRow3 += " *";
    if (k === n3) {
      starsRow3 += "\n";
    }
  }
  console.log(starsRow1);
  console.log(starsRow2);
  console.log(starsRow3);
};
let output = square(5, 3, 7);
console.log(output);

/*30.
Write a function that calculates a number of digits of a given number.
*/

let numberDig = (number) => {
  let numberString = number + "";
  return numberString.length;
};
console.log(numberDig(100000));

/*31.
Write a function that calculates a number of appearances of a given number in a given array.
*/

let calculate = (number, parameter) => {
  let counter = 0;
  let numberString = "" + number;
  let parameterString = "" + parameter;
  for (let i = 0; i < numberString.length; i++) {
    if (numberString[i] == parameterString) {
      counter++;
    }
  }
  return counter;
};
console.log(calculate(3213324324, 5));

/*32.
Write a function that calculates the sum of odd elements of a given array.
*/

let sum = (array) => {
  let newArray = array.filter(function (element, array) {
    return element % 2 !== 0;
  });
  return newArray.reduce((total, arg) => total + arg, 0);
};
console.log(sum([1, 2, 3, 4, 5]));

/*33. 
Write a function that calculates the number of appearances of a letter a in a given string.
Modify the function so it calculates the number of both letters a and A.
*/

let = calculateLetter = (string, upper, lower) => {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (lower === string[i] || upper === string[i]) {
      counter++;
    }
  }
  return counter;
};
console.log(calculateLetter("blaBlablaAAA", "B", "b"));
////

/*34. 
Write a function that concatenates a given string given number of times.
For example, if “abc” and 4 are given values, the function prints out abcabcabcabc.
*/
let concatNum = (string, n) => {
  let newString = "";
  for (let i = 0; i < n; i++) {
    newString += string;
  }
  return newString;
};
console.log(concatNum("vladan cupric ", 6));

/*35. 
Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.
*/
let vowelCount = (str1) => {
  {
    var vowel_list = "aeiouAEIOU";
    var vcount = 0;

    for (var x = 0; x < str1.length; x++) {
      if (vowel_list.indexOf(str1[x]) !== -1) {
        vcount++;
      }
    }
    return vcount;
  }
};
console.log(vowelCount("The quick brown fox"));

/*36. 
Write a function that combines two arrays by alternatingly taking elements.
[‘a’, ’b’, ’c’], [1, 2, 3] -> [‘a’, 1, ’b’, 2, ’c’, 3]
*/

let array1 = ["a", "b", "c"],
  array2 = [1, 2, 3],
  result = [],
  i,
  l = Math.min(array1.length, array2.length);

for (i = 0; i < l; i++) {
  result.push(array1[i], array2[i]);
}
//result.push(...array1.slice(l), ...array2.slice(l));
console.log(result);

/*37. 
Write a function that rotates a list by k elements.
For example[1, 2, 3, 4, 5, 6] rotated by two becomes[3, 4, 5, 6, 1, 2]
*/

const rotate = (arr, count = 1) => {
  return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
};
const arr = [1, 2, 3, 4, 5];
console.log(rotate(arr, 2)); // [3, 4, 5, 1, 2]

/* 
38.
Write a program that prints a multiplication table for numbers up to 12.*/

let multipTable = (a) => {
  let i;
  let j;
  str = "";
  for (i = 1; i < a; i++) {
    for (j = 1; j < a; j++) {
      str += " " + i * j;
    }
    str = str + "\n";
  }
  return str;
};
console.log(multipTable(13));

/*39. 
Write a function to input temperature in Centigrade and convert to Fahrenheit.
*/

let convertC = (centigrade) => (fahrenheit = (centigrade * 9) / 5 + 32);
console.log(convertC(10));

/*40.
Write a function to find the maximum element in array of numbers.Filter out all non - number elements.
*/

let filterHighestNumber = (array) => {
  let isNumber = array.filter(function isNumber(value) {
    return typeof value === "number" && !isNaN(value);
  });
  console.log(isNumber);
  return Math.max(...isNumber);
};
var array = [
  false,
  5,
  54,
  56,
  876,
  678,
  "e,",
  "blab",
  "45345",
  NaN,
  undefined,
  455445544554,
];
console.log(filterHighestNumber(array));

/* 41. 
Write a function to find the maximum and minimum elements.Function returns an array.
*/
let minMax = (array) => {
  let arr = [];
  let max = Math.max(...array);
  arr.push(max);
  let min = Math.min(...array);
  arr.push(min);
  return arr;
};
console.log(minMax([5, 54, 56, 876, 678, 455445544554]));

/*42. 
Write a function to find the median element of array.
*/
let midElem = (array) => {
  let middle = (array.length - 1) / 2;
  return middle % 2 === 0 ? array[middle] : "no middle element";
};
console.log(midElem([false, 5, 54, 54, 56546]));

/*43. 
Write a function to find the element that occurs most frequently.
*/
const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let mf = 1;
let m = 0;
let item;
for (let i = 0; i < arr1.length; i++) {
  for (let j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) m++;
    if (mf < m) {
      mf = m;
      item = arr1[i];
    }
  }
  m = 0;
}
console.log(`${item} ( ${mf} times ) `);

/* 44. 
Write a function to find and return the first, middle and last element of an array if the array has odd number of elements.
If number of elements is even, return just the first and the last.In other cases(empty array), input array should be returned.
*/
let returnElementsOfArray = (array) => {
  let result = [];
  firstElement = array[0];
  lastElement = array[array.length - 1];
  let middleValue = (array.length - 1) / 2
  if (array.length % 2 === 0) {
      return result = [firstElement, lastElement];
  }
  for (let i = 0; i < array.length; i++) {
      let element = array[i]
      if (array.length % 2 === 1) {
          if (i === middleValue) {
              let middleElement = element;
              return result = [firstElement, middleElement, lastElement]
          }
      }
  }
}
let array = [1, 2, 3, 4, 5, 6,6]
let output = returnElementsOfArray(array)
console.log(output);

/*45. 
Write a function to find the average of N elements.Make the function flexible to receive dynamic number or parameters.
*/
let average = (array) =>(array.reduce((total, arg) => total + arg, 0))/array.length;
console.log(average([1, 2, 3, 4, 5]));

/*46.
Write a function to find all the numbers greater than the average.
*/
let greater =array=> {
let average =(array.reduce((total, arg) => total + arg, 0))/array.length;
let ar= array.filter(element => element>average);
return ar;
}
console.log(greater([1,2,4,3,6,5]));

/* 46.
The body mass index(BMI) is the ratio of the weight of a person(in kilograms) to the square of the height(in meters).Write a function that 
takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40
*/

function bmi(weight, height) {
  var bmi = weight / (height * height)
  console.log(bmi)
  switch (true) {
      case (bmi < 15):
          console.log("Anorexic");
          break;
      case (bmi < 17.5 && bmi > 15):
          console.log("Starvation");
          break;
      case (bmi > 18.5 && bmi < 25):
          console.log("Ideal");
          break;
      case (bmi > 25 && bmi < 30):
          console.log("Overweight");
          break;
      case (bmi > 30 && bmi < 40):
          console.log("Obese");
          break;
      case (bmi > 40):
          console.log("Morbidly");
          break;
      default:
          console.log("bmi not in scope");
  }
}
var weight = 80;
var height = 1.80



/* 47. 
Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:
For example the list["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
*/

let printHelloWorld = array => {
  let largest = [];
  let counter = 0;
  let firsAndLastRows = [];
  let middleRows = [];
  let square = [];
  for (let i = 0; i < array.length; i++) {
      if (array[i].length > counter) {
          counter = array[i].length;
          largest = array[i]
      }
  }
  for (let i = 0; i < largest.length; i++) {
      if (i === 0 || i === counter - 1) {
          firsAndLastRows += '**';
      }
      firsAndLastRows += '*';
  }
  firsAndLastRows += '\n'
  for (let i = 0; i < array.length; i++) {
      let emptyStringArray = '';
      if (array[i].length < counter) {
          let empty = counter - array[i].length
          for (let j = 0; j < empty; j++) {
              emptyStringArray += ' '
          }
      }
      middleRows += '* ' + array[i] + emptyStringArray + ' *'
      middleRows += '\n'
  }
  square = firsAndLastRows;
  square += middleRows;
  square += firsAndLastRows;
  return square
}
var array = ["Hello", "World", "in", "a", "frame"];
var output = printHelloWorld(array)
console.log(output);

/*48.
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a "#" character. The characters should form a chess board.
Passing this string to console.log should show something like this:
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
*/

let chessBoard= (parameter) =>{
  let chessBoardRow = '';
  let element = ''
  let counter = 0;
  for (let i = 0; i < parameter * parameter; i++) {
      if (counter % 2 === 0) {
          (i % 2 === 0) ? element = ' ' : element = "#";
          chessBoardRow += element;
      }
      if (counter % 2 === 1) {
          (i % 2 === 1) ? element = '#' : element = " ";
          chessBoardRow += element;
      }
      if (i % parameter === 0) {
          chessBoardRow += '\n'
      }
      counter++;
    }
    return chessBoardRow;
  }
  console.log(chessBoard(12));