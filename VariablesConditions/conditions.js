/*
Task 1. Write a conditional statement to find the sign of product of three numbers. Display the
result in the console with the specified sign.
Sample numbers: 3, -7, 2
Output: The sign is -
*/

console.log("Zadatak 1");
var a = 3;
var b = -7;
var c = 2;
if (a * b * c < 0) {
    console.log ("The sign is -");
} else {
    console.log ("The sign is +");
}

/*
Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the
console.
Sample numbers: -5, -2, -6, 0, -1
Output: 0
*/

console.log("Zadatak 2");
var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

var result = '';
if (a >= b && a >= c && a >= d && a >= e) {
result = a;
} else if (b >= a && b >= c && b >= d && b >= e) {
    result = b;
} else if (c >= a && c >= b && c >= d && c >= e) {
    result = c;
} else if (d >= a && d >= b && d >= c && d >= e) {
    result = d;
} else {
    result = e;
}
console.log (result);

/*
Task 3. Write a conditional statement to
sort three numbers.

Sample numbers : 0, -1, 4

Output : 4, 0, -1
*/
console.log("Zadatak 3");
var a = 0;
var b = -1;
var c = 4;
if (a > b && a > c) {
    if (b > c) {
        console.log (a,b,c);
    } else {
        console.log (a,c,b);
    }
    
} else if (b > a && b > c) {
    if (a > c) {
        console.log (b,a,c);
    } else {
        console.log (b,c,a);
    }
} else {
    if (a > b) {
        console.log (c,a,b);
    } else {
        console.log (c,b,a);
    }
}

/*
Task 4. Write a program to check if the
variable is a number. If it’s a
number, check if it is divisible
by 2. If it is, print the
result, if not, show “X”

Sample numbers: 10 | 7 (check one at the time)

Output: 10 / 2 = 5 | X
*/

console.log("Zadatak 4");

var a = 10;
if (typeof a === "number" && a % 2 === 0) {
    console.log (a / 2);
} else {
    console.log ("X");
}

var b = 7;
if (typeof b === "number" && b % 2 === 0) {
    console.log (b / 2);
} else {
    console.log ("X");
}

/*
Task 5. Write a program that compares
two numbers and display the
larger. Result should be
displayed in the console.
*/
console.log("Zadatak 5");
var a = 5;
var b = 12;

if (a < b) {
    console.log(b)
} else {
    console.log(a)
} 

console.log((a < b) ? b : a);

/*
Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Sample Input: 60°C
Output : 60°C is 140 °F
*/
console.log("Zadatak 6");
var c = 60
var f = (9 * c / 5) + 32
console.log (c, "°C is", f + "°F");

/*
Task 7. Write a JavaScript program to get the difference between a given number and 13, if
the number is greater than 13 return double difference between that number and 13.
Sample Input: 11 Sample Input: 32
Output : 2 Output : 38
*/
console.log("Zadatak 7");
var a = 32;
var b = 13;
var result = a - b;
var res_abs = Math.abs (result)
if (a > b && result > 13) {
    console.log (res_abs * 2);
} if (a > b && result < 13) {
    console.log (res_abs);
} else if (b > a && result > 13) {
    console.log (res_abs * 2);
} else if (b > a && result < 13) {
    console.log (res_abs);
}

var a = 11;
var b = 32;
var c = 13;

if (c < a) {
  console.log((a - c) * 2);
} else {
  console.log(c - a);
}

if (c < b) {
  console.log((b - c) * 2);
} else {
  console.log(c - b);
}

/*
Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
values are same, then returns triple their sum.
Sample Input: 12,5 Sample Input: 8,8
Output : 17 Output : 48
*/

console.log("Zadatak 8");
var a = 8;
var b = 8;
var result = a + b;
if (a === b) {
    console.log (result * 3);
} else {
    console.log (result);
}
/*
Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50.
Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10

Output : - Output : true Output : true
*/
console.log("Zadatak 9");

var a = 5;
var b = 54;
var sum = a + b;
if (a === 50 || b === 50 || sum === 50) {
    console.log ("true");
} else {
    console.log ("-");
}
var c = 6;
var d = 50;
var sum = c + d;
if (c === 50 || d === 50 || sum === 50) {
    console.log ("true");
} else {
    console.log ("-");
}
var e = 40;
var f = 10;
var sum = e + f;
if (e === 50 || f === 50 || sum === 50) {
    console.log ("true");
} else {
    console.log ("-");
}

/*
Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
and print range in which number belongs.
Sample Input: 13 Sample Input: 34 Sample Input: 256
Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400
*/

console.log("Zadatak 10");
var a = 13;
if (a >= 20 && a <= 100) {
    console.log("20 ⇔ 100");
} else if (a > 100 && a <= 400) {
    console.log ("100 ⇔ 400");
} else {
    console.log ("-");
}
var b = 34;
if (b > 20 && b < 100) {
    console.log("20 ⇔ 100");
} else if (b > 100 && b < 400) {
    console.log ("100 ⇔ 400");
} else {
    console.log ("-");
}
var c = 256;
if (c > 20 && c < 100) {
    console.log("20 ⇔ 100");
} else if (c > 100 && c < 400) {
    console.log ("100 ⇔ 400");
} else {
    console.log ("-");
}