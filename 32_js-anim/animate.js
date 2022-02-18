// Team Muricide :: Alejandro Alonso
// SoftDev pd2
// K32
// 2022-02-17

// model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("playground");// GET CANVAS
var dotButton = document.getElementById("buttonCircle");// GET DOT BUTTON
var stopButton = document.getElementById("buttonStop");// GET STOP BUTTON

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d")// YOUR CODE HERE

//set fill color to team color
ctx.fillStyle = 'cyan';// YOUR CODE HERE

var requestID;  //init global var for use with animation frames

var clear = (e) => {
  ctx.clearRect(0, 0, c.width, c.height);
};

let xspeed;
let yspeed;
let xpos;
let ypos;

let dvdPlayer = new Image();
dvdPlayer.src = 'logo_dvd.jpg';

var screenHelper = (e) => {
  xpos = 50 + Math.random() * 350;
  ypos = 50 + Math.random() * 350;
  xspeed = 0.5 + Math.random();
  yspeed = 0.5 + Math.random();
  screenSaver();
}

//var drawDot = function() {
var screenSaver = (e) => {

  clear();

  xpos += xspeed;
  ypos += yspeed;
  if (xpos >= c.width-92 || xpos <= -5) xspeed *= -1;
  if (ypos >= c.height-80 || ypos <= -20) yspeed *= -1;
  ctx.drawImage(dvdPlayer, xpos, ypos, 100, 100);

  window.cancelAnimationFrame(requestID);
  requestID = window.requestAnimationFrame(screenSaver);

};

var stopIt = () => {
  window.cancelAnimationFrame(requestID);
};

dotButton.addEventListener( "click", screenHelper );
stopButton.addEventListener( "click",  stopIt );