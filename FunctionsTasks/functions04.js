/* 
1.	Write a program that checks if a given element e is in the array a.
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
*/
function isInArray(someArray, someElement) {
    var output = "";
    for (var i = 0; i < someArray.length; i++) {
        if (someArray[i] === someElement) {
            output = "yes";
            break;
        }
        output = "no";
    }
    return output;
}
var a = [5, -4.2, 3, 7];
var e = 3;

console.log(isInArray(a, e));
/* 
2.	Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/
function multiplyPositive(a) {

    for (var i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            a[i] *= 2;
        }
    }
    return a;
}
arr = [-3, 11, 5, 3.4, -8];
console.log(multiplyPositive(arr));

/* 
3.	Write a program that finds the minimum of a given array and prints out its value and index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3

*/
function minOfArray(someArray) {
    var min = a[0];
    var index = 0;
    var output = "";
    for (var i = 0; i < someArray.length; i++) {
        if (a[i] < min) {
            min = a[i];
            index = i;
        }
    }
    output = min + "," + index;
    return output;
}
a = [4, 2, 2, -1, 6];

console.log(minOfArray(a));

/* 
4.	Write a program that finds the second smallest number and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2

*/
function secondSmallest(a) {
    var min = a[0];
    var secMin = a[1];
    for (var i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
        }
        if (a[i] < secMin && secMin === min) {
            secMin = a[i];
        }
    }
    return secMin;
}
var arr = [4, 2, 2, -1, 6];
console.log(secondSmallest(arr));
/* 
4.	Write a program that finds the second smallest number and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2
*/
function sumPositive(someArray) {
    var sum = 0;
    for (var i = 0; i < someArray.length; i++) {
        if (someArray[i] > 0) {
            sum += someArray[i];
        }
    }
    return sum;
}
var arr = [3, 11, -5, -3, 2];

console.log(sumPositive(arr));
/* 
5.	Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/
function sumPositive(someArray) {
    var sum = 0;

    for (var i = 0; i < someArray.length; i++) {
        if (someArray[i] > 0) {
            sum += someArray[i];
        }
    }

    return sum;
}

var arr = [3, 11, -5, -3, 2];

console.log(sumPositive(arr));
/*
6.	Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
    Output: The array isn’t symmetric.

*/
function isSymmetric(someArray) {
    var output = "";

    for (var i = 0; i < someArray.length; i++) {
        for (var j = someArray.length - 1; j >= 0; j--) {
            if (someArray[i] === someArray[j]) {
                output = "The array is symmetric!"
            } else {
                output = "The array is NOT symmetric!"
            }
        }
    }
    return output;
}

var a = [2, 4, -2, 7, -2, 4, 2]
console.log(isSymmetric(a));

/*  
7.	Write a program that intertwines two arrays. You can assume the arrays are of the same length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]

*/

function intertwineTwoArrays(a, b) {
    var newArray = [];

    for (var i = 0; i < a.length; i++) {
        newArray[newArray.length] = a[i];
        newArray[newArray.length] = b[i];
    }

    return newArray;
}

var array_a = [4, 5, 6, 2];
var array_b = [3, 8, 11, 9];

console.log(intertwineTwoArrays(array_a, array_b));

/* 
8.	Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]

*/
function concatenateTwoArrays(a, b) {
    var newArray = [];

    for (var i = 0; i < a.length; i++) {
        newArray[newArray.length] = a[i];
    }
    for (var j = 0; j < b.length; j++) {
        newArray[newArray.length] = b[j];
    }

    return newArray;
}

var array_a = [4, 5, 6, 2];
var array_b = [3, 8, 11, 9];

console.log(concatenateTwoArrays(array_a, array_b));

/* 
9.	Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/

function deletesAnElement(e, a) {
    var newArray = [];

    for (var i = 0; i < a.length; i++) {
        if (a[i] !== e) {
            newArray[newArray.length] = a[i];
        }
    }

    return newArray;
}

var arr = [4, 6, 2, 8, 2, 2];
var el = 2;

console.log(deletesAnElement(el, arr));

/* 
10.	Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]

*/
function insertsAnElement(e, p, a) {
    var newArray = [];

    for (var i = 0; i < a.length; i++) {
        if (i === p) {
            newArray[newArray.length] = e;
        }

        newArray[newArray.length] = a[i];
    }
    return newArray;
}

var el = 78;
var pos = 3;
var arr = [2, -2, 33, 12, 5, 8];

console.log(insertsAnElement(el, pos, arr));