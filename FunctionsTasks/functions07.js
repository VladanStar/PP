/* 1.
Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.*/

var tellFortune = (function (numberOfChildren, partner, location, job) {
  return (
    "You will be a " +
    job +
    " in " +
    location +
    ", and married to " +
    partner +
    " with " +
    numberOfChildren +
    " kids."
  );
})(2, "Miksi", "Kragujevac", "web developer");

console.log(tellFortune);

/*
2. 
You know how old your dog is in human years, but what about dog years? Calculate it!

Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.

Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

*/
("use strict");

function calculateDogAge(dogAge = 0, humanYears = 0) {
  if (dogAge <= 0) {
    var dogAgeCalculator = function () {
      return "Please insert your dog's age";
    };
  } else {
    dogAgeCalculator = function (dogAge) {
      var newDogAge = 1;
      newDogAge = dogAge * 7;
      return "Your doggie is " + newDogAge + " years old in dog years!";
    };
  }

  if (humanYears <= 0) {
    humanYearsCalculator = function () {
      return "Please insert your dog's age in human years";
    };
  } else {
    var humanYearsCalculator = function (humanYears) {
      var newHumanYears = 1;
      newHumanYears = humanYears / 7;
      return "Your doggie is " + newHumanYears + " years old in human years!";
    };
  }
  return dogAgeCalculator(dogAge) + "\n" + humanYearsCalculator(humanYears);
}

console.log(calculateDogAge(7, 0));
/* 3. 
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.

Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/
("use strict");

function calculateSupply(age, amountPerDay) {
  var maxAge = 80;
  var output = "";
  var supply;
  var amountPerYear = parseInt(amountPerDay) * 365;

  supply = (maxAge - age) * amountPerYear;
  return (output =
    "You will need " +
    supply +
    " to last you until the ripe old age of " +
    maxAge);
}

console.log(calculateSupply(26, 6.5));
/* 4. 
// It's hot out! Let's make a converter based on the steps here.

Create a function called celsiusToFahrenheit:
Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/
("use strict");

function celsiusToFahrenheit(celsius) {
  var fahrenheit = 0;
  fahrenheit = celsius * 1.8 + 32;

  return celsius + "°C is " + fahrenheit + "°F";
}

console.log(celsiusToFahrenheit(35));

function fahrenheitToCelsius(fahrenheit) {
  var celsius = 0;
  celsius = (fahrenheit - 32) / 1.8;

  return fahrenheit + "°F is " + celsius + "°C";
}

console.log(fahrenheitToCelsius(95));
