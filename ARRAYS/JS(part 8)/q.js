//Square and sum the array elements using the arrow function and then find the
// average of the array.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const square = arr.map((i) => {
//   return i * i;
// });
// console.log(square);

// let sum = square.reduce((acc, cur) => acc + cur);

// let avg=sum/arr.length;
// console.log(avg);

//Create a new array using the map function whose each element is equal to the
// original element plus 5

// let arr = [0, 1, 2, 3, 4, 5];

// let newArr = arr.map((el) => {
//   return el + 5;
// });

// Create a new array whose elements are in uppercase of words present in the
// original array

// let strings = ["adam", "bob", "catlyn", "donald", "eve"];
// console.log(
//   strings.map((i) => {
//     return i.toUpperCase();
//   })
// );

// 4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.

// const doubleAndReturnArgs = (arr, ...args) => [
//   ...arr,
//   ...args.map((i) => i * 2),
// ];

// console.log(doubleAndReturnArgs([1,2,3],4,4));
// console.log(doubleAndReturnArgs([2],10,4));

// Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object

// const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
// mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });
// // console.log(mergeObjects);