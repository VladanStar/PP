
// 1. Write a program that calculates the maximum of two given numbers.
var a = 9;
var b = 4;
function maxTwoNumbers(a, b) {
    if (a > b) {
        return "Max is " + a;
    }
    else if (b > a) {
        return "Max is: " + b;
    }
    else {
        return "Equals";
    }

}
var max = maxTwoNumbers(a, b);
console.log(max);

//2. Write a program that checks if a given number is odd.
a = 6;

function evenOrOdd(a) {
    if (a === 0) {
        return "Zero. Please enter a number";
    }
    else if (a % 2 === 0) {
        return "Even"
    }
    else {
        return " Number is Odd";
    }

}
var isOdd = evenOrOdd(a);
console.log(isOdd);

//3. Write a program that checks if a given number is a three digit long number.

var c = 234;
function treeDigit(c) {
    if (c > 99 && c < 1000) {
        return "Yess";
    }
    else {
        return "Number is not three digit";
    }
}
var threeDigit = treeDigit(c);
console.log(threeDigit);


//4  Write a program that calculates an arithmetic mean of four numbers.

var d = 7;
var e = 7;
var g = 8;
var l = -5;
function arithmeticMean(a, b, c, d) {
    var sum = a + b + c + d;
    var mean = sum / 4;
    return mean;
}
var mean = arithmeticMean(d, e, g, l);
console.log(mean);

//7. Write a program that calculates a number of digits of a given number.
var m = 345;

var count = 0;
function numberDigit(m) {
    var res = "";
    var string = m + res;
    return string.length;
}
var numberOf = numberDigit(m);
console.log(numberOf);

// 8. Write a program that calculates a number of appearances of a given number in a given
//array.
//Inputs: 
var a = [2, 4, 7, 8, 7, 7, 1];
var e = 7;
//Result: 3
var count = 0;
function apperancesNumber(t, array) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === e) {
            count++;
        }

    }
    return count;
}
var calculates = apperancesNumber(e, a);
console.log(count);


//9. Write a program that calculates the sum of odd elements of a given array.
var arr = [21, 2, 5, 9];
var sum1 = 0;
function calculatesOdd(arr_1) {
    for (var i = 0; i < arr_1.length; i++) {

        if (arr_1[i] % 2 === 0) {

        }
        else {
            sum1 += arr_1[i];
        }
    }
    return sum1;

}
var calcOdd = calculatesOdd(arr);
console.log(calcOdd);
/* 
10. Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A.
*/
var arr_2 = "Apperancesaaa";
var count_a = 0;
//var stringA = "a";;
function countA(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === "a" || array[i] === "A") {
            count_a++;

        }
    }
    return count_a;

}
var result_a = countA(arr_2);
console.log(result_a);

/*
11. Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc.
*/
var stringB = "abc";
var broj = 4;
function concatenates(br, string) {
    var ret = string;
    for (var i = 1; i < br; i++) {

        ret = ret + string;
    }
    return ret;

}
var nesto = concatenates(broj, stringB);
console.log(nesto);



/* 
Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
* *
* *
* *
*****
*/
var n = 5;
var pr = "\n";

function print(n) {

    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= n; j++) {
            if (i === 1 || i === n ||
                j === 1 || j ===n) {
               console.log( pr += "*\t");
            }
            else {
              console.log(  pr += " \n");
            }
        }
        //console.log(" \n");
    }
    
}
var prints = print(n);
console.log(prints);


