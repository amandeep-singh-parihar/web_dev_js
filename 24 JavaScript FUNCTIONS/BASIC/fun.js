// // console.log("hello!");
// // console.log("abc".toUpperCase());

// function myFun(msg)
// {
//     console.log(msg);
//     console.log("hello js");
// }

// myFun("I love JS");

// function add(a,b)
// {
//     // console.log(a+b);
//     return a+b;
// }

// let val=add(4,3);
// console.log(val);

// //ARROW FUNCTION

// //modern js
// const sum=(a,b)=>{
//     console.log(a+b);
// };

// const mul=(a,b)=>{
//     console.log(a*b);
// };

// mul(4,3);

function countVowels(str) {
  let cnt = 0;
  // let n=str.toLowerCase();
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      cnt++;
    }
  }
  return cnt;
}

// let val = countVowels("amandeep");
// console.log(val);
