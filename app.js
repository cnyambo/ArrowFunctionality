function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

  //Double function with Arrow functionnality

  function doubleWithArrow(arr){
    return arr.map(val => val * 2);

  } 

  function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }
//squareAndFindEvens function with Arrow functionnality

function squareAndFindEvensWithArrow(numbers){
     return (numbers.map(num=>num **2)).filter(val=>val%2===0);
     /*var squares = numbers.map(num=>num **2);
     var evens = squares.filter(num=>num % 2 === 0);
    return evens;*/
  }