let randomNumber1 = Math.floor(Math.random()*6)+1;

function changeImgs(){
    if(randomNumber1 === 1){
        document.getElementsById("img1").setAttribute("img1","images/dice1.png");
    } 
    else if (randomNumber1 === 2){
        document.getElementsById("img1").setAttribute("img1","images/dice1.png");
    } 
    else if (randomNumber1 === 3){
        document.getElementsById("img1").setAttribute("img1","images/dice1.png");
    } 
    else if (randomNumber1 === 4){
        document.getElementsById("img1").setAttribute("img1","images/dice1.png");
    } 
    else if (randomNumber1 === 5){
        document.getElementsById("img1").setAttribute("img1","images/dice1.png");
    } 
    else {
        document.getElementsById("img1").setAttribute("img1","images/dice1.png");
    }
} document.addEventListener(window.onload,changeImgs,false);

console.log(randomNumber1);