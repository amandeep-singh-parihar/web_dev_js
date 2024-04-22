// let arr=[1,2,3,1,2,3,0,1,2,3,1,2,3,0];
// let ans=Math.min(...arr);
// //here ...arr each element is going as a argument
// console.log(ans);

// //used in copying and creating new array

// let newArr=[...arr];

// //breakdown string into char arr

// let chars=[..."hello"];

// let odd=[1,3,5,7,9];
// let even=[2,4,6,8,10];

// let nums=[...odd,...even];

////used for object litrals

// const data = {
//   email: "ironman@gmail.com",
//   password: "abc",
// };

// const dataCopy = { ...data, id: 123 };
// //ouput
// //{email: 'ironman@gmail.com', password: 'abc', id: 123}

// let arr=[1,2,3,4,5,6];
// let obj1={...arr};
// //arr become a object now

//REST  allows a funciton to take and indefinite number of argumenst and bundle them in an array
//REST
//REST
//REST
//REST
//REST
//REST
//REST
//REST
//REST
//REST
//REST

// function sum(...args) {
//   //argument
//   for (let i = 0; i < args.length; i++) {
//     console.log(args[i]);
//   }
// }

// function sum(...args) {
//   return args.reduce((sum, el) => sum + el);

// DESTRUCTURING

// let names=["tony","bruce","steve","peter"];
// // let winner=names[0];
// // let runnerup=names[1];

// // let [winner,runnerup]=names;
// // console.log(winner,runnerup);

// let [winner,runnerup,...others]=names;

const student = {
  name: "aman",
  age: 20,
  class: 2,
  subjects: ["maths", "english", "social", "math"],
  username: "aman@123",
  password: "abcd",
};

// let {username ,password}=student;
let { username: user, password: secret, city = "Mumbai" } = student;
