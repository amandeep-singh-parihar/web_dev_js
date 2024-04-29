// alert("hello");
// console.log("hello");
// console.warn("hello");
// console.error("hello");

// prompt("hello");

var sum = 0;
let arr = [1, 2, 3, 4, 5];
// for(let i=0;i<arr.length;i++)
// {
//     sum=arr[i]+sum;
// }
// console.log(sum);

arr.forEach((i) => {
  sum += i;
});

console.log(sum);

var obj = {
  name: "aman",
  age: 20,
  email: "alksjf@s.com",
};

console.log(obj.name);