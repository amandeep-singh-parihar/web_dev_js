let start = document.querySelector("#start");
let h1 = document.querySelector("h1");
let count = 1;
var int;
start.addEventListener("click", () => {
    int=setInterval(() => {
    h1.classList.add("st");
    h1.textContent = count;
    count++;
  },1000);
});


let stp = document.querySelector("#stop");
stp.addEventListener("click", () => {
  clearInterval(int);
});
