// for(let i=1;i<=5;i++)
// {
//     console.log("aman deep");
// }

//calculate sum of 1 to 5

// let sum=0;
// let n=10;
// for(let i=1;i<=n;i++)
// {
//     sum+=i;
// }
// console.log(sum);

// let newsum=(5*(5+1))/2;

// console.log(newsum);

//while loop

// let sum=0;
// let n=5;
// let i=1;
// while(i<=n)
// {
//     sum+=i;
//     i++;
// }
// console.log(sum);

//FOR-OF LOOP             and           FOR-IN
//string and array                    obejects and array

// let str="what";
// for(let i of str)
// {
//     console.log(i);
// }

// let student={
//     name:"amandeep",
//     age:20,
//     cgpa:10,
//     isPass:true
// };

// for(let i in student)
// {
//     console.log(student[i]);
// }

//sum from 0 to 100
// for(let i=0;i<=100;i++)
// {
//     if(i%2===0)
//     {
//         console.log(i);
//     }
// }

//gamenumber  2

let gameNum = 10;
let userNum = prompt("Guess the game number : ");
console.log(userNum);


while(userNum!=gameNum)
{
    userNum=prompt("You entered the wrong number Guess again : ");
}
console.log("congratulations , you entered the right number");

