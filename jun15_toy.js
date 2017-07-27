// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd");    ==>  "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); ==>  "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    ==>  "C-Ww-Aaa-Tttt"

function accum(str){


  // [ 'A', 'B', 'C', 'D' ]

//return str.split('').map((letter,idx) => letter.toUpperCase() + letter.toLowerCase().repeat(idx)).join('-')
  var arr = str.split('')
  var newArr = [];

  for(var i =0; i < arr.length; i++){
    var str = arr[i].repeat(i+1);
    var capStr = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    newArr.push(capStr)
  }

  return newArr.join('-')


// var alph = '';

// for(var i = 0; i < str.length; i++){
//   alph += str[i].toUpperCase()
//   for(var j = 1; j < i+1; j++){
//     alph += str[i];
//   }
//   if(i != str.length-1){
//     alph += '-';
//   }
// }

// return alph


}


accum("abcd");   // ==>  "A-Bb-Ccc-Dddd"
//accum("RqaEzty");    // ==>  "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
