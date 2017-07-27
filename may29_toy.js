//see if the letter is a duplicate
//if it is a duplicate, ensure the duplicate isn't already tracked
//after finding the first duplicate, track it.
//return results

function dups (str) {
  var dups = [];
  var strArr = str.toLowerCase().split("");
  for (var i = 0; i < strArr.length; i++) {
    if (strArr.indexOf(strArr[i]) !== i)  {
      if (!dups.includes(strArr[i]))  {
        dups.push(strArr[i])
      }
    }
  }
  return dups.length
}

console.log(dups("abcde"));// -> 0 # no characters repeats more than once
console.log(dups("aabbcde"));// -> 2 # 'a' and 'b'
console.log(dups("aabbcdeB"));// -> 2 # 'a' and 'b'
console.log(dups("indivisibility"));// -> 1 # 'i'
console.log(dups("Indivisibilities"));// -> 2 # 'i' and 's'
console.log(dups("aa11"));// -> 2 # 'a' and '1'
