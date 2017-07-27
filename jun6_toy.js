function toLeetSpeak(str) {
  var code = {
  A : '@',  B : '8',  C : '(',  D : 'D',  E : '3',  F : 'F',  G : '6',  H : '#',
  I : '!',  J : 'J',  K : 'K',  L : '1',  M : 'M',  N : 'N',  O : '0',  P : 'P',
  Q : 'Q',  R : 'R',  S : '$',  T : '7',  U : 'U',  V : 'V',  W : 'W',  X : 'X',
  Y : 'Y',  Z : '2'
}
  var result = ""
  for (var i =0; i < str.length; i++) {
    result+= code[str[i]]
  }
  return result
}

toLeetSpeak("LEET")

function convertFromLeet(str) {
  var code =
  {
  A : '@',  B : '8',  C : '(',  D : 'D',  E : '3',  F : 'F',  G : '6',  H : '#',
  I : '!',  J : 'J',  K : 'K',  L : '1',  M : 'M',  N : 'N',  O : '0',  P : 'P',
  Q : 'Q',  R : 'R',  S : '$',  T : '7',  U : 'U',  V : 'V',  W : 'W',  X : 'X',
  Y : 'Y',  Z : '2'
}
  var result = ""
  for (var i = 0; i < str.length; i++) {
    for (var key in code) {
      if (code[key] == str[i]) {
        result += key
      }
    }
  }
  return result
}

convertFromLeet('1337')
