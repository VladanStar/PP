/*
Write a program that will iterate from 0 to 10 and display squares of numbers.
*/
for (var i = 0; i <= 10; i++) {
    console.log(i * i);
}
console.log("First task");

/*
1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.
*/

var evenArr = [];
var oddArr = [];
for (var i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        evenArr[evenArr.length] = i;
    } else {
        oddArr[oddArr.length] = i;
    }
}
console.log("Even: " + evenArr, "Odd:" + oddArr);

// second way
for (var i=0; i<=15; i++) {
    if (i === 0) {
            console.log(i +  " is zero");
    }
    else if (i % 2 === 0) {
            console.log(i + " is even");   
    }
    else {
            console.log(i + " is odd");
    }
}
console.log("Second task");

/*
2. Write a program to sum the multiples of 3 and 5 under 1000.
*/
var sum = 0;
for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        sum += i;
    }
}
console.log("Sum is: " + sum);

console.log("Thrid task");
/*
3. Write a program to compute the sum and product of an array of integers.
*/

var array = [1, 2, 3, 4, 5, 6],
    s = 0,
    p = 1;

for (var i = 0; i < array.length; i++) {
    s += array[i];
    p *= array[i];
}
console.log('Sum : ' + s + ' Product :  ' + p);
console.log("Fourth task");
/* 
4. Write a program which prints the elements of the following array as a single string.
var a = ["1","A","B","c","r",true,Nan, undefined];
*/
var str = "";
var a = ["1", "A", "B", "c", "r", true, NaN, undefined];
for (var i = 0; i < a.length; i++) {

    str += a[i];

}
console.log(str);
console.log("Fifth task");
/*
5. Write a program that prints the elements of the following array.
var a = [
[1, 2, 1, 24],
[8, 11, 9, 4],
[7, 0, 7, 27]
];
*/
var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];
for (var i in a) {
    console.log("row " + i);
    for (var j in a[i]) {
        console.log(" " + a[i][j]);
    }
}

// second way
var b = [];
for( var i = 0; i < a.length; i++) {
    for (var j in a[i]) {
        b[b.length]= a[i][j];
    }
}
console.log("b =["+ b +"]");


console.log("Sixth task");
/*
6. Write a program that outputs the sum of squares of the first 20 numbers.
*/
var p = 1;
var sum = 0;
for (var i = 0; i <= 20; i++) {
    sum += i * i;

}
console.log("Sum of Squares is: " + sum);

console.log("Seventh task");
/*
7. Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.
  */

var students = [['David', 80], ['Marko', 77], ['Dany', 88], ['John', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i = 0; i < students.length; i++) {
    Avgmarks += students[i][1];
    var avg = (Avgmarks / students.length);
}

console.log("Average grade: " + (Avgmarks) / students.length);


if (avg < 60) {
    console.log("Grade : F");
}
else if (avg <= 70) {
    console.log("Grade : D");
}
else if (avg <= 80) {
    console.log("Grade : C");
}
else if (avg <= 90) {
    console.log("Grade : B");
}
else if (avg <= 100) {
    console.log("Grade : A");
}

console.log("Eighth task");
/*
8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print "Fizz"; instead of the number, and for numbers
divisible by 5 (and not 3), print "Buzz"; instead. When you have that working, modify your
program to print "FizzBuzz";, for numbers that are divisible by both 3 and 5 (and still print
"Fizz"; or "Buzz"; for numbers divisible by only one of those).
*/
// make a loop that goes from 1 to 100
for (var i = 1; i <= 100; i++) {

    // check if the number is divisible by 3 or 5
    var checkThree = i % 3;
    var checkFive = i % 5;

    // if the number is divisible by both 3 and 5, then print FizzBuzz
    if ((checkThree == 0) && (checkFive == 0))
        console.log("FizzBuzz");

    // if the number is divisible by 3, then print Fizz
    else if (checkThree == 0)
        console.log("Fizz");

    // if the number is divisible by 5, then print Buzz
    else if (checkFive == 0)
        console.log("Buzz");

    // otherwise just print the number
    else
        console.log(i);
}

//
for (var i = 1; i <= 100; i++) {

    // check if the number is divisible by 3 or 5
    var checkThree = i % 3;
    var checkFive = i % 5;

    // if the number is divisible by both 3 and 5, then print FizzBuzz
    if ((checkThree == 0) && (checkFive == 0))
        console.log("FizzBuzz");

    // if the number is divisible by 3, then print Fizz
    else if (checkThree == 0 && checkFive !== 0)
        console.log("Fizz");

    // if the number is divisible by 5, then print Buzz
    else if (checkFive == 0 && checkThree !==0)
        console.log("Buzz");

    // otherwise just print the number
    else
        console.log(i);
}
