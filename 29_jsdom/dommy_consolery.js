// Alejandro Alonso
// SoftDev
// K28 -- DOMfoolery
// 2022-02-08
// --------------------------------------------------

function calcfac(n){
  if (n == 0){
      return 1;
  } else {
      return calcfac(n - 1) * n;
  }
}

var calcfib = function(n){
  if (n <= 1){
      return n
  } else {
      return calcfib(n - 1) + calcfib(n - 2)
  }
}

var calcgcd = function(a, b) {
  if (! b) return a;
  return calcgcd(b, a % b);
};

//WRAPPERS
var facEle = document.getElementById("fac");
facEle.addEventListener("click", function(){
  var value = document.getElementById("facnum").value;
	document.getElementById("fac-output").innerHTML = "Result: " + calcfac(parseInt(value));
})

var fibEle = document.getElementById("fib");
  fibEle.addEventListener("click", function(){
  var value = document.getElementById("fibnum").value;
  document.getElementById("fib-output").innerHTML = "Result: " + calcfib(parseInt(value));
})

var gcdEle = document.getElementById("gcd");
gcdEle.addEventListener("click", function(){
  var valueA = document.getElementById("gcdA").value;
  var valueB = document.getElementById("gcdB").value;
  document.getElementById("gcd-output").innerHTML = "Result: " + calcgcd(parseInt(valueA), parseInt(valueB));
})