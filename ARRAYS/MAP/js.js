//map

//let newArr=arr.map(some function defination or name);
//    ^                                   ^
//    |                                   |
//  creates new                     rest do the same work
//arr of same size

// let num = [1, 2, 3, 4, 5, 6, 7];
// let double = num.map((el) => {
//   return el * 2;
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

let gpa = arr.map((el) => {
    return el.marks/10;
});
