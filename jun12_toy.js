// Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.

// Examples:
// validParentheses( "()" ) => returns true
// validParentheses( ")(()))" ) => returns false
// validParentheses( "(" ) => returns false
// validParentheses( "(())((()())())" ) => returns true

// All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')'

  function validParentheses (str){
  if (!str || typeof str !== "string") {
    return false;
  }
  var strArr = str.split("")
  var open = 0, close =0;
  for (var i = 0 ; i < strArr.length; i++){
    if (strArr[i] === "("){
      open++
    }
    else if (strArr[i] === ")"){
      close++
    }
    if (close > open){
      return false;
    }
  }
  if (open !== close){
    return false;
  }
  return true;
}
