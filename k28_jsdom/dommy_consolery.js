// Alejandro Alonso
// SoftDev
// K28 -- DOMfoolery
// 2022-02-08
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)
console.log("AYO");

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
  var j=30;
  return j+x;
};


//instantiate an object
var o = { 'name' : 'Thluffy',
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };


var addItem = function(text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};


var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};


var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};


var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};

//insert your implementations here for...
var fac = function(n){
  if (n == 0){
      return 1
  } else {
      return fac(n - 1) * n
  }
}

var fib = function(n){
  if (n <= 1){
      return n
  } else {
      return fib(n - 1) + fib(n - 2)
  }
}

var gcd = function(a, b) {
  if (! b) return a;
  return gcd(b, a % b);
};

document.getElementById("result").innerHTML = "Factorial of 3: " + fac(3) + 
  "<br>3rd Fibonacci number: " + fib(3) + 
  "<br>GCD of 12 and 18: " + gcd(12, 18);