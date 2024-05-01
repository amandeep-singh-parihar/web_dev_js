let input = document.querySelector("input");
let data = [
  {
    name: "Harsh",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Harshita",
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Harshika",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "sheeta",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sheetal",
    src: "https://images.unsplash.com/photo-1509868918748-a554ad25f858?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ayush",
    src: "https://images.unsplash.com/photo-1607957599370-f40c79556364?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ayushi",
    src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

var pers = "";
data.forEach(function (elem) {
  pers += `<div class="person">
    <div class="img">
        <img src="${elem.src}"
            alt="">

    </div>
    <h4>${elem.name}</h4>
</div>`;
});

document.querySelector(".people").innerHTML = pers;

input.addEventListener("input", () => {
  let inputValue = input.value.toLowerCase();
  let matching = data.filter((e) => {
    return e.name.toLocaleLowerCase().startsWith(inputValue);
  });
  let newusers = "";
  matching.forEach(function (elem) {
    newusers += `<div class="person">
      <div class="img">
          <img src="${elem.src}"
              alt="">
  
      </div>
      <h4>${elem.name}</h4>
  </div>`;
  });
  document.querySelector(".people").innerHTML = newusers;
});
