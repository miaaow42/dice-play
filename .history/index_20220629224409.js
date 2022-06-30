let randomNumber1 = Math.floor(Math.random()*6)+1;

function changeImgs(){
    let img = getElementsByClassName("img1");
    if(randomNumber1 === 1){
        img.setAttribute("src","images/dice1.png");
    } 
    else if (randomNumber1 === 2){
        img.setAttribute("src","images/dice2.png");
    } 
    else if (randomNumber1 === 3){
        img.setAttribute("src","images/dice3.png");
    } 
    else if (randomNumber1 === 4){
        img.setAttribute("src","images/dice4.png");
    } 
    else if (randomNumber1 === 5){
        img.setAttribute("src","images/dice5.png");
    } 
    else {
        img.setAttribute("src","images/dice6.png");
    }
} document.addEventListener(window.onload,changeImgs,false);

console.log(randomNumber1);