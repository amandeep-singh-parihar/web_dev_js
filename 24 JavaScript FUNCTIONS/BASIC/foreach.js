//method is nothing but a function which is bind with a specific datatype

// let arr = [1, 2, 3, 4, 5];

// // arr.forEach(function printVal(val)
// // {
// //     console.log(val);
// // });

// arr.forEach(function printVal(val) {
//   console.log(val);
// });

// // arr.forEach(function show(val) {
// //   console.log(val);
// // });

// //prrint square of all the elements of the array

// let array = [3, 4, 5, 1, 100];

// array.forEach((num) => {
//   console.log(num * num);
// });

// //call back
// array.forEach(function square(i) {
//   console.log(i ** 2);
// });

// //call back

// let calcSquare = (num)=>{
//     console.log(num*num);
// };

// array.forEach(calcSquare);

// function ca(num)
// {
//     console.log(num*num);
// }

// array.forEach(ca);

//MAP=> using map it creates a new array with the desired function you are using
//like example below

// let nums = [67, 52, 39];

// let newarr=nums.map((val) => {
//   return val*val;
// });

// console.log(newarr);

/*filter=>The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.*/

// let brr=[1,2,3,4,5,6,7,8];

// let evenArr=brr.filter((val) =>{
//     return val%2===0;
// });

// console.log(evenArr);

//REduce use where we get alot of values in input but have to give one output

//example

// const array1 = [1,2,3,4,5,6,7,8,9,10];
// //0+1+2+3+4+5+6+7+8+9+10

// const output = array1.reduce((prev, curr) => {
//   return prev + curr;
// });

// console.log(output);

// const ou=array1.reduce((prev,curr)=>{
//     return prev<curr?prev:curr;
// });

// console.log(ou);

//ques

// let crr = [87, 93, 64, 99, 86];
// let goodscore = crr.filter((val) => {
//   return val > 90;
// });

// console.log(goodscore);

// console.log("****************************");

// //ques2

// let n = prompt("enter a number");

// let arr = [];
// for (let i = 1; i <= n; i++) {
//   arr[i - 1] = i;
// }

// const sum = arr.reduce((prev, curr) => {
//   return prev + curr;
// });

// console.log(sum);

// const pro = arr.reduce((prev, curr) => {
//   return prev * curr;
// });

// console.log(pro);
