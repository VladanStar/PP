var string1 = "A string primitive";
var string2 = "Also a string primitive";
var string3 = "Yet another string primitive";
var string4 = new String("A String object");


// Character access
 function strings () {
    return 'cat'.charAt(1);
}
console.log(strings());
//----------------------------
function stringsOne() {
    return 'cat'[1];
}
console.log(stringsOne());

//Comparing strings
var a = "A";
var b = "B";
if (a < b) {
    console.log(a + " is less then " + b);
}
else if (a > b) {
    console.log(a + " is greater then " + b);
}
else {
    console.log(a + " and " + b + " are equals");
}
//----------------------------
function isEqals(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
}
console.log(isEqals('vladan', "Vladan"));

var stringP = "foo";
var stringO = new String(stringP);

console.log(typeof stringP);
console.log(typeof stringO);

// funkcija eval()
var s1 = "2+2";
var s2 = new String("2+2");
console.log(eval(s1));
console.log(eval(s2));
//----------------- 
console.log(eval(s2.valueOf));
//********* */
var longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
    "otherwise my code is unreadable."
                 
console.log(longString);
var longString = "This is a very long string which needs \n to wrap across multiple lines because \n otherwise my code is unreadable."
                 
console.log(longString);
var string = "vladan";
console.log(string.charAt(4));
console.log(string.charAt(3));
console.log(string.charCodeAt(2));
console.log(string.codePointAt(2));
console.log(string.concat(" ", string3));
console.log(string1.includes(""));
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';

    if (search instanceof RegExp) {
      throw TypeError('first argument must not be a RegExp');
    }
    if (start === undefined) { start = 0; }
    return this.indexOf(search, start) !== -1;
  };
}
//----------------------
var string1 = "Cats are the best."
console.log(string1.endsWith("."));
var string2 = "Is it a quest?";
console.log(string2.endsWith("quest?"));
var paragraf = "The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.";
var searchThem = "returns";
console.log("The index of them words " + string1.indexOf(searchThem));
console.log("The index of them words is " + paragraf.indexOf(searchThem));
console.log("The last index of them separator is " + paragraf.lastIndexOf(" "));
console.log(string1.localeCompare(string2));
/***** */
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';




// expected output: Array ["T", "I"]
console.log(string1.repeat(2));
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"


const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// expected output: "the lazy dog."

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy"

var paragraph1 = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// any character that is not a word character or whitespace
console.log(paragraph1.search("lazy"));
// expected output: 43

console.log(paragraph1[paragraph1.search("lazy")]);
// expected output: "."
