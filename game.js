// alert("done?");
// $(document).ready(function() {
//   $("h1").text("BYE");
// });
var gamePattern = [];

var array = ["red", "blue", "green", "yellow"];


function nextSequence()
{
  var rand = Math.random();

  rand= Math.floor(rand*4);

  var randomChosenColor = array[rand];

  gamePattern.push(randomChosenColor);

  $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
