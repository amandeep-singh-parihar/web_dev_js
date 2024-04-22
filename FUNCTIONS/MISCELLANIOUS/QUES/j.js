// let arr = [1, 2, 3, 4, 5,7, 6, 8, 9, 10];

// const arrayAverage = (arr) => {
//     let sum=0;
//     for(let i=0;i<arr.length;i++)
//     {
//         sum+=arr[i];
//     }

//     return sum/arr.length;
// };

// let ans=arrayAverage(arr);
// console.log(ans);

//2

// let isEven = (num) => {
//     if(num%2==0)
//     {
//         return true;
//     }else{
//         return false;
//     }
// };

// let ans=isEven(5);
// console.log(ans);


//3

// const object={
//     message: 'hello world',

//     logMessage()
//     {
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage,1000);

//4
let length=4;
function callback(){
    console.log(this.length);
}

const object={
    length:5,
    method(callback){
        callback();
    },
};

object.method(callback,1,2);
