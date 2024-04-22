
// function sum1ton(n){
//     let sum=0;
//     for(let i=1;i<=n;i++)
//     {
//         sum+=i;
//     }
//     return sum;
// }

// let output=sum1ton(100);
// console.log(output);



let arr=["aman","deep","","parihar"];
function con(arr)
{
    let str="";
    for(i of arr)
    {
        str+=i;
    }
    return str;
}

let output=con(arr);
console.log(output);