let randomNumber1 = Math.floor(Math.random()*6)+1;

let randomNumber2 = Math.floor(Math.random()*6)+1;

// console.log(randomNumber1);

document.addEventListener("load",function(){
    if(randomNumber1 === 1){
        document.getElementsByClassName("img1").src = "images/dice1.png";
    } 
    else if (randomNumber1 === 2){
        document.getElementsByClassName("img1").src = "images/dice2.png";
    } 
    else if (randomNumber1 === 3){
        document.getElementsByClassName("img1").src = "images/dice3.png";
    } 
    else if (randomNumber1 === 4){
        document.getElementsByClassName("img1").src = "images/dice4.png";
    } 
    else if (randomNumber1 === 5){
        document.getElementsByClassName("img1").src = "images/dice6.png";
    } 
    
})