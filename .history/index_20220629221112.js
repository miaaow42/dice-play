let randomNumber1 = Math.floor(Math.random()*6)+1;

let randomNumber2 = Math.floor(Math.random()*6)+1;

// console.log(randomNumber1);

document.addEventListener("load",function(){
    if(randomNumber1 === 1){
        document.getElementsByClassName("img1").src = "dice1.png";
    } 
    else if (randomNumber1 === 2){
        document.getElementsByClassName("img1").src = "dice2.png";
    } 
    else if (randomNumber1 === 3){
        document.getElementsByClassName("img1").src = "dice3.png";
    } 
    else if (randomNumber1 === 4){
        document.getElementsByClassName("img1").src = "dice4.png";
    } 
    else if (randomNumber1 === 5){
        document.getElementsByClassName("img1").src = "dice5.png";
    } 
    
})