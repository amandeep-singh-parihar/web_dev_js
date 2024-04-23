let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); //hum action wale URL pe nahi jayenge

  console.dir(form);

  let user = this.elements[0]; //good way of accessing the inner elements of the form
  let pass = this.elements[1];
  //good way of accessing the inner elements of the form

  console.log(user.value);
  console.log(pass.value);

  //   let inp = document.querySelector(".user");
  //   console.log(inp.value); //this is the value we inputed in the form

  //   let pass = document.querySelector(".pass");
  //   console.log(pass.value);
});
