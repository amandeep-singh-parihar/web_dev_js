// let body=document.querySelector('body');

let para1=document.createElement('p');
para1.innerText="Hey I'm red!";

document.querySelector('body').append(para1);

para1.classList.add("red");

let para2=document.createElement('p');
para2.innerText="I'm blue!";
document.querySelector('body').append(para2);
para2.classList.add("blue");

let div=document.createElement('div');
document.querySelector('body').append(div);
div.classList.add("prop");

let h1=document.createElement('h1');
h1.innerText="I'm in a div";
div.append(h1);

let p=document.createElement('p');
p.innerText="ME TOO!";
div.append(p);







