let randomNumber1 = Math.floor(Math.random()*6)+1; // get a random number between 1-6

let randomImage = "dice" + randomNumber1 + ".png"; // random images dice1.png-dice6.png

let randomImageSource = "images/" + randomImage; // images/dice1.png - images/dice6.png (because it's inside images folder)

let image1 = document.querySelectorAll("img")[0]; // select all img tag, because we have 2 img tags, so start at 0

image1.setAttribute("src", randomImageSource); // setAttribute method


let randomNumber2 = Math.floor(Math.random()*6)+1;

let randomImage2 = "dice" + randomNumber2 + ".png";

let randomImageSource2 = "images/" + randomImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"; // we only have one h1 tag, so using querySelector
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}


// My very basic solution!
// window.addEventListener("load",function(){
//     e1();
//     e2();
//     changeTitle();
//     console.log(randomNumber1);
//     console.log(randomNumber2);
// })

// let e1 = window.onload = function changeImgs1(){
//     let img = document.getElementById("img1")
//     if(randomNumber1 === 1){
//         img.src = 'images/dice1.png';
//     } 
//     else if (randomNumber1 === 2){
//         img.src = 'images/dice2.png';
//     } 
//     else if (randomNumber1 === 3){
//         img.src = 'images/dice3.png';
//     } 
//     else if (randomNumber1 === 4){
//         img.src = 'images/dice4.png';
//     } 
//     else if (randomNumber1 === 5){
//         img.src = 'images/dice5.png';
//     } 
//     else {
//         img.src = 'images/dice6.png';
//     }
// } 


// let e2 = window.onload = function changeImgs2(){
//     let img2 = document.getElementById("img2")
//     if(randomNumber2 === 1){
//         img2.src = 'images/dice1.png';
//     } 
//     else if (randomNumber2 === 2){
//         img2.src = 'images/dice2.png';
//     } 
//     else if (randomNumber2 === 3){
//         img2.src = 'images/dice3.png';
//     } 
//     else if (randomNumber2 === 4){
//         img2.src = 'images/dice4.png';
//     } 
//     else if (randomNumber2 === 5){
//         img2.src = 'images/dice5.png';
//     } 
//     else {
//         img2.src = 'images/dice6.png';
//     }
// }

// function changeTitle (){
//     let t = document.getElementById("tittleName");
//     if(randomNumber1>randomNumber2){
//         t.innerHTML = "Player 1 Wins!";
//     }
//     else if (randomNumber2>randomNumber1){
//         t.innerHTML = "Player 2 Wins!";
//     }
//     else {
//         t.innerHTML = "Draw!";
//     }
// }
