// Your task is to sort an array of integer numbers by the product of the value and the index of the positions.

// For sorting the index starts at 1, NOT at 0!
// The sorting has to be ascending.
// The array will never be null and will always contain numbers.

// Example:

// Input: 23, 2, 3, 4, 5
// Product of value and index:
// 23 => 23 * 1 = 23  -> Output-Pos 4
// 2 =>  2 * 2 = 4   -> Output-Pos 1
// 3 =>  3 * 3 = 9   -> Output-Pos 2
// 4 =>  4 * 4 = 16  -> Output-Pos 3
// 5 =>  5 * 5 = 25  -> Output-Pos 5

// Output: 2, 3, 4, 23, 5

function sortByValueAndIndex(array){
//declared vars
  var arr = [];
  var counter = 1;
  var newArr = [];
//constructor function
  function obj(orig, newNum){
    this.orig = orig,
    this.new = newNum
  }
//pushing original number and new number * counter
  for(var i = 0; i < array.length; i++){
    arr.push(new obj(array[i], array[i]*counter))
    counter++;
  }
//bubble sort by the new property in the object
   for (var o = 0; o < arr.length; o++) {
    for (var j = 0; j < (arr.length - o - 1); j++) {
      if(arr[j].new > arr[j+1].new) {
        var tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp;
      }
    }
  }
//pushing original values in the correct order to a new array
  for(var k = 0; k < arr.length; k++){
    newArr.push(arr[k].orig);
  }
  return newArr;
}

sortByValueAndIndex([9, 5, 1, 4, 3])
//1, 9, 5, 3, 4 
