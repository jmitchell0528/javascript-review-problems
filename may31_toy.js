// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

function toCamelCase(str){
  var newArr = [];
  var strArr = str.split("")
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i] === "_" || strArr[i] === "-")   {
      strArr.splice(i, 1)
      strArr[i] = strArr[i].toUpperCase()
    }
  }
  return strArr.join("")
}

// Examples:

toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"


// Answer:

// function toCamelCase(str){
//   var result = ""
//   for (var i = 0; i < str.length; i++) {
//     if ( (str.charAt(i) === '-') || (str.charAt(i) === '_') ) {
//       i++
//       result += str.toUpperCase().charAt(i)
//     } else {
//       result += str.charAt(i)
//     }
//   }
//   return result
// }
