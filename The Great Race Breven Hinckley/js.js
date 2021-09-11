/*
  The Great Race JavaScript Page
  Filename: js.js
  Author:   Breven G. Hinckley
  Date:     10-10-17
  Comment: The only thing that I did different from what you requested was I made them instantly start racing once you click.
           I found it to be a little off putting to people to have to click twice to start the race. However, once the first
           race is done I made it so they are reset to their default racing positions (when you click the winner) and they do
           not begin racing right away, only when you click start or any of the onclick events that start the race (which I
           take away during the race so they don't interfer with the race, still don't bring back when there is a declared
           winner because I only want you to click on the winner to reset them, then when they are reset to default racing
           positions full functionality to onclick events is restored to start the race any way you would like.).
*/

// Declaring Global Variables / Resetting both racers to position 0
document.getElementById("racerKirby").style.left = 0;
document.getElementById("racerMario").style.left = 0;
var racerKirby = 0;
var racerMario = 0;
var myRace;

// Function to start the timer which in turn starts the main racing function. Also hides and displays various things.
function startRace() {
  myRace = setInterval(go, 30); // lower timer makes the race look smoother, used smaller random numbers.
  document.getElementById("groundedK").style.display = "none";
  document.getElementById("groundedM").style.display = "none";
  document.getElementById("raceFlag").style.display = "block"; // replacing all onclick event handlers in this function so no one can click them again during the race
  document.getElementById("startFlag").style.display = "none";
  document.getElementById("greenlight").style.display = "block";
  document.getElementById("redlight").style.display = "none";
  document.getElementById("starts").style.visibility = "hidden";
  document.getElementById("racerKirby").style.display = "inline-block";
  document.getElementById("racerMario").style.display = "inline-block";
}

// Main race function. Each racer receives a seperate random number between 1 and 5 that adds to their total moving them left each interval until 1300px or above.
function go() {
  var randKirby = Math.round(Math.random() * 5);
  var randMario = Math.round(Math.random() * 5);
  var moveIt = racerKirby + randKirby;
  racerKirby += randKirby;
  var maxIt = racerMario + randMario;
  racerMario += randMario;
  document.getElementById("racerKirby").style.left = moveIt + "px";
  document.getElementById("racerMario").style.left = maxIt + "px";
  /* Both if statements do the same thing, difference is they display a different picture of winner. If statements reset all my variables so they are ready
     to be used again if someone clicks the winners picture. Second red light is used that doesn't have an onclick event because I don't want anything to
     reset the race other than clicking on the winners picture. Once that happens first red light is displayed again. Basically eliminating any possible bugs. */
  if (racerKirby >= 1300) {
    clearInterval(myRace);
    document.getElementById("redlightSecond").style.display = "block";
    document.getElementById("greenlight").style.display = "none";
    document.getElementById("kirbyWin").style.display = "block";
    moveIt = 0;
    racerKirby = 0;
    maxIt = 0;
    racerMario = 0;
  }
  if (racerMario >= 1300) {
    clearInterval(myRace);
    document.getElementById("redlightSecond").style.display = "block";
    document.getElementById("greenlight").style.display = "none";
    document.getElementById("marioWin").style.display = "block";
    maxIt = 0;
    racerMario = 0;
    moveIt = 0;
    racerKirby = 0;
  }
}

// Function to reset the page to the default Mario and Kirby standing there. !!Only used by reset button!!.
function reset() {
  window.location.reload();
}

// After a winner is declared click on the winning picture to reset them to default racing positions to be ready to race again.
// All orginal onclick event handlers have been restored by this function so you can begin the race any way you like.
function goAgain() {
  document.getElementById("racerKirby").style.left = 0;
  document.getElementById("racerMario").style.left = 0;
  document.getElementById("starts").style.visibility = "visible";
  document.getElementById("startFlag").style.display = "block";
  document.getElementById("raceFlag").style.display = "none";
  document.getElementById("redlight").style.display = "block";
  document.getElementById("redlightSecond").style.display = "none";
  document.getElementById("kirbyWin").style.display = "none";
  document.getElementById("marioWin").style.display = "none";
}
