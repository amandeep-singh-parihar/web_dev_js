let about = document.querySelector("#about");
let home = document.querySelector("#home");
let contact = document.querySelector("#contact");

let abouttext = document.querySelector("#abouttext");
let hometext = document.querySelector("#hometext");
let contacttext = document.querySelector("#contacttext");

about.addEventListener("click", () => {
  removeAllTxt();
  abouttext.style.display = "block";
});

home.addEventListener("click", () => {
  removeAllTxt();
  hometext.style.display = "block";
});

contact.addEventListener("click", () => {
  removeAllTxt();
  contacttext.style.display = "block";
});

function removeAllTxt() {
  document.querySelectorAll("h3").forEach(function (h3) {
    h3.style.display = "none";
  });
}
