//ques 2

// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   btn.style.backgroundColor = "green";
// });

//ques 3

let txt = document.querySelector(".txt");
let h = document.querySelector("h2");

txt.addEventListener("change", function () {
  h.innerText = txt.value;
});
