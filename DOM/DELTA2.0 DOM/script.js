// let smallImages = document.getElementsByClassName("oldImg");

// for (let i = 0; i < smallImages.length; ++i) {
//   smallImages[i].src = "spider man.png";
//   console.log(`value of image no. ${i} is changed.`);
// }


let links=document.querySelectorAll('.box a');

for(let i=0;i<links.length;i++)
{
    links[i].style.color="green";
    //ase jo styling jo set hui hai wo inline style me set hua hai na ki css ki styling me
}
