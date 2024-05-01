let txtarea = document.querySelector("textarea");
let counter = document.querySelector("#counter");
let h3 = document.querySelector("h3");

txtarea.addEventListener("input", () => {
  if (counter.textContent >= 50) {
    h3.classList.add("red");
    h3.textContent = "Maximum limit reached !!!";
  } else {
    h3.classList.remove("red");
    counter.textContent = txtarea.value.length;
  }
//   txtarea.addEventListener("keydown", (event) => {
//     if (event.key === "Backspace") {
//         console.log("yes");
//     }
//   });
});

// txtarea.addEventListener("keydown", (event) => {
//   if (event.key === "Backspace") {
//     console.log("yes");
//   }
// });


