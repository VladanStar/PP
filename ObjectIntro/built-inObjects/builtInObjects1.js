/* ------------------  1  ------------------*/
// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]
/* 
logika duplirati svaki element sa push element, element u novi niz
*/

var duplicateElement = function (input) {
  var output = [];

  input.forEach(function (element) {
    output.push(element, element);
  });
  return output;
};

console.log(duplicateElement([2, 4, 7, 11, -2, 1]));
/* -----------------  2  --------------------------*/
// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

function removeDuplicate(input) {
  var copy = input.slice();
  var output = [];
  for (var i = 0; i < copy.length; i++) {
    if (output.indexOf(copy[i]) === -1) {
      output.push(copy[i]);
    } else {
      continue;
    }
  }
  return output.sort(function (a, b) {
    return a - b;
  });
}
console.log(removeDuplicate([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

/*   -----------------second way ----------------*/
/*****   2 drugi nacin   ****/

var removeDuplicate = function (arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (newArr[newArr.length - 1] !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(removeDuplicate([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));
/* ---------------- 3.a  -------------------------*/
// Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true
function hasOddNumber(input) {
  var element = input.find(function (elm) {
    return elm % 2 !== 0;
  });
  if (element) {
    return true;
  } else {
    return false;
  }
}
console.log(hasOddNumber([8, 2, 2, 21, 6]));

// 3.b
// Write a function that counts the number of elements less than the middle element.
//If the given array has an even number of elements, print out an error message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

var lessThanMidd = function (arr) {
  if (arr.length % 2 === 0) {
    return "Error";
  }
  var count = 0;
  var middle = Math.round(arr.length / 2);
  for (var i = 0; i < arr.length; i++) {
    if (middle > arr[i]) {
      count++;
    }
  }
  return count;
};
console.log(lessThanMidd([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

/* ------------------------  4 ---------------------*/
// Write a function that finds the smallest element of a given array.
//The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }

var findSmallest = function (arr) {
  var min = arr[0];
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  var obj = { minValue: min, lastMinIndex: arr.lastIndexOf(min) };
  return obj;
};
console.log(findSmallest([1, 4, -2, 11, 8, 1, -2, 3]));

//  5.a
//Write a function that finds all the elements in a given array less than a given element.

function lessThan(arr) {
  var i = 0;
  var newArray = [];
  var index = parseInt(arr.length / 2);
  for (i in arr) {
    if (arr[i] < arr[index]) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
console.log(lessThan([2, 3, 87, 5, 7, 9, 5, 3], 5));
/* 5.b
b. Write a function that finds all the elements in a given array that start with the “pro”
substring. The function should be case insensitive.
Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
Output: [’Programming’, ‘product’]
*/
var findWord = function (arr) {
  var b = "pro";
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (b === arr[i].toLowerCase().slice(0, 3)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(findWord(["javascript", "product", "Programming"]));
/*5.c
c. Write a function that expects an array and a callback function that filters out
some of the elements. Use functions defined in a) or b) to test it.
*/
//poenta je funkcija da se prosledi i callback funkcija da se pozove da bi funkcija radila
function startWith(a, b) {
  result = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i].toUpperCase().indexOf(b.toUpperCase()) === 0) {
      result.push(a[i]);
    }
  }
  return result;
}

console.log(startWith(["JavaScript", "Programming", "fun", "product"], "pro"));

function exercise5(a, b, callback) {
  return callback(a, b);
}

console.log(exercise5(["Oki", "JAva", "petaK"], "Java", startWith));
/*6
Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
[
{name: ‘apples’, price: 100},
{name: ‘milk’, price: 80},
{name:’bananas’, price: 150}
]
Write a function that calculates the total price of your shopping list.
Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals.
Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase.
*/

function calculateSumPrice(a) {
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    sum += a[i].price;
  }
  return sum;
}

var result = calculateSumPrice([
  { name: "apples", price: 100 },
  { name: "milk", price: 80 },
  { name: "bananas", price: 150 },
]);
console.log(result);

//a.
var totalPrice = function (list) {
  var sum = 0;
  for (var i = 0; i < list.length; i++) {
    //for in se koristi u objektu
    sum += list[i].price;
  }
  return sum;
};
console.log(
  totalPrice([
    {
      name: "apples",
      price: 100,
    },
    {
      name: "milk",
      price: 80,
    },
    {
      name: "bananas",
      price: 150,
    },
  ])
);

//b.

var averagePrice = function (list) {
  var sum = 0;
  for (var i = 0; i < list.length; i++) {
    //for in se koristi u objektu
    sum += list[i].price;
  }

  var numberOfProduct = list.length;
  var averagePrice = sum / numberOfProduct;
  //    var averagePrice = sum / list.length ;
  return averagePrice;
};

console.log(
  averagePrice([
    {
      name: "apples",
      price: 100,
    },
    {
      name: "milk",
      price: 80,
    },
    {
      name: "bananas",
      price: 150,
    },
  ])
);

//c.

var mostExpansive = function (list) {
  var price = 0;
  for (var i = 0; i < list.length; i++) {
    price += list[i].price; //problem

    if (price[i] < list[i].price) {
      price[i] = list[i].price;
    }
  }
  return "Expansive = " + price;
};
console.log(
  mostExpansive([
    {
      name: "apples",
      price: 100,
    },
    {
      name: "milk",
      price: 80,
    },
    {
      name: "bananas",
      price: 150,
    },
  ])
);
/*     7.
a. Write a function that checks if a given string is written in all capitals.
b. Write a function that checks if a given string contains any digits.
c. Write a function that checks if a given string is a valid hexadecimal color.
d. Write a function that checks if a given number belongs to the interval from 1900
to 2018.
e. Write a function named validator that returns an object with properties
stringValidator, passwordValidator, colorValidator, and yearValidator referencing
the functions from a) to d).
*/
// 7.zadatak a)
// Write a function that checks if a given string is written in all capitals.

var str = "VLADAN";

var allCapitals = function (s) {
  if (s === s.toUpperCase()) {
    return true;
  } else {
    return false;
  }
};

console.log(allCapitals(str));

// 7.zadatak b)
// Write a function that checks if a given string contains any digits.
var str1 = "vladan1cupric";

var containDigit = function (s) {
  var regExp = /[0-9]/;

  if (s.match(regExp)) {
    return true;
  } else {
    return false;
  }
};

console.log(containDigit(str1));

// 7.zadatak c)
// Write a function that checks if a given string is a valid hexadecimal color.
str2 = "#fff";

var validHexDec = function (s) {
  var regExp = /[0-9A-Fa-f]{6}/g;
  var regExp1 = /[0-9A-Fa-f]{3}/g;
  if ((s[0] = ("#" && regExp.test(s.slice(1))) || regExp1.test(s.slice(1)))) {
    return true;
  } else {
    return false;
  }
};
console.log(validHexDec(str2));

// 7. zadatak d)
// Write a function that checks if a given number belongs to the interval from 1900 to 2018.

var nmb = 1991;

var belongInterval = function (n) {
  if (typeof n == "number" && n > 1900 && n < 2018) {
    return true;
  } else {
    return false;
  }
};

console.log(belongInterval(nmb));

// 7. zadatak e)
// Write a function named validator that returns an object with properties stringValidator,
//passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

function validator(s, a, b, c, d) {
  return (x = {
    stringValidator: a(s),
    passwordValidator: b(s),
    colorValidator: c(s),
    yearValidator: d(s),
  });
}
var str4 = "#00ff23";
console.log(
  validator(str4, allCapitals, containDigit, validHexDec, belongInterval)
);
// 8.Write a function that calculates a number of days to your birthday.
// Input: 25 February
// Output: 5 days
var bday = new Date("March 11 2021");

var calculate = function (bday) {
  var x = new Date();
  var z = bday.getTime() - x.getTime();
  var d = Math.round(z / 1000 / 3600 / 24);
  return d;
};
console.log(calculate(bday));

//9. Write a function that for a given departure and arrival time calculates the time the trip takes.
// 	Input: 8:22:13 11:43:22
// 	Output: 3 hours 21 minutes 8 seconds

var time1 = Date.parse("16 May 2021 08:22:13");

var time2 = Date.parse("16 May 2021 11:43:22");
var arrival = function (time1, time2) {
  var milisec = time2 - time1;
  var sec = milisec / 1000;
  var sec1 = sec % 60;
  var min = (sec - sec1) / 60;
  var min1 = ((sec - sec1) / 60) % 60;
  var h = (min - min1) / 60;
  return h + ":" + min1 + ":" + sec1;
};

console.log(arrival(time1, time2));

//10. a. Write a constructor function that creates points in the space.
//Each point in the space has its own x, y, and z coordinate.For example, (3, 5, 1) can the point in the space.
function Points(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

var point1 = new Points(3, 5, 1);
var point2 = new Points(4, 2, 8);
console.log(point1, point2);

//10. b. Write a function that calculates the distance between to points in the space.

var distance = function (p1, p2) {
  var d = Math.sqrt(
    Math.pow(p1.x - p2.x, 2) +
      Math.pow(p1.y - p2.y, 2) +
      Math.pow(p1.z - p2.z, 2)
  );
  return d;
};

console.log(distance(point1, point2));

//11. a. Write a function that generates a random integer value between 5 and 20.

var a = 5;
var b = 20;

var a1 = 50;
var b1 = 100;

var generate = function (n1, n2) {
  var max;
  var min;

  if (n1 > n2) {
    max = n1;
    min = n2;
  } else {
    max = n2;
    min = n1;
  }
  var c = Math.round((max - min) * Math.random() + min);
  return c;
};

console.log(generate(a, b));
console.log(generate(a1, b1));

//11. b. Write a function that generates a random integer value between 50 and 100.
//11. c. Write a function which expects a number and a callback factory function and returns an array of numbers produced by the factory function.

var arrayOfNum = function (n, func) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr.push(func(a, b));
  }
  return arr;
};
console.log(arrayOfNum(4, generate));

/*12. Write a function that shuffles the elements of a given array.

Input: [3, 6, 11, 2, 9, 1]

Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)*/
// JavaScript Program to shuffle a given array

// A function to print an array

var array = [3, 6, 11, 2, 9, 1];
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
console.log(shuffleArray(array));
