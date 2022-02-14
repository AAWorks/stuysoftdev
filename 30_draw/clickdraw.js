// Alejandro Alonso
// SoftDev
// K28 -- DOMfoolery
// 2022-02-08
// --------------------------------------------------

var c = 
var ctx = c.getContext("2d");
var mode = "";

var toggleMode = (e) => {
  console.log("toggling...");
  if (mode == "rect") {
    mode = "circle"
  } else {
    mode = "rect"
  }

}

var toggleEle = document.getElementByID("buttonToggle")
toggleEle.addEventListner("click", toggleMode)