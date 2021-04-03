/*1.
 Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
E, I, O, and U.
*/
function countVowels(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":
        count++;
        break;
      case "e":
        count++;
        break;
      case "i":
        count++;
        break;
      case "o":
        count++;
        break;
      case "u":
        count++;
        break;
      case "A":
        count++;
        break;
      case "E":
        count++;
        break;
      case "I":
        count++;
        break;
      case "O":
        count++;
        break;
      case "U":
        count++;
        break;
    }
  }
  return count;
}
console.log(countVowels("vlAdan cupric vezba programiranje"));
/* 2. 
Write a function that combines two arrays by alternatingly taking elements.
[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
*/
function combineArrays(arrA, arrB) {
  var newArray = [];
  var longerArr;

  if (arrA > arrB) {
    longerArr = arrA;
  } else {
    longerArr = arrB;
  }
  for (var i = 0; i < longerArr.length; i++) {
    //if (i < arrA.length) {
    newArray[newArray.length] = arrA[i];
    // }
    // if (i < arrB.length) {
    newArray[newArray.length] = arrB[i];
    //   }
  }
  return newArray;
}
console.log(combineArrays(["a", "b", "c"], [1, 2, 3, 4, 5]));
/*3.
Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
*/
function changePlace(arr, n) {
  var newArr = [];
  for (var i = n; i < arr.length; i++) {
    newArr[newArr.length] = arr[i];
  }
  for (var j = 0; j < n; j++) {
    newArr[newArr.length] = arr[j];
  }
  return newArr;
}
console.log(changePlace([1, 2, 3, 4, 5, 6], 2));
/*4.  
Write a function that takes a number and returns array of its digits.
*/
("use strict");
function arrayOfDigits(number) {
  var newArray = [];
  var str = number + "";

  for (var i = 0; i < str.length; i++) {
    newArray[newArray.length] = str[i];
  }
  return newArray;
}
console.log(arrayOfDigits(5687));
/* 5.
Write a program that prints a multiplication table for numbers up to 12
*/
function multiplTable(n) {
  var result = "";
  for (var i = 1; i <= n; i++) {
    result = "\n"; //tajna je u znaku jednako bez plusa
    for (var j = 1; j <= n; j++) {
      result += i * j + " ";
    }
    console.log(result);
  }
}
var n = 12;
console.log(multiplTable(n));
// simple funnctions
function table(x)
{
  
  var alertBody = '';
  for (var i=1; i<x; i++) {
    alertBody += x + "*" + i +"="+x*i + '\n';
  }
  return alertBody;
}
var n = 12;
console.log(table(n));
// third way
function mulT(n){
for ( var i=1; i<=n; ++i)
{
    for (var j = 1; j<=n; ++j)
    {
       console.log(i*j+"  ");  
    }
    console.log()
}   
}
var n = 12;
console.log(mulT(n));
 
/* 6.
Write a function to input temperature in Centigrade and convert to Fahrenheit.
*/
function centigradeToFahrenheit(temp) {
  var fahrTemp = 1;
  fahrTemp = temp * 1.8 + 32;
  return fahrTemp;
}
console.log(centigradeToFahrenheit(30));
/* 7. 
Write a function to find the maximum element in array of numbers. Filter out all non-number elements.
*/
function findMax(array) {
  var max = array[0];
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (element > max && typeof element === "number") {
      max = element;
    }
  }
  return max;
}
var array = [2, 5, "65", "7", 8, 12, -4, 5, 45];
console.log(findMax(array));
/* 8. 
Write a function to find the maximum and minimum elements. Function returns an array.
*/
function findMaxMin(array){
    var newArr =[];
    var max = array[0];
    var min = array[0];
    for(var i =0; i<array.length;i++){
        if(array[i]>max && typeof array[i]==="number"){
            newArr [0]= array[i];
        }
        if(array[i] <min && typeof array[i] ==="number"){
            newArr[1] = array[i];
        }
    }
    return newArr;
}
var arr = [2, 5, "65", "7", 8, 12, -4, 5, 45];
console.log(findMaxMin(arr));
/* 9.
Write a function to find the median element of array
*/

/*10.
Write a function to find the element that occurs most frequently.
*/
function frequency(arr){
    var mostF = arr[0];
    var occurs =0;
    for(var i =0; i<arr.length;i++){
        var counter =0;
    for(var j =0; j<arr.length;j++){
        if(arr[i] ===arr[j]){
            counter++;
        }
    }
    if(occurs < counter){
        mostF = arr[i];
        occurs =counter;
    }
    }
    return mostF;
}
var a = [8,4,1,2,7,5,1,1,1,2,5];
console.log(frequency(a));

