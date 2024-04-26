//SYNTAX OF ARROW FUNCTION

//const variable=(arg1,arg2,arg3,...argN) => {function defination}

// const sum = (a, b) => {
//   console.log(a + b);
// };

// const cube = (a) => {
//   console.log(a ** 3);
// };

// const aToB = (a, b) => {
// //   console.log(Math.pow(a, b));
//     console.log(a**b);
// };

// // set timeout

// console.log("hi there!");

// // run this after a fix time
// setTimeout(() => {
//   console.log("apna college");
// }, 2000);

//setTimeout(arrowfunc,4000);
//for explaination

// console.log("welcome to");

//run the same after a interval in loop

// setInterval(() => {
//   console.log("apna college");
// }, 2000);

/*

THis with arrow function

*/

// const student = {
//   name: "aman",
//   marks: 100,
//   prop: this,
//   getName: function () {
//     console.log(this); //for simple function this is its calling object -> student
//     return this.name;
//     //student.getName
//     //   ^
//     //  this
//   },

//   getMarks: () => {
//     console.log(this); //for arrow function this is its parents scope -> window
//     return this.marks;
//     //student.getMarks
//     //   ^
//     // global scope = window
//     // this
//   },
// };


//write a function that prints "Hello world" 5 times at interval of 2s each

// let id = setInterval(() => {
//   console.log("Hello world");
// }, 2000);

// setTimeout(() => {
//   clearInterval(id);
// },10000);



