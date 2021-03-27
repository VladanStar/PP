/*
4. Play around in the console: add, subtract, multiply and divide some numbers. Use numbers
stored in variables you created as well. Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3.
Why do we get these results?
*/
console.log("Zadatak 4");
a = 3;
b = 2;
c = 31;
var result = a * b -c;
console.log (a * b -c / 7) ;

/*
5. How many grams weight 1.2kg of bananas?
*/
console.log("Zadatak 5");

console.log (1.2 * 1000, "g");
/*
6. How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What
about Tom who is being late half an hour? It is hard to be on time these days…
*/
console.log("Zadatak 6");

console.log (5 * 60, "s");
console.log (30 * 60, "s");

/*
7. How many MB of additional memory we have if we buy a 4GB USB stick? How many news
articles each in size 98KB can fit in it?
*/
console.log("Zadatak 7");

console.log (4 * 1024, "MB", 4 * 1024 * 1024 / 98);
/*
9. Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?
*/
console.log("Zadatak 9");

var a = 3;
console.log (a*=5);
/*
10. Create the following variables:
- a variable containing your name,
- a variable containing your age,
- a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types.
*/
console.log("Zadatak 10");

var name = "Dijana";
var $age = 30;
var HasCat = false;
console.log (typeof name, typeof $age, typeof HasCat);
/*
14. If the variable age stores the information about user’s age, how we can check whether it
contains a correct value? Write expressions for checking:
● Is age negative value
● Is age greater than 120
*/
console.log("Zadatak 14");

var god = 35;
console.log (god < 0, god > 120);

/*
15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If
we store the current speed value in the variable speed. Write an expression which will check if
we are driving drive safely or not? (true if we are driving safe and false if not)
*/
console.log("Zadatak 15");

var a = 40;
var safe = a > 60 && a < 120;
if (safe == true) {
    console.log ("Safe");
} else {
    console.log ("Not safe");
}

