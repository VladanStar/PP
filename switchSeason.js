/*
5. Write a program that for a 1-12 number input (representing a month in a year) shows what
season it is. All inputs different from 1-12 output a message explaining that input must be a
number between 1 and 12.
*/
var month = 11;
var result = "";
switch (month) {
    case 12:
    case 1:
    case 2:
        result = "Winter";
        break;
    case 3:
    case 4:
    case 5:
        result = "Sring";
        break;
    case 6:
    case 7:
    case 8:
        result = "Summer";
        break;
    case 9:
    case 10:
    case 11:
        result = "Autumn";
        break;
    default:
        result = "input must be a number between 1 and 12";
        break;
}
console.log(result);
