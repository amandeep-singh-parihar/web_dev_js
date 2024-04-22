//syntax

//let newArr=arr.filter(some function defination or name);

//if the callback function is true then it is added otherwise not added

let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];

let even = nums.filter((i) => {
  return i % 2 == 0;
});
