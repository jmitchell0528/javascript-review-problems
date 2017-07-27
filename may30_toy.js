// Write a function to square every digit of an integer.

// For example:
// squareEveryNum(9119) ==> 811181
// squareEveryNum(4232) ==> 16494

// Note: The function should accept an integer and return an integer

var myArray = [];

function squareEveryNum(num)  {
  num = num.toString().split('')
  return num.map(function(num)  {
    return Math.pow(parseInt(num), 2)
  }).join('')
}

squareEveryNum(9119) // ==> 811181
squareEveryNum(4232) // ==> 16494
