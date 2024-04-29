// let div = document.querySelector("div");
// console.log(div);

// let id=div.getAttribute("id");
// console.log(id);

// let name=div.getAttribute("name");
// console.log(name);


// let para=document.querySelector(".para");

// let p=para.setAttribute("class","newClass");

// // console.log(p);

// let div=document.querySelector("div");
// div.style.backgroundColor="current";
// div.style.fontSize="20px"

// div.innerText="hello";

// let newBtn=document.createElement("button");
// newBtn.innerText="click me!";
// console.log(newBtn);

// let p=document.querySelector("p");
// p.after(newBtn);

let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>Hi, I am new</i>";

document.querySelector("body").prepend(newHeading);
newHeading.remove();

