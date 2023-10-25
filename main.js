const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ['red','yellow','brown','green','purple','blue','orange'];

body.style.background ='black';

function bgcolorchange(){
    const colorIndex = parseInt(Math.random()*color.length-1);
    body.style.background = color[colorIndex];
}

button.addEventListener('click',bgcolorchange);