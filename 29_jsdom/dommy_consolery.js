// Alejandro Alonso
// SoftDev
// K28 -- DOMfoolery
// 2022-02-08
// --------------------------------------------------

var calcfac = function(n){
  if (n == 0){
      return 1
  } else {
      return fac(n - 1) * n
  }
}

var calcfib = function(n){
  if (n <= 1){
      return n
  } else {
      return fib(n - 1) + fib(n - 2)
  }
}

var calcgcd = function(a, b) {
  if (! b) return a;
  return gcd(b, a % b);
};

//WRAPPERS
function fac(){
	document.getElementById("result").innerHTML = "works";
	calcfac(n);
}

function fib(){
	calcfib(n);
}

function gcd(){
	calcgcd(a, b);
}