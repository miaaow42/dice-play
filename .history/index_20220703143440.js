let randomNumber1 = Math.floor(Math.random()*6)+1;

let randomNumber2 = Math.floor(Math.random()*6)+1;

window.addEventListener("load",function(){
    e1();
    e2();
    changeTitle();
    console.log(randomNumber1);
    console.log(randomNumber2);
})

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


let e2 = window.onload = function changeImgs2(){
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

function changeTitle (){
    
    if(randomNumber1>randomNumber2){
        let t1 = "Player 1 Wins!"
        document.getElementsByTagName("h1").innerHTML = t1;
    }
    else if (randomNumber2>randomNumber1){
       let t2 = "Player 2 Wins!";
        document.getElementsByTagName("h1").innerHTML = t2;
    }
    else {
       let t3 = "Draw!";
       document.getElementsByTagName("h1").innerHTML = t3;
    }
}
