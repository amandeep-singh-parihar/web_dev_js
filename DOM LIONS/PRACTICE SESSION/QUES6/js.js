// let about = document.querySelector("#about");
// let home = document.querySelector("#home");
// let contact = document.querySelector("#contact");

// let abouttext = document.querySelector("#abouttext");
// let hometext = document.querySelector("#hometext");
// let contacttext = document.querySelector("#contacttext");

// about.addEventListener("click", () => {
//   removeAllTxt();
//   abouttext.style.display = "block";
// });

// home.addEventListener("click", () => {
//   removeAllTxt();
//   hometext.style.display = "block";
// });

// contact.addEventListener("click", () => {
//   removeAllTxt();
//   contacttext.style.display = "block";
// });

// function removeAllTxt() {
//   document.querySelectorAll("h3").forEach(function (h3) {
//     h3.style.display = "none";
//   });
// }

let divs = document.querySelectorAll(".tab");
let texts = document.querySelectorAll("h3");

texts[0].style.display = "block";
texts[0].style.width = "50%";

divs.forEach(function (div, index) {
  div.addEventListener("click", () => {
    hideAllText();
    texts[index].style.display = "block";
    texts[index].style.widows = "50%";
  });
});

function hideAllText() {
  texts.forEach(function (text) {
    text.style.display = "none";
  });
}
