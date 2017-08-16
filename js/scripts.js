$(document).ready(function(){
  var primes = [];
  function isPrime(x){
    var prime = true;
    for(var i=2; i<=Math.sqrt(x);i++){
      if(x % i === 0){
        prime = false;
      }
    }
    if(prime){
      primes.push(x);
    }
  };
$("#prime-form").submit(function(event){
  event.preventDefault();
  var numberInput = $("#number").val();
  for(var j = 3; j <= numberInput; j++){
    isPrime(j);
  }
  $("#output").text(primes);
  primes = [];
  });
});
