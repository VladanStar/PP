function sum (num){
    num *=num;
    return 10
}
console.log(sum(10));

var ary = ['three', 'seven', 'eleven'];

// Remove item 'seven' from array
var filteredAry = ary.filter(function (e) { return e !== 'seven' })
//=> ["three", "eleven"]

// In ECMA6 (arrow function syntax):
var filteredAry = ary.filter(e => e !== 'seven');
console.log(filteredAry);