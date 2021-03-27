/*
Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!
*/
var a = 3;
var b = 0;
var result;
var operatoris = "/";
switch (operatoris) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "/":
        if (b !== 0) {
            result = a / b;

        }
        else {
            result = "Zero division is not possible"
        }
        break;

    case "*":
        result = a * b;
        break;
    default:
        result = "Wrong oparator";
        break;
}
console.log(result);