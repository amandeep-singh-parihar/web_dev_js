let inp = document.querySelector(".inp");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = "";
});

ul.addEventListener("click", function (event) {
  //   console.dir(event.target.nodeName);
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    // console.log(listItem);
    console.log("delete");
  }
});

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//   delBtn.addEventListener("click", function () {
//     let par=this.parentElement;
//     console.log(par);
//     par.remove();
//   });
// }

//event delegation => hamre new elements pe bhi existing event listener kaam kare is called event delegation
//we use bubbling here
