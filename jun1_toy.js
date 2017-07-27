// Your task is to create an array of size n with the values of the Fibonnaci sequence, and reverse the order in which the sequence is displayed.

// For example: [1, 1, 2, 3, 5] would become [5, 3, 2, 1, 1]

// You can assume that n will always be a positive integer between and including, 1 and 64.

function fibonnaci (n) {
  var fib = [1,1]
  for (var i = 2; fib[i-1]+fib[i-2] <= n; i++ ){
    fib[i] = fib[i-1]+fib[i-2];
  }
  return fib.reverse();
}

// function fibonnaci (n){
//   var myArray = [1,1];
//   var whatYouWanted = [];
//   for(var i =2; i < n; i++){
//     myArray[i] = myArray[i-1] + myArray[i-2];
//   }
//   for (var j = myArray.length - 1; j >= 0; j--){
//     whatYouWanted.push(myArray[j])
//   }
//   return whatYouWanted;
// }

fibonnaci(14);
