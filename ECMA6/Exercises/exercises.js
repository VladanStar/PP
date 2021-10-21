//1.  Write a function that capitalizes the first letter of each string argument it receives.
// Function arguments: ‘hello’, ‘there’, ‘ES’, 6
// Output: ‘Hello’, ‘there’, ‘ES’

"use strict";

let captLetter = (...args) => {
  let checkIfString = (x) => {
    return typeof x == "string";
  };

  let b = args.filter(checkIfString);

  b = b.map((item) => {
    return item[0].toUpperCase() + item.slice(1);
  });

  return b;
};
console.log(captLetter("hello", "there", "ES", 6));

// 2. Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.
// 	Input: [4, 6, 11, -9, 2.1], 2
// 	Output: [6, 8, 13, -7, 4.1]

("use strict");

let increase = (a, x = 1) => {
  let b = a.map((item) => {
    return item + x;
  });

  return b;
};
console.log(increase([4, 6, 11, -9, 2.1], 2));
//3.  Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
// 	Input: 120
// 	Output: 24

("use strict");
const tax = 0.2;

let saleTax = (price) => {
  return price * tax;
};
console.log(saleTax(120));

//4.  Write a function that filters all even elements of the array.
// 	Input: [6, 11, 9, 0, 3]
// 	Output: [6, 0]

("use strict");

let allEven = (a) => {
  let even = (x) => {
    return x % 2 == 0 && x != 0;
  };

  a = a.filter(even);

  return a;
};
console.log(allEven([6, 11, 9, 0, 3]));
// 5. Write a function that filters all the strings from the given array that contain substring JS or js.
// 	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
// 	Output: ['babel.js, 'JS standard']

("use strict");

let jsJS = (a) => {
  a = a.map((item) => {
    return item.toLowerCase();
  });

  let checkForJS = (x) => {
    return x.includes("js");
  };

  a = a.filter(checkForJS);

  return a;
};
console.log(
  jsJS(["compiler", "transpiler", "babel.js", "JS standard", "linter"])
);
// 6. Write a function that filters all integer numbers from the given array.
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// 	Output: [7, 8]

("use strict");

let filterInteger = (a) => {
  let checkForInteger = (n) => {
    return Number.isInteger(n);
  };

  a = a.filter(checkForInteger);

  return a;
};

console.log(filterInteger([1.6, 11.34, 9.23, 7, 3.11, 8]));
// 7. Write a function that filters all integer arguments that contain digit 5.
// 	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553
// 	Output: 45, 553

("use strict");

let filterFive = (...args) => {
  // check for integer
  let checkForInteger = (n) => {
    return Number.isInteger(n);
  };

  let b = args.filter(checkForInteger);

  // convert integers to string
  b = b.map((item) => {
    return item + "";
  });

  // check if 5 string
  let checkForFive = (x) => {
    return x.includes("5");
  };

  b = b.filter(checkForFive);

  return b;
};
console.log(filterFive(23, 11.5, 9, "abc", 45, 28, 553));

//8.  Write a function that returns indexes of the elements greater than 10.
// 	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// 	Output: 1, 2, 5

("use strict");

let greaterThanTen = (a) => {
  // old school

  //    let z = [];

  //     for (let i = 0; i < a.length; i++) {
  //         if (a[i] > 10) {
  //             z.push(i)
  //         }
  //     }

  //     return z;

  let z = [];

  a.forEach((element) => {
    if (element > 10) {
      z.push(a.indexOf(element));
    }
  });

  return z;
};
console.log(greaterThanTen([1.6, 11.34, 29.23, 7, 3.11, 18]));

//9. Create an array of persons. A person should be an object with name and age properties. Experiment with enhanced object literals.
// Write a function that prints out the names of persons older than 25.
// Write a function that check if there is a person older than 40.
// Write a function that checks if all persons are older than 20.

("use strict");

let persons = [
  { name: "michael", age: 33 },
  { name: "johnny", age: 24 },
  { name: "jimmy", age: 21 },
  { name: "jex", age: 44 },
];

// older than 25

let whoIsOlderThen25 = (arr) => {
  let olderThen25 = [];

  arr.forEach((element) => {
    if (element.age > 25) {
      olderThen25.push(element.name);
    }
  });

  return olderThen25;
};
// older than 40

let anyoneOlderThan20 = (arr) => {
  let olderThan40 = (x) => {
    return x.age > 40;
  };

  return arr.some(olderThan40);
};

// older than 20

let allOlderThen20 = (arr) => {
  let olderThan20 = (x) => {
    return x.age > 20;
  };

  return arr.every(olderThan20);
};

console.log(`whoIsOlderThen25? ${whoIsOlderThen25(persons)}`);
console.log(`anyoneOlderThan20? ${anyoneOlderThan20(persons)}`);
console.log(`allOlderThen20? ${allOlderThen20(persons)}`);
//10.  Write a function that checks if the given array is an array of positive integer values.
// 	Input: [3, 11, 9, 5, 6]
// 	Output: yes

// 	Input: [3, -12, 4, 11]
// 	Output: no

("use strict");

let isPositive = (a) => {
  let largerThenZero = (n) => {
    return n > 0;
  };

  if (a.every(largerThenZero)) {
    return "yes";
  } else {
    return "no";
  }
};

console.log(isPositive([3, 11, 9, 5, 6]));

console.log(isPositive([3, -12, 4, 11]));

//11.  Write a function that calculates the product of the elements of the array.
// Input: [2, 8, 3]
// Output:  48

("use strict");

let productOfAll = (a) => {
  let product = a.reduce((rez, val) => {
    return rez * val;
  }, 1);

  return product;
};

console.log(productOfAll([2, 8, 3]));
//12. Write a function that calculates the maximum of the given array.
// Input: [2, 7, 3, 8, 5.4]
// 	Output: 8

("use strict");

let maxValue = (a) => {
  let max = a[0];

  a.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });

  return max;
};

console.log(maxValue([8, 7, 3, 8, 5.4]));
