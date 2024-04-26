let max=prompt("enter the max number"); //10
console.log(max);

const ranNum=Math.floor(Math.random()*max)+1;

let guess=prompt("guess the number");
while(true)
{
    if(guess=="quit")
    {
        console.log("user quit");
        break;
    }
    if(guess==ranNum)
    {
        console.log(`You guessed the right number ${ranNum}`);
        break;
    }else if(guess<ranNum){
        guess=prompt("Hint : your guess was too small. please try again");
    }else{
        guess=prompt("Hint : your guess was too large. please try again");
    }
}