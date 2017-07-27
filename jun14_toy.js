function findNextSquare(num)  {
  var sqrt = Math.sqrt(num)
  if (sqrt % 1 !== 0) {
    return -1
  }
  var nextNumToBeSquared = sqrt + 1
  var nextSquare = Math.pow(nextNumToBeSquared, 2)
  return nextSquare
}
findNextSquare(121)

// ----------------------
// Alternative answer:
//
// function findNextSquare(num) {
//   var sqrt = Math.sqrt(num)
//   if (sqrt % 1 !== 0) {
//     return -1
//   }
//   var nextNumToBeSquared = sqrt + 1
//   var nextSquare = Math.pow(nextNumToBeSquared, 2)
//   return nextSquare
//
// }
