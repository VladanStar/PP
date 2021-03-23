
/* 
1. Write a function to check whether the `input` is a string or not.
"My random string" -> true
12 -> false
*/

function isString(a) {
    return typeof a === "string";
}
var b = 3;
console.log(isString(b));

/* 
2. Write a function to check whether a string is blank or not.
"My random string" -> false
" " -> true
12 -> false
false -> false
*/
function isBlank(a) {
    return typeof a === " ";
}
var c = "   ";
console.log(isBlank(c));

/* 
3. Write a function that concatenates a given string n times (default is 1).
"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"
*/
function writeWord(n, word) {
    var conWord = "";
    if (typeof word !== "string" || n < 1) {
        console.log("Error");
    }
    else {
        for (var i = 1; i <= n; i++) {
            conWord += word;
        }
    }
    return conWord;
}
var word = "false";
var n = 6;

console.log(writeWord(n, word));

/*
4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2
*/
function charOccurrence(word, char) {

    if (typeof word !== "string") {
        return false;
    }
    var res = 0;
    for (var i = 0; i < word.length; i++)

        // checking character in string
        if (word[i] == char)
            res++;

    return res;
}
console.log(charOccurrence("hello", "l"));

/*
5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1. 
*/
function charFirstOccurrence(word, char) {

    if (typeof word !== "string") {
        return false;
    }
    var place = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] === char) {
            place = i;
            return place;
            break;

        }

    } return -1;

}

console.log(charFirstOccurrence("hello", "l"));
/* 
6. Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1.
*/
function charLastOccurrence(word, char) {

    if (typeof word !== "string") {
        return false;
    }
    var place = 0;
    for (var i = word.length - 1; i >= 0; i--) {
        if (word[i] === char) {
            place = i + 1;
            return place;

        }

    } return -1;

}

console.log(charLastOccurrence("hello", "l"));

/* 
7. Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.
""My random string" -> ["M", "y", null, "r", "a"]
"Random" -&gt; ["R", "a", "n", "d", "o", "m"]
*/

function stringToArray(str) {
    var newArr = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            newArr[i] = null;
        } else {
            newArr[i] = str[i];
        }
    }
    return newArr;
}

var s= "My random string";
console.log(stringToArray(s));

/* 
8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.
*/
function isPrimeNumber(number) {
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
console.log(isPrimeNumber(2));
/* 
9. Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.

"My random string", "_" -> "My_random_string"
"My random string", "+" -> "My+random+string"
"My random string"  -> "My-random-string"
*/
function wordSeparator(s, separator) {
    var newSent = "";
    if (typeof separator === "undefined") {
        separator = "-";
    }
    for (var i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            newSent += separator;
        } else {
            newSent += s[i];
        }
    }
    return newSent;
}
console.log(wordSeparator("My random string", "+"));
/* 
10. Write a function to get the first n characters and add “...” at the end of newly created string.
*/
function firstFewCharact(n, word) {
    var newWord = "";
    var dots = "...";
    for (var i = 0; i < n; i++) {
        newWord += word
    } newWord += dots;
    return newWord;
}
console.log(firstFewCharact(5, "Vladan Cupric  "));

/* 
11. Write a function that converts an array of strings into an array of numbers. Filter out all
non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
*/
function converts(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr[i] = Number(arr[i]);
    }
    return newArr;
}
var arR = ["1", "21", undefined, "42", "1e+3", Infinity];
console.log(converts(arR));

/* 
12. Write a function to calculate how many years there are left until retirement based on the
year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
already retired, a proper message should be displayed.
*/
function retirement(years, sex) {
    var year = 2021;
    var res = year - years;
    var result = "";
    if (sex === "female") {
        if (res >= 60) {
            result = "You are retirement";
        }
        else if (res < 60) {
            result = "Some more " + (60 - res);
        }
        else {
            result = "Put a diferent years";
        }
    }
    else if (sex === "male") {
        if (res >= 65) {
            result = "You are retirement";
        }
        else if (res < 65) {
            result = "Some more " + (65 - res);
        }
        else {
            result = "Put a diferent years";
        }
    }
    else {
        return "Something is wrong ";
    }
    return result;
}
var b = 1960;
var s = "female";
console.log(retirement(b, s));

/* 
13. Write a function to humanize a number (formats a number to a human-readable string) with
the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th
*/
function humanizeNumber(num) {
    if (typeof num == "undefined") {
        return;
    } else if (num % 100 >= 11 && num % 100 <= 13) {
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
}

console.log(humanizeNumber());
console.log(humanizeNumber(1128));
console.log(humanizeNumber(8));
console.log(humanizeNumber(301));
console.log(humanizeNumber(402));