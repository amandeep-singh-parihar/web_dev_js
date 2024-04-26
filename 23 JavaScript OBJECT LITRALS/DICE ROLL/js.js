let diceRoll = prompt("enter roll to roll a dice");

while (true) {
  if (diceRoll == "quit") {
    console.log("user quits");
    break;
  }

  if (diceRoll == "roll") {
    let diceNum = Math.floor(Math.random() * 6) + 1;
    console.log(diceNum);
  }else{
    console.log("Invalid input. Please enter 'roll' or 'quit'.");
  }
  diceRoll = prompt("enter roll again to roll a dice");
}
