// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   console.dir(this);
// });

// function changeColor() {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "blue";
// }

// document.querySelector("button").addEventListener("click", changeColor);

// document.querySelector("p").addEventListener("click", changeColor);

// document.querySelector("h1").addEventListener("click", changeColor);

// document.querySelector("h3").addEventListener("click", changeColor);

// btn.addEventListener("dblclick", function (event) {
//   console.log(event);
//   console.log("button cliked");
// });

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// mouse event

let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
    console.log("key = ",event.key);
    console.log("code = ",event.code);
    console.log("key was relesed");
  });

// inp.addEventListener("keyup", function () {
//   console.log("key was relesed");
// });
