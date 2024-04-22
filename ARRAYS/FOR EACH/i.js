//syntax

//arr.forEach(some function defination or name);

//eg

// let arr = [1, 2, 3, 4, 5];

// function print(el) {
//   console.log(el);
// }

// arr.forEach(print);

//directly passing fuction defi in the loop

// arr.forEach(function (el) {
//   console.log(el);
// });

// arr.forEach((el) => {
//   console.log(el);
// });

let arr = [
  {
    name: "aman",
    marks: 101,
  },
  {
    name: "abhay",
    marks: 100,
  },
  {
    name: "nitin",
    marks: 99,
  },
];

arr.forEach((itrator) => {
  console.log(itrator.name);
});
