const button=document.querySelector("button");
const body=document.querySelector("body");
const color=["violet","red","blue","orange","yellow","indigo"];
document.addEventListener('click',function(){
    body.style.background=color[Math.floor(Math.random()*color.length)];
})