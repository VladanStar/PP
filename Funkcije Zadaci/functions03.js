/* 
1. Write a program to insert a string within a string at a particular position (default is 1,
beginning of a string).
"My random string", "S" -> S My random string";
"My random string", "JS", 10,  "My random JS string"
*/

function insertString(word, sent, num = 0) {
    var newString = "";
    word = " " + word + " ";

    for (var i = 0; i < sent.length; i++) {
        if (num === i) {
            newString += word;
            sent[i + 1] = sent[i];
        }
        if (i > num) {
            sent[i + 1] = sent[i];
            newString += sent[i];
        } else {
            newString += sent[i];
        }
    }
    return newString;
}

var newWord = "JS";
var newSent = "My random string";
var number = 10;

console.log(insertString(newWord, newSent, number));

/*
2. Write a program to join all elements of the array into a string skipping elements that are
undefined, null, NaN or Infinity.
[NaN, 0, 15, false, -22, '', undefined, 47, null]
*/
function makeNewString(arr) {
    var newString = "";

    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string" || isFinite(arr[i]) && typeof arr[i] !== "object") {

            newString += arr[i];
        }
    }

    return newString;
}

var someArray = [NaN, 0, 15, false, -22, '', undefined, 47, 'vla', null];

console.log(makeNewString(someArray));

/* 
3. Write a program to filter out falsy values from the array.
[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]
*/

function filterOutFalsy(arr) {
    var newArray = [];

    for (var i = 0; i < arr.length; i++) {
        if (!arr[i]) {

            continue;
        } else {

            newArray[newArray.length] = arr[i];
        }
    }
    return newArray;
}

someArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
console.log(filterOutFalsy(someArray));

/*
4. Write a function that reverses a number. The result must be a number.
12345 -> 54321 // Output must be a number
*/
function reverseANumber(num) {
    var str = num + "";
    var newStr = "";
    var newNumber = 0;

    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    newNumber = parseInt(newStr);
    return newNumber;
}
console.log(reverseANumber(12345));

/* 
5. Write a function to get the last element of an array. Passing a parameter "n" will return the
last "n" elements of the array.
[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]
*/
function returnNElements(n) {
    if (n === undefined) {
        return someArray[someArray.length - 1];
    }

    if (typeof n !== "number" || n <= 0) {
        return "n must be a positive number";
    }
    var newElements = [];

    if (n <= someArray.length - 1) {
        var key = 0;
        for (var i = someArray.length - n; i < someArray.length; i++) {

            newElements[key++] = someArray[i];
        }
        return newElements;
    } else {
        return "n is longer than array";
    }
}

var someArray = [7, 9, 0, -22];
console.log(returnNElements(3));

/* 
6. Write a function to create a specified number of elements with pre-filled numeric value
array.
6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", none"]
2, -> [null, null]
*/
function createElements(num, element) {
    newElement = [];
    if (element === undefined) {
        element = null;
    }
    for (var i = 1; i <= num; i++) {
        newElement[newElement.length] = element;
    }
    return newElement;
}
var num = 5;
var element;
console.log(createElements(num, element));
/* 
7. Write a function that says whether a number is perfect.
28 -> 28 is a perfect number.
Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum
of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known
as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors
(including itself).
E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 =6.
Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next
perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
*/
function perfectNumber(number) {
    var sum = 0;
    for (var i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    if (sum === number && number !== 0) {
        return "It is perfect number";
    }
    return "it is not perfect number";
}
var number = 496;
console.log(perfectNumber(number));
/* 
8. Write a function to find a word within a string.
'The quick brown fox", "fox" -> "'fox" was found 1 times"
"aa bb cc dd aa", "aa" -> "'aa" was found 2 times"
*/
function searchWordCount(sentence, word) {

    var x = 0;
    var y = 0;

    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] == word[0]) {
            for (var j = i; j < i + word.length; j++) {
                if (sentence[j] == word[j - i]) {
                    y++;
                }
                if (y == word.length) {
                    x++;
                }
            }
            y = 0;
        }
    }
    return "'" + word + "' was found " + x + " times.";
}

console.log(searchWordCount('The quick brown fox', 'fox'));
console.log(searchWordCount('aa, bb, cc, dd, aa', 'aa'));
/* 
9. Write a function to hide email address.
"myemailaddress@bgit.rs" -> "mye...@bgit.rs" */

function hideEmail(email) {
    var hidden = "";
    var str = "";
    var newString = "";

    for (var i = 0; i < email.length; i++) {
        if (i < 7) {
            str += email[i];
        }
        newString += str;
        str = "";
        if (i === 7) {
            newString += "..."
        }
        if (i > 13) {
            str += email[i];
        }
        newString += str;
        str = "";
    }
    return newString;
}
console.log(hideEmail("myemailaddress@bgit.rs"));

/*
10.	Write a program to find the most frequent item of an array.

[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

*/
function findFrequent(someArray) {
    var frequentEl;
    var counter = 0;
    var mostFrequent = 1;
    for (var i = 0; i < someArray.length; i++) {
        for (var j = i; j < someArray.length; j++) {
            if (someArray[i] == someArray[j]) {
                counter++;
            }

            if (mostFrequent < counter) {
                mostFrequent = counter;
                frequentEl = someArray[i];
            }
        }
        counter = 0;
    }
    return frequentEl + " ( " + mostFrequent + " times" + ")";
}

var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

console.log(findFrequent(a));