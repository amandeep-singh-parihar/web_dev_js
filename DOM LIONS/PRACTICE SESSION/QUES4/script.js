let add = document.querySelector(".add");
let remove = document.querySelector(".remove");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

function addItem() {
  if (inp.value.trim() === "") {
    //nothing
  } else {
    let li = document.createElement("li");
    li.textContent = inp.value;
    ul.appendChild(li);
    inp.value = "";
  }
}

add.addEventListener("click", addItem);

inp.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addItem();
  }
});

remove.addEventListener("click", () => {
  let lastli = ul.lastChild;
  if (lastli) {
    ul.removeChild(lastli);
  } else {
  }
});
