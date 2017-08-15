$(document).ready(function(){
  $("#prime-form").submit(function(event){
    event.preventDefault();
    var numberInput = parseInt($("#number").val());
    var arrayNumbers = [];
    var prime = 2;
    var index = 0;

    for(var i = numberInput; i >= 2; i --){
        arrayNumbers.push(i);
    }

    while(prime != numberInput){
      arrayNumbers.forEach(function(number){
        index ++;
        if((number % prime) == 0) {
          arrayNumbers.splice(index);
        }
      });
    }
  }
    // arrayNumbers.forEach(function(number){
    //   if((number % prime) == 0){
    //     arrayNumbers.splice(index);
    //     index++;
    //
    //   }else{
    //     index++;
    //   }
    // });
    console.log(arrayNumbers);
  });
});
