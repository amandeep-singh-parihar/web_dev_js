let p = document.querySelector("p");

p.addEventListener("click", function () {
  console.log("parah was clicked");
});

let box = document.querySelector(".box");
box.addEventListener("mouseover", () => {
  console.log("mouse hovered over");
});
