/*
4. Write a program that for a 1-12 number input (representing a month in a year) shows that
month’s name. All other cases output a message explaining that input must be a number
between 1 and 12.
For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”.
*/
var month = 12;
var result = "";
switch (month) {
    case 1:
        result = "Januar";
        break;
    case 2:
        result = "Februar";
        break;
    case 3:
        result = "Mart";
        break;
    case 4:
        result = "April";
        break;
    case 5:
        result = "Maj";
        break;
    case 6:
        result = "Jun";
        break;
    case 7:
        result = "Jul"
        break;
    case 8:
        result = "Avgust";
        break;
    case 9:
        result = "Septembar";
        break;
    case 10:
        result = "Oktobar";
        break;
    case 11:
        result = "Novembar";
        break;
    case 12:
        result = "Decembar";
        break;
    default:
        result = "Input must be a number between 1 and 12";
        break;

}
console.log(result);