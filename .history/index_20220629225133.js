let randomNumber1 = Math.floor(Math.random()*6)+1;

function changeImgs(){
    let img = getElementsById("img1");
    if(randomNumber1 === 1){
        img.src = 'images/dice1.png';
    } 
    else if (randomNumber1 === 2){
        img.src = "images/dice1.png";
    } 
    else if (randomNumber1 === 3){
        img.src = "images/dice1.png";
    } 
    else if (randomNumber1 === 4){
        img.src = "images/dice1.png";
    } 
    else if (randomNumber1 === 5){
        img.src = "images/dice1.png";
    } 
    else {
        img.src = "images/dice1.png";
    }
} document.addEventListener(window.onload,changeImgs,false);

console.log(randomNumber1);