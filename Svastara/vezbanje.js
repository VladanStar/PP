var PI = 3.1;

function circleSurface(radius) {

var result = radius * radius * PI;

var PI = 3.14159;

return result;

}

var output = circleSurface(5);

console.log(output);
//--7
function circleCalc(radius, calculation) {
    var result = calculation(radius);
    return result
    }
    
    var output = circleCalc(7, function (r) {
    
    var PI = 3.14159;
    
    return 2 * r * PI;
    
    });
    
    console.log(output);

    //--8
    var input = ["one", "1e3", "10e-3", "32", "a15", "12,1"]

function transformArray(array, action) {

var result = [];

for (var index = 0; index < array.length; index++) {

var element = array[index];

result[index] = action(element);
}
return result;

}

var output = transformArray(input, parseFloat);
console.log(output);
output = transformArray(input, parseInt);

console.log(output);
//---9---
// Example 10

var cubeVolume = function (a) {

    return a * a * a;
    
    }  
    function cubeCalculation(a, calc) {
    return calc(a);
    } 
    output = cubeCalculation(10, cubeVolume(6))
    
    console.log(output);
    // Example 11

function cubeCalculation(a, calc) {

    return calc(a);
    
    }
    
    var output = cubeCalculation(10, function (a) {
    
    6 * a * a;
    
    })
    
    console.log(output);
    // Example 12

function cubeCalculation(a, calc) {

    return calc(a);
    
    }
    
    var output = cubeCalculation(10, function (a) {
    
    return 6 * a * a;
    
    })
    
    console.log(output);
    // Example 13

function saySomething(msg1) {

    return function (msg2) {
    
    var output = msg1 + " " + msg2;
    
    return function () {
    
    output += "!"
    
    console.log(output);
    }
    }
    }
    saySomething("Hi")("there");

    // Example 13

function saySomething(msg1) {
    function message(msg2) {
    var output = msg1 + " " + msg2;
    var result = function () {
    output += "!";
    console.log(output);
    }
    return result;
    }
    return message;
    }
    saySomething("Hi")("there")();
    // Example 14

var myArr = [];
var hi = function () {
return "Hi";
};
myArr[0] = hi;
myArr[0]();
var firstElement = myArr[0];
typeof firstElement;
firstElement();