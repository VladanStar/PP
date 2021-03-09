/*   
1. Write an array of months in a year. Using console.log display June, October and January
from the array.
*/
var year = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Oktober", "November", "December"];
console.log(year[5], year[9], year[0]);

/* 
2. Write an arrays of days in a week. Using console.log display Sunday from the array.
*/
var week = ["monday", "tuersday", "wednesday", "thursday", "friday", "saturday", "sunday"];
console.log(week[6]);

/* 
3. Print all negative elements from the array [2, -4, 5, -2, -11].
*/
var arr = [2, -4, 5, -2, -11];
console.log(arr[1], arr[3], arr[4]);

/*
4. Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18,
72, 14, 9].
*/
var arr1 = [5, 15, -5, 20, 12, 18, 72, 14, 9];
console.log(arr1[1], arr1[4], arr1[5], arr1[6], arr1[8]);


/*
5. What is the index of number 24 in the following array?
[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,
10, 26, 7]];
Using console.log:
● Display the 3rd element of the array,
● Display the 2nd element of the 3rd element.
*/
var mixArray = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
console.log(mixArray[0][3]);
console.log(mixArray[3]);