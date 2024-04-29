// let btn = document.querySelector("button");

// let fImg = document.querySelector("#abcd");
// let sImg = document.querySelector(".abcd");

// btn.addEventListener("click", () => {
//   btn.style.backgroundColor = "green";
//   //   btn.style.color = "green";
//   btn.textContent += " starting...";
// });

// let h = document.querySelector("h1");
// h.addEventListener("click",()=>{
//     h.classList.add("makeitred");
// })

let h1 = document.createElement("h1");
h1.textContent = "Don't touch";
document.querySelector("body").appendChild(h1);
h1.addEventListener("mouseover", () => {
  h1.textContent = "Welcome to death circle";
  h1.classList.add("makeitred");
});
