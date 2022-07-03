let randomNumber1 = Math.floor(Math.random()*6)+1;

let randomNumber2 = Math.floor(Math.random()*6)+1;

// window.addEventListener("load",function(){
//     console.log(randomNumber2);
// })

let e1 = window.onload = function changeImgs1(){
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
