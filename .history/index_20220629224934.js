let randomNumber1 = Math.floor(Math.random()*6)+1;

function changeImgs(){
    let img = getElementsByClassName("img1");
    if(randomNumber1 === 1){
        img.src = "images/dice1.png";
    } 
    else if (randomNumber1 === 2){
 
    } 
    else if (randomNumber1 === 3){
  
    } 
    else if (randomNumber1 === 4){
    
    } 
    else if (randomNumber1 === 5){
        
    } 
    else {
      
    }
} document.addEventListener(window.onload,changeImgs,false);

console.log(randomNumber1);