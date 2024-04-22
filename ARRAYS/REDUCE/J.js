//reduce the array to a single value
//syntax
//arr.reduce(reducer function with 2 variable for(accumulator , element));

//accumulator k ander pichle baar ki return value aayegi

//for example

// let arr = [1, 2, 3, 4];
// let final = arr.reduce((res, el) => res + el);
// console.log(final);

//finding the maximum in an array
// let arr = [1, 2, 3, 4, 2, 3, 4, 1, 101, 13, 42,10001 ,0, 15, 42, -1];

// let max = arr.reduce((max, el) => {
//   if (max < el) {
//     return el;
//   } else {
//     return max;
//   }
// });

//check if all numbers in our array are multiples of 10 or not

let arr = [10, 20, 30, 10, 40, 50, 60];

// let ans = arr.every((el) => {
//   return el % 10 == 0;
// });

// console.log(ans);

//find min
function getMin(arr) {
  let min = arr.reduce((min, el) => {
    if (min > el) {
      return el;
    } else {
      return min;
    }
  });
  return min;
}


// console.log(min);
