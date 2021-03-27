/*
Zadatak 1.
*/
console.log ("Zadatak 1");
var a = 5;
var b = 12;

if (a<b){
    console.log("A je manje od B")
} else {
    console.log("A je vece od B")
} 

/*
Zadatak 2.
*/
console.log ("Zadatak 2");
var a = 3;
if (a % 2){
    console.log("odd");
} else {
    console.log("even");
}

/*
Zadatak 3.
*/
console.log ("Zadatak 3");
var a = 4;
if (a % 2){
    console.log("odd");
} else {
    console.log("even");
}

/*
Zadatak 4.
*/
console.log ("Zadatak 4");
var a = 9;
if (a % 2){
    console.log("odd");
} else {
    console.log("even");
}
/*
Zadatak 5.
*/
console.log ("Zadatak 5");
a = 15;
if (a % 3) {
    console.log("deljiv sa tri");
} else {
    console.log ("-");
}

/*
Task A. Write a program to check if the
number is divisible by 2. If it
is, print even, if not, print
odd.
Sample numbers: 3, 4, 9 (check one at the time)

Output: odd, even, odd
*/
console.log("Zadatak A");
var a = 3;
console.log( a % 2 ? "odd" : "even");
var b = 4;
console.log( b % 2 ? "odd" : "even");
var c = 9;
console.log( c % 2 ? "odd" : "even");

/*
Task B. Write a program to check if the
number is divisible by 3 and 5.
If it is, print that number.

Sample numbers: 15, 12 (check one at the time)

Output: 15
*/

console.log("Zadatak B");
var a = 15;
if (a % 3 === 0 && a % 5 === 0) {
    console.log (a);
}
var b = 12;
if (b % 3 === 0 && b % 5 === 0) {
    console.log (b);
}