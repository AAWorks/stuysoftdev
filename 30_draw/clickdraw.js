// Alejandro Alonso
// SoftDev
// K28 -- DOMfoolery
// 2022-02-08
// --------------------------------------------------

//retrieve node in DOM via ID
var c = document.getElementById("slate");

//instantiate  a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

//init global state var
var mode = "rectangle";

//var toggleMode = function(e)
var toggleMode = (e) => {
  console.log("toggling...");
  if (mode === "rectangle") {
    mode = "circle";
  } else {
    mode = "rectangle";
  }
  document.getElementById("buttonToggle").innerHTML = mode;
}

var drawRect = function (e) {
  var mouseX = e.offsetX;
  var mouseY = e.offsetY;
  ctx.beginPath();
  ctx.rect(mouseX, mouseY, 100, 100);
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fill();
}

var drawCircle = function (e) {
  var mouseX = e.offsetX;
  var mouseY = e.offsetY;
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, 50, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fill();
}

var draw = function (e) {
  if (mode === "rectangle") {
    drawRect(e);
  } else {
    drawCircle(e);
  }
}

//var wipeCanvas = function()
var wipeCanvas = () => {
  ctx.clearRect(0, 0, 600, 600);
  console.log("clear");
}

let z = document.getElementById("buttonToggle");
z.addEventListener("click", toggleMode);

let x = document.getElementById("buttonClear");
x.addEventListener("click", wipeCanvas);

c.addEventListener("click", draw);