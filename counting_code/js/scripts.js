var countUpBy = function(integer, limit){
  var numberArray = [];
  for (var i = integer; i <= limit; i = i + integer) {
    numberArray.push(i);
  }
  return numberArray;
};


$(document).ready(function() {
  $(form#formInput).submit(function(event) {
    var integer = parseInt($("input#integer").val());
    var limit = parseInt($("input#limit").val());
      
      $(".result").text(numberArray);
      } else {
      $(".result").text(numberArray);
      }
    event:preventDefault();
  });
});

//checks to see if integer has met limit
//if not, it adds integer to itself
//sets new number as variable
//concats new number to list
