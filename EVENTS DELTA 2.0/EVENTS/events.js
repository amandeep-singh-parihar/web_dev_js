let btns = document.querySelectorAll("#btn1");

// btn1.onclick = function () {
//   alert("button was clicked");
// };

// function sayHello()
// {
//   alert("hello !");
// }

// for (btn of btns) {
//   btn.onclick = () => {
//     alert("hello !");
//   };
//   btn.onmouseenter = () => {
//     console.log("you entered a button");
//   };
// }

// btn1.onclick = () =>{
//     console.log("btn1 was clicked");
//     let a=25;
//     a++;
//     console.log(a);
// }

// let box=document.querySelector(".box");

// box.onmouseover=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
//     // console.log("box was clicke");
// };

//event listners se hum same event pe multiple kaam kara skte hai
//syntax

//element.addEventListener(event,callback)

for (btn of btns) {
  // btn.addEventListener("click", () => {
  //   console.log("hello");
  // });
  // btn.addEventListener("click", () => {
  //   console.log("apna collge");
  // });
  btn.addEventListener("dblclick", () => {
    console.log("you double clicked me");
  });
}

// btn1.addEventListener("click", () => {
//   console.log("button 1 was clicked handler-1");
// });

// btn1.addEventListener("click", () => {
//   console.log("buttone 1 was clicked handler-2");
// });

// const handler3 = () => {
//   console.log("buttone 1 was clicked handler-3");
// };

// btn1.addEventListener("click", () => {
//   console.log("buttone 1 was clicked handler-4");
// });

//remove karane k liye uss function ko kisi variable me safe kara lo. agr aisa nahi karoge to remove wala or add wala do alag function ban jayenge memory me bhale wo kaam same kare.

//the call back reference should be same to remove
// btn1.removeEventListener("click", handler3);
