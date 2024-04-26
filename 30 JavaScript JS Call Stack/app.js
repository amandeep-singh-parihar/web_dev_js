// function hello() {
//   console.log("inside hello fnx");
//   console.log("hello");
// }

// function demo() {
//   console.log("calling hello fnx");
//   hello();
// }

// console.log("calling demo fnx");
// demo();
// console.log("done, bye!");

// function one()
// {
//     return 1;
// }

// function two()
// {
//     return one()+one();
// }

// function three(){
//     let ans=two()+one();
//     console.log(ans);
// }

// three();

// /*call back HELL */
// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// }

// changeColor("red", 500, () => {
//   changeColor("orange", 500, () => {
//     changeColor("green", 500, () => {
//       changeColor("pink", 500, () => {
//         changeColor("blue", 500, () => {
//           changeColor("brown", 500, () => {
//             changeColor("gray", 500);
//           });
//         });
//       });
//     });
//   });
// });
// //callback nesting -> callback hell
// //Callback hell is a phenomenon where a Callback is called inside another Callback

//to solve the issue of callback hell we use promises

// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "apna college",
//   () => {
//     console.log("success : your data was saved ");
//     //jab ek data saved hoga tabhi ham dusra save karaenge
//     savetoDb(
//       "hello world",
//       () => {
//         console.log("success2: data 2 saved");
//         savetoDb(
//           "sharadha",
//           () => {
//             console.log("success3: data 3 saved");
//           },
//           () => {
//             console.log("failure3 : weak connection");
//           }
//         );
//       },
//       () => {
//         console.log("failure2 : weak connection");
//       }
//     );
//   },
//   () => {
//     console.log("failure : weak connection. data not saved");
//   }
// );

//promises => The promises object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// resolve and reject
//    |           |
//success  and  failure

// function savetoDb(data) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("success : data was saved");
//     } else {
//       reject("failure : weak connection");
//     }
//   });
// }

//two methods in promises

//then() and catch()

//if promises is fulfilled then then() is used

//if promises is rejcecten then catch() is used

function savetoDb(data) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success : data was saved");
    } else {
      reject("failure : weak connection");
    }
  });
}

savetoDb("apna college") //phle first data save karao
  .then(() => {
    //agar data save hogya
    console.log("promise was resolved");
    return savetoDb("helloworld"); //fir second data save karao
  })
  .then(() => {
    //agar 2 data save hogya 
    console.log("data2 saved");
    return savetoDb("wow"); //fir 3 data save karao
  })
  .then(() => {
    //agar 3 bhi save hogya 
    console.log("data3 saved");
  })

  .catch(() => {
    //kahi bhi error aaye to print this below
    console.log("promise was rejected");
  });

//promise chaining
