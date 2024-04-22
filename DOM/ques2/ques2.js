let divs=document.querySelectorAll(".box");
// console.dir(divs.innerText);

let idx=1;
for(div of divs)
{
    div.innerText=`new unique value ${idx++}`
    // console.log(div.innerText);
}


