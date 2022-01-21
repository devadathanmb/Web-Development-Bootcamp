const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedpattern = [];
var level = 0;

//Function to generate the sequence
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  level++;
  $("#level-title").text("Level " + level);
}


//Index variable keeps track of the user's position in the sequence
var index = 0;

// On clicking the buttons
$(".btn").click(function(event) {
  var userChosenColor = event.target.id;
  userClickedpattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userChosenColor);
});


//Function to play sound
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


//Function to animate click
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


//Start the game when any key is pressed
var hasGameStarted = false;
$(document).keypress(function() {
  if (hasGameStarted === true) {
    return;
  }
  nextSequence();
  hasGameStarted = true;
});


//Function to checck if the user sequence matches the random sequence
function checkAnswer(color) {
  if (gamePattern[index] != color) {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    userClickedpattern = [];
    gamePattern = [];
    index = 0;
    level = 0;
    hasGameStarted = false;
  } else if (gamePattern[index] == color) {
    index++;
    if (index == gamePattern.length) {
      index = 0;
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  }
}
