let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); //hum action wale URL pe nahi jayenge
});
//   console.dir(form);

//   let user = this.elements[0]; //good way of accessing the inner elements of the form
//   let pass = this.elements[1];
//   //good way of accessing the inner elements of the form

//   console.log(user.value);
//   console.log(pass.value);

//   //   let inp = document.querySelector(".user");
//   //   console.log(inp.value); //this is the value we inputed in the form

//   //   let pass = document.querySelector(".pass");
//   //   console.log(pass.value);
// });

//more events for the form

//change events=> the change events occrus when the value of an elements has been changed (only works on <input>,<textarea> and <select> elements).

//input events
//the input event fires when the value of an <input>,<select> or <textarea> element has been changed

let user = document.querySelector(".user");

user.addEventListener("change", function () {
  console.log("input changed");
  console.log("final value = ", user.value);
});

user.addEventListener("input", function () {
  console.log("input event");
  console.log("final value = ", user.value);
});