/* ------------------  1  ------------------*/
// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]

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
/* ---------------- 3 -------------------------*/
// Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

// Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

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
console.log(hasOddNumber([8, 2, 2, 2,6]));

var lessThanMidd = function (arr) {
  if (arr.length % 2 === 0) {
    return "Error";
  }
  var count = 0;
  var middle = Math.floor(arr.length / 2);
  for (var i = 0; i < arr.length; i++) {
    if (middle > arr[i]) {
      count++;
    }
  }
  return count;
};
console.log(lessThanMidd([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

/* ------------------------  4 ---------------------*/
// Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }

 var findSmallest = function (arr) {
     var min = arr[0];
     for (var i = arr.length - 1; i >= 0; i--) {
         if (arr[i] < min) {
             min = arr[i];
         }
     }
     var obj = { minValue: min, lastMinIndex: arr.lastIndexOf(min) }
     return obj;

 };
console.log(findSmallest([1, 4, -2, 11, 8, 1, -2, 3]));
 
// Write a function that finds all the elements in a given array less than a given element. 

function lessThan(arr) {
    var i = 0;
    var newArray = [];
    var index = parseInt(arr.length / 2);
    for (i in arr) {
        if (arr[i] < arr[index]) {
            newArray.push(arr[i])
        }
    }
    return newArray;
}
// console.log(lessThan([2,3,87,5,7,9,5,3], 5));