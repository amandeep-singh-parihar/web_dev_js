/* HIGER ORDER FUNCTIONS

a function that does one or both:

-> takes one or more multiple function as arguments

-> return a function

*/

// function multipleGreet(func,count)
// {
//     for(let i=1;i<=count;i++)
//     {
//         func();
//     }
// }

// let greet=function()
// {
//     console.log("hello");
// }

// multipleGreet(greet,1);


// let request="even";

// function oddOrEvenFactory(request)
// {
//     if(request=="odd")
//     {
//         let odd=function(n)
//         {
//             console.log(!(n%2==0));
//         }
//         return odd;
//     }else if(request=="even"){
//         let even=function(n)
//         {
//             console.log(n%2==0);
//         }
//         return even;
//     }else{
//         console.log("wrong choice");
//     }
// }


// // Write a JavaScript function that returns array elements larger than a number.
// let arr=[1,2,3,4,5,6,7,8,9,10];
// function larger(arr,num)
// {
//     let result=[];
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]>num)
//         {
//             result.push(arr[i]);
//             // console.log(arr[i]);
//         }
//     }
//     return result;
// }

// // let ans=larger(arr,5);
// // console.log(ans);



// // . Write a JavaScript function to extract unique characters from a string.
// // Example: str = “abcdabcdefgggh” ans = “abcdefgh

// function ext(str)
// {
//     let uniqueChar='';
//     for(let char of str)
//     {
//         if(uniqueChar.indexOf(char)===-1)
//         {
//             uniqueChar+=char;
//         }
//     }
//     return uniqueChar;
// }

// // let str="abcdabcdefgggh";
// // console.log(ext(str));


// // Write a JavaScript function that accepts a list of country names as input and 
// // returns the longest country name as output.
// // Example : country = ["Australia", "Germany", "United States of America"] output : 
// // "United States of America"

// let country = ["Australia", "Germany", "United States of America"] 
// function longest(arr)
// {
//     let longestName='';
//     for(let name of country)
//     {
//         if(name.length>longestName.length)
//         {
//             longestName=name;
//         }
//     }
//     return longestName;
// }

// let ans=longest(country);
// console.log(ans);






