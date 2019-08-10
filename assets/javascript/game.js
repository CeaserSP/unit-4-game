$(document).ready(function(){
// Variable declarations
var wins= 0;
var losses= 0;
var userScore= 0;


// Button values Math.floor(Math.random() * ((y-x)+1) + x);
// target score
var targetScore= Math.floor(Math.random() * ((120 - 19)+1)+ 19);
// document.getElementById("#targetScore").text(targetScore);
$("#targetScore").text(targetScore);
// Crystal values
var button1= Math.floor(Math.random() * ((12 - 1)+1)+ 1);
var button2= Math.floor(Math.random() * ((12 - 1)+1)+ 1);
var button3= Math.floor(Math.random() * ((12 - 1)+1)+ 1);
var button4= Math.floor(Math.random() * ((12 - 1)+1)+ 1);

// click events
if (targetScore > userScore){
$("#imageR").click(function(){
  userScore += button1;
  $("#userScore").html(userScore);
  });

  $("#imageW").click(function(){
    userScore += button2;
  $("#userScore").html(userScore);
});
$("#imageB").click(function(){
  userScore += button3;
  $("#userScore").html(userScore);
});
$("#imageBL").click(function(){
  userScore += button4;
  $("#userScore").html(userScore);
});

// if win
if(userScore === targetScore){
  wins++
  $("#win").html(wins);
  alert("You Win!")
}

// if lose
if(userScore > targetScore){
  losses++
  $("#lose").html(losses);
  alert("You lose!");
}
};
});