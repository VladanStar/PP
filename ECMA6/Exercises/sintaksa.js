// 1. Write a function that capitalizes the first letter of each string argument it receives.
// Function arguments: ​'hello', 'there', 'ES', 6
// Output:​ 'Hello', 'There', 'ES'


let capitalizeFirstLetter = (...arguments) => {
    let array = Array.from(arguments);
    let newArray = array.filter(e => typeof e == 'string');
    newArray.forEach(function (element, i, newArray) {

        newArray[i] = element.charAt(0).toUpperCase() + element.slice(1);
    })
    console.log(newArray);
}
capitalizeFirstLetter('hello', 'there', 'ES', 6);


// 2. Write a function that calculates sale tax that should be paid for the product of the given price.
// Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
// Input:​ 120
// Output:​ 24


const tax = 0.2;
let taxRate = (m) => m * tax;
let a = taxRate(120);

console.log(a);
//////////////////////////////////////
const products = [{ name: "Banana", price: 120.23, date: new Date() }, { name: "Orange", price: 100, date: new Date() }]

const productsWithTax = products.map(product => {

    const { price: prodPrice } = product;

    const newProd = {
        ...product,
        price: Number.parseFloat(prodPrice),
        priceWithTax: prodPrice * 1.2,
        tax: prodPrice * 0.2
    }

    return newProd
})

console.log(products);
console.log(productsWithTax);
console.log([parseInt(productsWithTax[0].tax),parseInt(productsWithTax[1].tax)])


/////////////////////////////////////
/*3. Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
	Input: [4, 6, 11, -9, 2.1], 2
    Output: [6, 8, 13, -7, 4.1]*/

function inc(array, n = 1) {
    let newArr = [];

    array.forEach((item) => {
        newArr.push(item + n);

    });

    return newArr;
}
console.log(inc([4, 6, 11, -9, 2.1], 2));

// 4. Write a function that filters all even elements of the array.
//     Input: [6, 11, 9, 0, 3]
//     Output: [6, 0]


const array = [6, 11, 9, 0, 3];
const filterEven = array.filter(e => e % 2 === 0);

console.log(filterEven);




// 5. Write a function that filters all the strings from the given array that contain substring JS or js.
//     Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
//     Output: ['babel.js, 'JS standard']


const array = ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter'];
const filerString = array.filter(el => el.toLowerCase().includes("js"));

console.log(filerString);




// 6. Write a function that filters all integer numbers from the given array.
//         Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
//         Output: [7, 8]


const array = [1.6, 11.34, 9.23, 7, 3.11, 8];
const filterInteger = array.filter(e => Number.isInteger(e));

console.log(filterInteger);




// 7. Write a function that filters all integer arguments that contain digit 5.
// Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553
// Output: [45, 553]


const filterInteger = (...arguments) => arguments.filter(e => Number.isInteger(e) && e.toString().includes(5));
let a = filterInteger(23, 11.5, 9, 'abc', 45, 28, 553);

console.log(a);




// 8. Write a function that checks if the given array is an array of positive integer values.
//     Input: [3, 11, 9, 5, 6]
//     Output: yes
//     Input: [3, -12, 4, 11]
//     Output: no


const array = [3, 11, -9, 5, 6]
const checkPositive = (arr) => {
    arr.every(e => e >= 0)
    return 'yes'
} 

console.log(checkPositive(array));


// 9. Write a function that calculates the product of the elements of the array.
//     Input: [2, 8, 3]
//     Output: 48


const array = [2, 8, 3];
const product = array.reduce((a, b) => a * b);

console.log(product);




// 10. Write a function that calculates the maximum of the given array.
//     Input: [2, 7, 3, 8, 5.4]
//     Output: 8


const array = [2, 7, 3, 8, 5.4];
const calculateMax = array.reduce((a, b) => Math.max(a, b));

console.log(calculateMax);

// or:

const array = [2, 7, 3, 8, 5.4];
const max = Math.max(...array);

console.log(max);

const products = [{ name: "Banana", price: 120.23, date: new Date() }, { name: "Orange", price: 100, date: new Date() }]

const productsWithTax = products.map(product => {

    const { price: prodPrice } = product;

    const newProd = {
        ...product,
        price: Number.parseFloat(prodPrice),
        priceWithTax: prodPrice * 1.2,
        tax: prodPrice * 0.2
    }

    return newProd
})

console.log(products);
console.log(productsWithTax);
