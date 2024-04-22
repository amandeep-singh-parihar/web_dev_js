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
  console.log("code = ", event.code);
  if (event.code == "ArrowUp") {
    console.log("character moves forward");
  } else if (event.code == "ArrowDown") {
    console.log("character moves downward");
  } else if ((event.code = "ArrowLeft")) {
    console.log("character moves left");
  } else if (event.code == "ArrowRight") {
    console.log("character moves right");
  } else {
    console.log("this is not a arrow");
  }
});

// inp.addEventListener("keyup", function () {
//   console.log("key was relesed");
// });
