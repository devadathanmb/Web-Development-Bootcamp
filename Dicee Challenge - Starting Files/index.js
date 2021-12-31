var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var dice1Image = document.querySelector(".img1");
dice1Image.setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var dice2Image = document.querySelector(".img2");
dice2Image.setAttribute("src", "images/dice" + randomNumber2 + ".png");

var heading = document.querySelector("h1");

if(randomNumber1 > randomNumber2){
  heading.innerHTML = "🚩Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
  heading.innerHTML = "Player 2 Wins! 🚩";
}
else{
  heading.innerHTML = "Draw!";
}
