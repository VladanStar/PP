//built in objects 2.

/*1 Write a function to convert a number from one base (radix) to another. 
Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;
*/
function Replace(initiate, fromBase, toBase) {
  var intVal = parseInt(initiate, fromBase);
  return intVal.toString(toBase);
}
var res = Replace("ff", 16, 8);
console.log(res);

/*1.
Write a JavaScript function that reverses a number. typeof result of the function should be “number”.
*/

function reverse(number) {
  var stringForm = number.toString();

  var newString = "";
  for (var i = stringForm.length - 1; i >= 0; i--) {
    newString += stringForm[i];
  }
  var reversedNumber = parseInt(newString);
  return reversedNumber;
}
console.log(reverse(12345));
/*

logika je da pretvorimo broj u string. Kroz for petlju ga okrenemo. 
Onda parsiramo string u broj i prikazemo.
*/

//-----------second way----
/* Write a JavaScript function that reverses a number.
    12345 -> 12345 */

var array1 = [1, 2, 3, 4, 5];
var reversed = array1.reverse();

console.log(reversed);

//2.Write a JavaScript function that returns a passed string with letters in alphabetical order.
function sortString(string) {
  var lowerString = string.toLowerCase();
  var arrayString = [];
  for (var i = 0; i < lowerString.length; i++) {
    arrayString.push(lowerString[i]);
  }
  arrayString.sort();
  return arrayString.join(); // join() ako se ne navede separator podrazumevani je (,);
}
console.log(sortString("Webmaster"));
/***** */
function makeAlphabet(str) {
  var arr = str.toLowerCase().split("");
  var newString = arr.sort();
  return newString.join("");
}

console.log(makeAlphabet("Webmaster"));

/* 3.
Write a function to alphabetize words of a given string. 
Alphabetizing a string means rearranging the letters so they 
are sorted from A to Z. 
	
	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"
*/
/*
logika razdvojimo string pomocu split(" "). Novi niz newString1 sluzi da sortiramo 
i a.join(S)	Vraća string u kome su elementi niza odvojeni separatorom S.I to je za niz
Sa sledecom for petljom od niza pravimo string koji ima izmedju reci razmak " ".
*/
function makeA(str) {
  var newString = str.split(" ");
  var newString1 = [];
  var newString2 = "";
  for (var i = 0; i < newString.length; i++) {
    newString1[i] = newString[i].split("").sort().join("");
  }
  for (var i = 0; i < newString.length; i++){
    newString2 += newString1[i] +" ";
  }
  return newString2;
}
console.log(makeA("Republic Of Serbia"));

/* 4. Write a function to split a string and convert it into an array of words.
    "John Snow" -> [ 'John', 'Snow' ] */

function makeAlphabet(str) {
  var newString = str.split(" ");
  return newString;
}
console.log(makeAlphabet("John Snow"));

/* 6. Write a function to convert a string to its abbreviated form.
"John Snow" -> 	"John S."
*/

function abbrevStr(str) {
  var splitted = str.split(" ");
  if (splitted.length > 1) {
    return splitted[0] + " " + splitted[1].charAt(0) + ".";
  }
  return splitted[0];
}
console.log(abbrevStr("John Snow"));

/* 7 Write a function that adds string to the left or right of string by replacing it's characters
The output is a string.
	'0000', 123, 'l' -> 0123 
'00000000', 123, 'r' -> 12300000
*/

function padString(pad, str, direction) {
  if (direction === "l") {
    return (pad + str).slice(-pad.length);
  }
  if (direction === "d") {
    return (str + pad).slice(0, pad.length);
  }
}
console.log(padString("0000", 123, "l"));
console.log(padString("00000000", 123, "d"));
/** */

function padding(str, zero) {
  var strNewLen = zero.length;
  return str.padStart(strNewLen, "0");
}
console.log(padding("123", "00000"));
console.log(padding("00000000", 123, "d"));
/* 8.
Write a function to capitalize the first letter of a string and returns modified string.
"js string exercises" -> "Js string exercises" 
*/
/*
charAt() funkcija prvi znak pretvara u veliko slovo i
 dodaje ostatak nepromenjen od 2 znaka tj prvog indeksa do kraja*/
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstLetter("js string exercises"));

/* 9.
  Write a function to hide email addresses to protect them from unauthorized users.
    "somerandomaddress@example.com" -> "somerand...@example.com" */
/* 
 logika:
 // delimo string na dva dela.
  // jedan pre @ i drugi posle @. part1 = spitted prvi deo,
  part2 je drugi deo.
 */

function protectEmail(inputEmail) {
  var splitted, part1, part2;
  splitted = inputEmail.split("@");
  part1 = splitted[0];

  part1 = part1.substring(0, 0.5 * part1.length); // od zadatog parametra do polovine  duzine niza
  part2 = splitted[1];

  return part1 + "...@" + splitted[1];
}

console.log(protectEmail("pera.zdera@bit.rs"));
/*
logika da odredimo poziciju @ preko indexOf. Kada je odredjena sama pozicija 
sa slice() funkcijom koja .slice(P,K)	Vraća kopiju niza počev od indeksa P do indeksa K. 
Vratimo od @ do kraja stringa. U return napisemo ... + vracenu promenljivu. 
s.split(S)	Vraća niz delova stringa, odvojenih separatorom S.*/

function protectEmail(email) {
  var position = email.indexOf("@");

  var newEmail = email.slice(position, position.length);

  return "..." + newEmail;
}

console.log(protectEmail("vladancupric@gmail.com"));
var pos = "vladancupric".split("a");
console.log(pos);

/* 10.
  Write a program that accepts a string as input and swaps the case of each character. 
  For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
         var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
         var LOWER = 'abcdefghijklmnopqrstuvwxyz';
  "The Quick Brown Fox" -> "tHE qUICK bROWN fOX" 
  */

function swapTheCaseOfCharacter(str) {
  var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var LOWER = "abcdefghijklmnopqrstuvwxyz";
  var result = [];

  for (var i = 0; i < str.length; i++) {
    if (UPPER.indexOf(str[i]) !== -1) {
      result.push(str[i].toLowerCase());
    } else if (LOWER.indexOf(str[i]) !== -1) {
      result.push(str[i].toUpperCase());
    } else {
      result.push(str[i]);
    }
  }
  return result.join("");
}
console.log(swapTheCaseOfCharacter("The Quick Brown Fox"));

/* */
/*logika je da prihvatim string kao parametar funkcije. Koja potom napravi od stringa  novi niz sa split()
Kada to uradi proveravamo za svako slovo da li je veliko slovo.
Ako nije onda ga pretvaramo u veliko ako jeste onda ga pretvatamo u malo slovo.
Return novi niz. split() ako nema separator onda podrazumevamo da je separator zarez tj ,.
s.split(S)	Vraća niz delova stringa, odvojenih separatorom S.*/
function convert(str) {
  var newString = str.split("");

  var newString1 = [];
  var counter = 0;
  for (var i = 0; i < newString.length; i++) {
    if (newString[i] === newString[i].toUpperCase()) {
      newString[i] = newString[i].toLowerCase();
    } else {
      newString[i] = newString[i].toUpperCase();
    }
  }
  return newString;
}

console.log(convert("The Quick Brown Fox"));
