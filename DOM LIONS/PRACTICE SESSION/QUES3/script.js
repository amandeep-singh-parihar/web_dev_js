//preventDefault => used to prevent the default action of the browsers

//one way
// let inp1=document.querySelector("#inp1");
// let inp2=document.querySelector("#inp2");
// let h4=document.querySelector("h4");

// document.querySelector("form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   if(inp1.value === '' || inp2.value ==='')
//   {
//     h4.textContent="ERROR: input fields can not be blank"
//     h4.classList.add("red");

//   }else{
//     h4.textContent="";
//   }
// });

// two way
var inps = document.querySelectorAll('input[type="text"]');
let h4 = document.querySelector("h4");

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  for (let i = 0; i < inps.length; i++) {
    if (inps[i].value.tirm() === "") {
      h4.textContent = "ERROR: input fields can not be blank";
      h4.classList.add("red");
      break;
    } else {
      h4.textContent = "";
    }
  }
});
