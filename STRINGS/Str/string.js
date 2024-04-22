// let str="aman"

let specialString = `This is a template string`;
console.log(specialString);

//why use
let obj = {
  item: "pen",
  price: 10,
};

let output = `the cost of ${obj.item} is ${obj.price} ruppes`;

console.log(output);

//adding placeholders in the string is call string interpolation

//excape charters
let str = "aman\tdeep";
console.log(str);
console.log(str.length); //length is 9
console.log(str.toUpperCase());
// console.log(str.toLowerCase());
console.log(str); //original must be that new will be outputed

//str.trim
let some = "          what is this            ";
console.log(some.trim());

let nStr="javaScript tutorial for beginners to Pro";
// console.log(nStr.slice(0,5));
// console.log(nStr.concat(str));

console.log(nStr.replace("javaScript","Python"));
// "Python tutorial for beginners to Pro"
