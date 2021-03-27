/* 
1.	Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
*/
function switchMinMax(a) {
    var min = a[0];
    var max = a[0];
    var minIndex = 0;
    var maxIndex = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
            minIndex = i;
        }
        if (a[i] > max) {
            max = a[i];
            maxIndex = i;
        }
    }
    a[maxIndex] = min;
    a[minIndex] = max;
    for (var i = 0; i < a.length; i++) {
        if (i === maxIndex) {
            a[i] = min;

        }
        if (i === minIndex) {
            a[i] = max;
        }
    }
    return a;
}

console.log(switchMinMax([3, 500, 12, 149, 53, 414, 1, 19]));
/*
2. Use the following array to make a new one by dividing its values by two and adding 5.
If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
*/
function changingValues(a) {
    var newArray = [];

    for (var i = 0; i < a.length; i++) {
        var newElement = a[i] / 2 + 5;

        if (newElement !== 0) {
            newArray[i] = newElement;
        } else {
            newArray[i] = 20;
        }
    }
    return newArray;
}

console.log(changingValues([3, 500, -10, 149, 53, 414, 1, 19]));
/*
Initialize two arrays. The first one should contain student names, 
the second one the number of points for each student. Display students' names 
with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input : [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.

*/
function displayGrades(names, points) {
    var output = "";

    for (var i = 0; i < names.length; i++) {
        var grade = 0;
        if (points[i] <= 50) {
            grade = 5;
        } else if (points[i] > 50 && points[i] <= 60) {
            grade = 6;
        } else if (points[i] > 61 && points[i] <= 70) {
            grade = 7;
        } else if (points[i] > 71 && points[i] <= 80) {
            grade = 8;
        } else if (points[i] > 81 && points[i] <= 90) {
            grade = 9;
        } else if (points[i] > 91 && points[i] <= 100) {
            grade = 10;
        }

        if (grade === 5) {
            output += names[i] + " acquired " + points[i] + " points" + " and failed" + " to complete the exam! " + "\n";
        } else {
            output += names[i] + " acquired " + points[i] + " points" + " and earned " + grade + "! " + "\n";
        }

    }
    return output;
}


console.log(displayGrades(["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [50, 39, 63, 72, 99, 51, 83, 59]));

/*Zadatak 4 
Sort a previously defined array. Place its sorted values into a new array
 whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
*/


function sortArray(myArray) {
    // metoda sortira uneti niz u rastućem poretku
    var n = myArray.length;

    for (var i = 0; i < n; i++) {
        var min = i;
        for (var j = i + 1; j < n; j++) {
            if (myArray[j] < myArray[min]) {
                min = j;
            }
            var popr = myArray[i];
            myArray[i] = myArray[min];
            myArray[min] = popr;
        }
    }
    console.log("sort array");
    for (var i = 0; i < n; i++) {
        console.log(myArray[i]);
    }
}
var arr = [13, 11, 15, 5, 6, 1, 8, 12];
var r = sortArray(arr);
// metoda sortira uneti niz u rastućem poretku

// function sortira(myArray) {
//     var n = myArray.length;
//     for (var i = 1; i < n; i++) {
//         var b = myArray[i];
//         for (var j = i - 1; j >= 0; j--) {
//             if (myArray[j] > b) {
//                 // ako je narušen rastući poredak zameni mesta za a[i] i a[j]
//                 myArray[j + 1] = myArray[j];
//             }
//             else {
//                 break;
//             }
//             myArray[j + 1] = b;
//         }
//     }
//     return myArray;
//}
var arr = [13, 11, 15, 5, 6, 1, 8, 12];
console.log(sortArray(arr));

function multipliedBy2(myArray) {
    var newArray = [];
    var copyArray = sortArray(myArray);
    // console.log(copyArray, a);

    for (var i = 0; i < copyArray.length; i++) {
        newArray[i] = copyArray[i] * 2;
    }

    return newArray;
}

var arr = [13, 11, 15, 5, 6, 1, 8, 12]
console.log(multipliedBy2(arr));


// zadatak 5

// Sort a previously defined array in a descending order and display it in the console.
// Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]

function sortArray(a) {

    for (var i = 0; i < a.length - 1; i++) {
        var position = i;
        for (var j = i; j < a.length; j++) {
            if (a[position] < a[j]) {
                position = j;
            }
        }

        var tmp = a[i];
        a[i] = a[position];
        a[position] = tmp;
    }

    return a;
}

console.log(sortArray([13, 11, 15, 5, 6, 1, 8, 12]));


function bubbleSort(a) {
    var max = a[0];
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a.length - 1; j++) {
            if (a[j] < a[j + 1]) {
                max = a[j + 1];
                a[j + 1] = a[j];
                a[j] = max;
            }
        }
    }
    return a;
}
numbers = [13, 11, 15, 5, 6, 1, 8, 12];
console.log(bubbleSort(numbers));


/*  6. Write a program that uses a loop to add all the even numbers from 1 to
1000 and subtracts all the odd numbers 1 to 500 from the calculated sum.
The result should then be multiplied by 12.5 and displayed in console.
 Output: 2350000
*/
function calculation() {
    var sum = 0;
    var sumOdd = 0;
    var result = 0;

    for (var i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
            sum += i;
        } else if (i % 2 !== 0 && i <= 500)
            sumOdd += i;
    }

    result = (sum - sumOdd) * 12.5;
    return result;
}

console.log(calculation());

/* 7. Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
 Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
 */

function firstTwoLetters(a) {
    var newString = "";

    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[i].length; j++) {
            if (a[i].length >= 2 && j < 2) {
                newString += a[i][j];
            }
        }
    }

    return newString;
}

console.log(firstTwoLetters(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]));
/* 
 8.	Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB
*/
function reverseOrder(someString) {
    var newString = "";
    for (var i = someString.length - 1; i >= 0; i--) {
        newString += someString[i];
    }
    return newString;
}
console.log(reverseOrder("Belgrade Institute of Technology"));

/*
9.	Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
 */
function combineNonDuplicatePairs(intervalFrom, inetervalTo) {
    var combinations = [];
    var numberOfPairs = 0;

    for (var i = intervalFrom; i <= inetervalTo; i++) {
        for (var j = 1; j <= inetervalTo; j++) {
            if (i !== j) {
                combinations[numberOfPairs] = [i, j];
                numberOfPairs++;

            }
        }
    }
    return combinations;
}
console.log(combineNonDuplicatePairs(1, 7));
/* 
10.	Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false

*/
function isAPrimeNumber(number) {
    if (number <= 0) {
        return false;
    }

    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isAPrimeNumber(4));

/*10.	Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true
 */

function isAPalindrome(someStr) {
    someString = "";
    for (var i = 0; i < someStr.length; i++) {
        if (someStr[i] !== " ") {
            someString += someStr[i];
        }
    }
    console.log(someString);
    for (var i = 0; i < someString.length / 2; i++) {

        if (someString[i] !== someString[someString.length - i - 1]) {
            return false;
        }
        return true;
    }
}
console.log(isAPalindrome("a nut for a jar of tuna"));

/* 
11.	Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9
*/
function greatestCommonDivisor(a, b) {
    var divisor = 0;
    for (var i = 1; i <= a && i <= b; i++) {
        if (a % i === 0 && b % i === 0) {
            divisor = i;
        }
    }
    return divisor;
}
console.log(greatestCommonDivisor(81, 9));