let randomNumber1 = Math.floor(Math.random()*6)+1;



window.onload = function changeImgs1(){
    let img = document.getElementById("img1")
    if(randomNumber1 === 1){
        img.src = 'images/dice1.png';
    } 
    else if (randomNumber1 === 2){
        img.src = 'images/dice2.png';
    } 
    else if (randomNumber1 === 3){
        img.src = 'images/dice3.png';
    } 
    else if (randomNumber1 === 4){
        img.src = 'images/dice4.png';
    } 
    else if (randomNumber1 === 5){
        img.src = 'images/dice5.png';
    } 
    else {
        img.src = 'images/dice6.png';
    }
} 

let randomNumber2 = Math.floor(Math.random()*6)+1;

window.onload = function changeImgs2(){
    let img2 = document.getElementById("img2")
    if(randomNumber2 === 1){
        img2.src = 'images/dice1.png';
    } 
    else if (randomNumber2 === 2){
        img2.src = 'images/dice2.png';
    } 
    else if (randomNumber2 === 3){
        img2.src = 'images/dice3.png';
    } 
    else if (randomNumber2 === 4){
        img2.src = 'images/dice4.png';
    } 
    else if (randomNumber2 === 5){
        img2.src = 'images/dice5.png';
    } 
    else {
        img2.src = 'images/dice6.png';
    }
} 

console.log(randomNumber1,randomNumber2);