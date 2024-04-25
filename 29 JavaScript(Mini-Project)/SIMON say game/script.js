// creating the array of storing the color values
let gameSeq = [];
let userSeq = [];

//these are the buttons in which these 4 colors which are of our keys
let btns = ["red", "yellow", "green", "purple"];

//initially the game is not started so the value of it is false
let started = false;
let level = 0; //initially level is zero

let h2 = document.querySelector("h2");

//key press to start the game
document.addEventListener("keypress", function () {
  //if game is not started yet
  if (started == false) {
    started = true;
    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  //by this timeout we can remove the class so it give a flashing effect
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

// this for increase the value of level and the buttons flash
function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  //chossing random color
  let randIdx = Math.floor(Math.random() *4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  btnFlash(randBtn);
}

//to check if the user and generated colors are same or not
function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  //   console.log(this);
  let btn = this;
  btnFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}