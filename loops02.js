console.log("Prvi zadatak");
/* 
1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no
*/
var e = 3;
var result = "";
var a = [5, -4.2, 8, 7];

for (var i = 0; i < a.length; i++) {
    if (a[i] === e) {
        result = "yes";
       break; // for first element e
    }
    else {
        result = "no";
    }
}
console.log(result);
console.log("Drugi zadatak");
/*
2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/
var arr1 = [-3, 11, 5, 3.4, -8];
for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] > 0) {
        console.log(arr1[i] = arr1[i] * 2);
    }
    else {
        console.log(arr1[i]);
    }
}
console.log("arr1 = [" + arr1 + "]");
console.log("Treci zadatak");

/*
3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/
var arr3 = [4, 2, 2, -1, 6];

var minValue = arr3[0];
for (var i = 1; i < arr3.length; i++) {
    if (arr3[i] < minValue) {
        minValue = arr3[i];
        var num = i;
    }
}
console.log("min element is: " + minValue + ", index =" + num);

console.log(a);
// Druga verzija
var a = [-4, 2, 2, -1, 6, -5, 58, 6, -12, 8];
var min = 0;
var index = 0;

for (var i = 0, j = 1; i < a.length - 1; i++ , j++) {
    if (min > a[i] ) {
        min = a[i]
        index = i;
    }
  
}
console.log(min);
console.log(index);
console.log("Cevrti zadatak");

/* 
4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2
*/
var arr4 = [4, 2, 2, -1, 6];
var minValue1 = arr4[0];
for (var i = 1; i < arr4.length; i++) {
    if (arr4[i] < minValue1) {
        minValue1 = arr4[i];
        var num = i;
    }
}

console.log("min element is: " + minValue1);
var numb = arr4.sort();
var next = numb[1];
console.log("Next larger element is: " + next);
var str = [4, 2, 2, -1, 6];
var n = str.length;

for (var i = 0; i < n - 1; i++) {
    for (var j = i + 1; j < n; j++) {
        if (str[i] > str[j]) {
            // ako je narušen rastući poredak zameni mesta za str[i] i str[j]
            var pom = str[i];
            str[i] = str[j];
            str[j] = pom;
        }
    }

}
console.log("Sortirani niz str =[" + str + "]");
console.log("Sledeci element posle min je " + str[1]);
console.log("Peti zadatak");

/*
5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/
var arr5 = [3, 11, -5, -3, 2];
var sum = 0;
for (var i = 0; i < arr5.length; i++) {
    if (arr5[i] > 0) {
        sum += arr5[i];
    }
}
console.log("Sum of positive elements is: " + sum);

console.log("Sesti zadatak");
/*
6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
*/
var nums = [2, 4, -2, 7, -2, 4, 2];

for (var i = 0; i < nums.length / 2; i++) {
    if (nums[i] !== nums[nums.length - i - 1]) {
        result = "The array is  not symmetric.";
        break;
    }
    else {
        result = "The array is symmetric.";
    }
}

console.log(result);
console.log("Sedmi zadatak");


/*
7. Write a program that concatenates two arrays.

Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];

for (var i = 0; i < a.length; i++) {
    c[c.length] = a[i];
    c[c.length] = b[i];
}
console.log(c);

console.log("Osmi zadatak");

/* 

8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/
var arr1 = [4,5,6,2],
    arr2 = [3,8,11,9],
    newArr = [],
    index = 0;

for (i=0; i<arr1.length; i++) {
    newArr[index] = arr1[i];
    index++;
    newArr[index] = arr2[i];
    index++;
}

console.log(newArr);
  


console.log("Deveti zadatak");
/* 
9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/
var e =2;
var a = [4, 6, 2, 8, 2, 2,2];
for(var i =0; i<a.length;i++){

if(a[i] ===e){
// ovde imamo prazne empty elementa
delete a[i];
}
}
console.log(a);

  // druga varijanta
var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var b = [];
for( var i = 0; i < a.length; i++) {
    if (a[i] !== e) {
        b[b.length]= a[i];
    }
}
console.log(b);
console.log("Deseti zadatak");
/* 
10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/
   
var e = 78;
var p = 3; 
var a = [2, -2, 33, 12, 5, 8];
var b =[];

for (var i = 0; i < a.length+1; i++) {
    if ( i === p) {
       b[i] = e;
    }else if (i > p) {
        b[i] = a[i-1];
    } else {
        b[i] = a[i];
    }
}
console.log(b);



