/*1.
 Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
E, I, O, and U.
*/
function countVowels(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":
        count++;
        break;
      case "e":
        count++;
        break;
      case "i":
        count++;
        break;
      case "o":
        count++;
        break;
      case "u":
        count++;
        break;
      case "A":
        count++;
        break;
      case "E":
        count++;
        break;
      case "I":
        count++;
        break;
      case "O":
        count++;
        break;
      case "U":
        count++;
        break;
    }
  }
  return count;
}
console.log(countVowels("vlAdan cupric vezba programiranje"));
/* 2. 
Write a function that combines two arrays by alternatingly taking elements.
[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
*/
function combineArrays(arrA, arrB) {
  var newArray = [];
  var longerArr;

  if (arrA > arrB) {
    longerArr = arrA;
  } else {
    longerArr = arrB;
  }
  for (var i = 0; i < longerArr.length; i++) {
    //if (i < arrA.length) {
    newArray[newArray.length] = arrA[i];
    // }
    // if (i < arrB.length) {
    newArray[newArray.length] = arrB[i];
    //   }
  }
  return newArray;
}
console.log(combineArrays(["a", "b", "c"], [1, 2, 3, 4, 5]));
/*3.
Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
*/
function changePlace(arr, n) {
  var newArr = [];
  for (var i = n; i < arr.length; i++) {
    newArr[newArr.length] = arr[i];
  }
  for (var j = 0; j < n; j++) {
    newArr[newArr.length] = arr[j];
  }
  return newArr;
}
console.log(changePlace([1, 2, 3, 4, 5, 6], 2));
/*4.  
Write a function that takes a number and returns array of its digits.
*/
("use strict");
function arrayOfDigits(number) {
  var newArray = [];
  var str = number + "";

  for (var i = 0; i < str.length; i++) {
    newArray[newArray.length] = str[i];
  }
  return newArray;
}
console.log(arrayOfDigits(5687));
/* 5.
Write a program that prints a multiplication table for numbers up to 12
*/
function multiplTable(n) {
  var result = "";
  for (var i = 1; i <= n; i++) {
    result = "\n"; //tajna je u znaku jednako bez plusa
    for (var j = 1; j <= n; j++) {
      result += i * j + " ";
    }
    console.log(result);
  }
}
var n = 12;
console.log(multiplTable(n));
// simple funnctions
function table(x) {
  var alertBody = "";
  for (var i = 1; i < x; i++) {
    alertBody += x + "*" + i + "=" + x * i + "\n";
  }
  return alertBody;
}
var n = 12;
console.log(table(n));
// third way
function mulT(n) {
  for (var i = 1; i <= n; ++i) {
    for (var j = 1; j <= n; ++j) {
      console.log(i * j + "  ");
    }
    console.log();
  }
}
var n = 12;
console.log(mulT(n));

/* 6.
Write a function to input temperature in Centigrade and convert to Fahrenheit.
*/
function centigradeToFahrenheit(temp) {
  var fahrTemp = 1;
  fahrTemp = temp * 1.8 + 32;
  return fahrTemp;
}
console.log(centigradeToFahrenheit(30));
/* 7. 
Write a function to find the maximum element in array of numbers. Filter out all non-number elements.
*/
function findMax(array) {
  var max = array[0];
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (element > max && typeof element === "number") {
      max = element;
    }
  }
  return max;
}
var array = [2, 5, "65", "7", 8, 12, -4, 5, 45];
console.log(findMax(array));
/* 8. 
Write a function to find the maximum and minimum elements. Function returns an array.
*/
function findMaxMin(array) {
  var newArr = [];
  var max = array[0];
  var min = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > max && typeof array[i] === "number") {
      newArr[0] = array[i];
    }
    if (array[i] < min && typeof array[i] === "number") {
      newArr[1] = array[i];
    }
  }
  return newArr;
}
var arr = [2, 5, "65", "7", 8, 12, -4, 5, 45];
console.log(findMaxMin(arr));
/* 9.
Write a function to find the median element of array
*/
function calcMedian(array) {
  const { length } = array;

  if (length < 1) return 0;

  //sort array asc
  array.sort((a, b) => a - b);

  if (length % 2) {
    //length of array is odd
    return array[(length + 1) / 2 - 1];
  } else {
    //length of array is even
    return 0.5 * [array[length / 2 - 1] + array[length / 2]];
  }
}

console.log(calcMedian([1, 2, 2, 5, 6]));
console.log(calcMedian([1, 2, 2, 5, 6, 7]));
console.log(calcMedian([13, 9, 8, 15, 7]));
console.log(calcMedian([1, 4, 6, 3]));
console.log(calcMedian([5, 1, 11, 2, 8]));

/*10.
Write a function to find the element that occurs most frequently.
*/
function frequency(arr) {
  var mostF = arr[0];
  var occurs = 0;
  for (var i = 0; i < arr.length; i++) {
    var counter = 0;
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter++;
      }
    }
    if (occurs < counter) {
      mostF = arr[i];
      occurs = counter;
    }
  }
  return mostF;
}
var a = [8, 4, 1, 2, 7, 5, 1, 1, 1, 2, 5];
console.log(frequency(a));

/* 11.
Write a function to find and return the first, middle and last element
of an array if the array has odd number of elements. If number of elements is even,
 return just the first and the last. In other cases, input array should be returned.
 */

var firstLast = function (a) {
  var medianIndex = 0;
  if (a.length % 2 == 1) {
    medianIndex = (a.length - 1) / 2;
    return a[0] + " " + a[a.length - 1] + " " + a[medianIndex];
  } else {
    return a[0] + " " + a[a.length - 1];
  }
};

console.log(firstLast([1, 2, 3, 4, 5, 6]));
//second way
var a = [2, 1, -4, 3, "a", "vd", 3, -1, 4];

var firstMiddleLast = function (n) {
  var b = [];
  if (n.length % 2 == 0) {
    b[0] = n[0];
    b[1] = n[n.length - 1];
  } else {
    b[0] = n[0];
    b[1] = n[parseInt(n.length / 2)];
    b[2] = n[n.length - 1];
  }

  return b;
};

console.log(firstMiddleLast(a));
/*12.  
Write a function to find the average of N elements.Make the function flexible to receive dynamic number or parameters. */

var avgOfNElements = function () {
  var sum = 0;
  var avg;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  avg = sum / arguments.length;
  return avg;
};

console.log(avgOfNElements(45, 5, 10, 1, 4));

/* 13.
 Write a function to find all the numbers greater than the average.
*/
function greaterNumber(array) {
  var arr = [];

  var sum = 0;

  var a;
  var average;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  average = sum / array.length;

  for (var j = 0; j < array.length; j++) {
    if (array[j] > average) arr[arr.length] = array[j];
  }
  return arr;
}
var a = [8, 4, 1, 2, 7, 5, 1, 1, 1, 2, 5];
console.log(greaterNumber(a));
/* 14.
The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40 */
var bmi = function (w, h) {
  result = w / (h * h);

  if (result < 15) {
    console.log("Starvation");
  } else if (result < 17.5 && result > 15) {
    console.log("Anorexic");
  } else if (result > 17.5 && result < 18.5) {
    console.log("Underweight");
  } else if (result > 18.5 && result < 25) {
    console.log("Ideal");
  } else if (result > 25 && result < 30) {
    console.log("Overweight");
  } else if (result > 30 && result < 40) {
    console.log("Obese");
  } else if (result > 40) {
    console.log("Morbidly");
  }
  return result;
};
bmi(86, 1.93);
/*
15.
 Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:
For example the list["Hello", "World", "in", "a", "frame"] gets printed as:
* Hello *
* World *
* in    *
* a     *
* frame *
********* */

var list = ["Hello", "World", "in", "a", "frame"];

var rectFrame = function (l) {
  a = "";
  k = 0;
  max = l[0].length;
  for (var i = 1; i < l.length; i++) {
    if (l[i].lenght > max) {
      max = l[i].length;
    }
  }
  for (var i = 0; i < l.length; i++) {
    for (var j = 0; j <= max + 1; j++) {
      if (j == 0 || j == max + 1) {
        a += " * ";
      } else if (typeof l[i][k] == "undefined") {
        a += " ";
      } else {
        a += l[i][k];
        k++;
      }
    }
    a += "\n";
    k = 0;
  }
  return a;
};

console.log(rectFrame(list));
