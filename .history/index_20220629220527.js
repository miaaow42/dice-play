let randomNumber1 = Math.floor(Math.random()*6)+1;

let randomNumber2 = Math.floor(Math.random()*6)+1;

// console.log(randomNumber1);
function changeImgs (){

    if(randomNumber1 === 1)
    document.getElementsByClassName("img1").src =  "dice1.png";
}
