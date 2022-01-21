const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedpattern = [];
var level = 0;
function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  level++;
  $("#level-title").text("Level " + level);
}

var numberOfClicks = -1;
$(".btn").click(function(event){
  numberOfClicks++;
  var userChosenColor = event.target.id;
  userClickedpattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkUserClicks(userChosenColor);
  // console.log(userClickedpattern);
});

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

var hasGameStarted = false;
$(document).keypress(function(){
  if(hasGameStarted === true){
    return;
  }
  nextSequence();
  hasGameStarted = true;
});

function checkUserClicks(color){
  if(gamePattern[numberOfClicks] != userClickedpattern[numberOfClicks]){
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);
    #("#level-title").text("Game Over, Press Any Key to Restart");
    numberOfClicks = -1;
    userClickedpattern = [];
    gamePattern = [];
  }
}
