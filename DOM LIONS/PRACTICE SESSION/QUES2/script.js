let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let scr1 = document.querySelector("#img1").src;
  let scr2 = document.querySelector("#img2").src;

  document.querySelector("#img1").src = scr2;
  document.querySelector("#img2").src = scr1;
});
