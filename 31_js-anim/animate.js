// Team Muricide :: Alejandro Alonso, Kevin Cao
// SoftDev pd2
// K31 -- canvas based JS animation
// 2022-02-16

// model for HTML5 canvas-based animation

// SKEELTON


//access canvas and buttons via DOM
var c = document.getElementById("playground")// GET CANVAS
var dotButton = document.getElementById("buttonCircle")// GET DOT BUTTON
var stopButton = document.getElementById("buttonStop")// GET STOP BUTTON

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d") // YOUR CODE HERE

//set fill color to team color
ctx.fillStyle = "red"// YOUR CODE HERE

var requestID;  //init global var for use with animation frames


//var clear = function(e) {
var clear = (e) => {
  console.log("clear invoked...")
  ctx.clearRect(0, 0, 600, 600);
  // YOUR CODE HERE
};


var radius = 0;
var growing = true;

var drawCircle = function (r) {
  ctx.beginPath();
  ctx.arc(250, 250, r, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
}

//var drawDot = function() {
var drawDot = () => {
  if (requestID) {
    window.cancelAnimationFrame(requestID)
  }
  // YOUR CODE HERE
  clear();
  drawCircle(radius);
  radius += (growing == true) ? 1: -1;
  if(radius == 250){
    growing = false;
  }
  if(radius == 0){
  	growing = true;
  }
  requestID = window.requestAnimationFrame(drawDot)
  /*
    ...to
    Wipe the canvas,
    Repaint the circle,

    ...and somewhere (where/when is the right time?)
    Update requestID to propagate the animation.
    You will need
    window.cancelAnimationFrame()
    window.requestAnimationFrame()

   */
};


//var stopIt = function() {
var stopIt = () => {
  window.cancelAnimationFrame(requestID)

  // YOUR CODE HERE
  /*
    ...to
    Stop the animation

    You will need
    window.cancelAnimationFrame()
  */
};


dotButton.addEventListener( "click", drawDot );
stopButton.addEventListener( "click",  stopIt );