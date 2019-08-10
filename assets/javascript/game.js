$(document).ready(function () {
  // Variable declarations
  var wins = 0;
  var losses = 0;
  var userScore = 0;


  // Target & Button values Math.floor(Math.random() * ((y-x)+1) + x);
  // target score
  var targetScore = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
  $("#targetScore").text(targetScore);

  // Crystal values
  var button1 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
  var button2 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
  var button3 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
  var button4 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);

  // click events
  $("#imageR").click(function () {
    userScore += button1;
    $("#userScore").html(userScore);
    check();
  });
  $("#imageW").click(function () {
    userScore += button2;
    $("#userScore").html(userScore);
    check();
  });
  $("#imageB").click(function () {
    userScore += button3;
    $("#userScore").html(userScore);
    check();
  });
  $("#imageBl").click(function () {
    userScore += button4;
    $("#userScore").html(userScore);
    check();
  });
  // function to call these during click events
  function check() {
    // if win
    if (userScore === targetScore) {
      wins++
      $("#win").html(wins);
      alert("You Win!")
      console.log(wins)
      reset();
    };

    // if lose
    if (userScore > targetScore) {
      losses++
      $("#lose").html(losses);
      alert("You lose!");
      console.log(losses)
  reset();
    };
  };
  function reset(){
    userScore=0;
    targetScore= Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    $("#targetScore").text(targetScore);
  }
});