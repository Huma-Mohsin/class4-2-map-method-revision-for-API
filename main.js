"use strict";
/*
The .map() method is an array method used to create a new array by applying a callback function to each element.
It takes up to 3 arguments:
  1. `value` (current element): The element being processed.
  2. `index` (optional): The index of the current element.
  3. `originalarr` (optional): The original array being mapped.
  
The number of iterations is equal to the number of elements in the array.
The .map() method does not modify the original array.
*/
let arr = ["a", "b", "c", "d"];
arr.map((value) => {
    console.log(value);
});
//or 
let arrr = ["a", "b", "c", "d"];
arrr.map((value) => {
    console.log(value.toUpperCase());
});
//with 1st and 2nd arguments...
let arr1 = ["a", "b", "c", "d", "e", "f"];
arr1.map((value, index) => {
    console.log(value, index);
});
//with 1st and 2nd  and 3rd arguments...
let arr2 = ["a", "b", "c", "d", "e", "f"];
arr2.map((value, index, originalarr) => {
    console.log(value, index, originalarr);
});
