let prg = document.querySelector("#progress");
let dc = document.querySelector("#complete");

let count = 0;
let int = setInterval(function () {
  if (count === 100) {
    clearInterval(int);
    dc.style.opacity=1;
  }
  count++;
  prg.style.width = count + "%";
}, 100);
