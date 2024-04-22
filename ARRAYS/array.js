let heros = ["aman", "deep", "what", "thor", "ironman"];

// for(let i=0;i<heros.length;i++)
// {
//     console.log(heros[i]);
// }

// array is mutable can be changed in the code

// for(let i of heros)
// {
//     console.log(i);
// }

// let cities=["delhi","pune","hydrabad"];
// for(let city of cities)
// {
//     console.log(city.toUpperCase());
// }

// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let i=0;i<marks.length;i++)
// {
//     sum+=marks[i];
// }
// console.log(sum);
// let average=sum/marks.length;
// console.log(average);

//ques 2
// let i=0;
// let items = [250, 645, 300, 900, 50];
// for(let val of items)
// {
//     console.log(val);
//     let offer=val/10;
//     items[i]=items[i]-offer;
//     console.log(`value after offer = ${items[i]}`)
//     i++;
// }

// for (let i = 0; i < items.length; i++) {
//   let offer = items[i] / 10;
//   items[i] -= offer;
// }
// console.log(items);


//ARRAY METHODS

// let food=["apple","litchi","tomato"];
// food.push("kheera","watermelon");
// console.log(food);
// let del=food.pop();
// console.log(del);

// console.log(food);
// console.log(food.toString());


//concat

let marverHeroes=["ironman","spiderman","thor"];
let dcHeroes=["batman","wonderwoman"];
let indianHeroes=["krish","shaktiman"];

let heroes=marverHeroes.concat(dcHeroes,indianHeroes);
console.log(heroes);

//unshift to add item to the starting to the array

// marverHeroes.unshift("amandeep");
// console.log(marverHeroes);

//shift to delete the first item

// marverHeroes.shift();
// console.log(marverHeroes);

//slice() : returns a peice of array and does't change the original array

// console.log(heroes.slice(1,5));


//splice() : change original array (add,remove ,replace)

// let arr=[3,2,19,123,432,125,1001];
// console.log(arr);
// // arr.splice(2,3,-1,-2,-111);
// // console.log(arr);

// //add element
// arr.splice(2,0,101);
// console.log(arr);

// //delete element
// arr.splice(3,1);
// console.log(arr);

// //Replace element
// arr.splice(3,1,-199);
// console.log(arr);

//let's practice

let arr=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(arr);
// arr.splice(0,1);
// console.log(arr);

arr.splice(2,1,"Ola");
console.log(arr);

// arr.push("Amazon");
arr.splice(arr.length,0,"Amazon");
console.log(arr);





