const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ['red','yellow','brown','green','purple','blue','orange'];

body.style.background ='black';

function bgcolorchange(){
    // const colorIndex = parseInt(Math.random()*color.length-1);
    // body.style.background = color[colorIndex];
    //random number generation of any size 
    const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

    indexnum = genRanHex(6);
    body.style.background = `#${indexnum}`
    

}

button.addEventListener('click',bgcolorchange);