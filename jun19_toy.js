// Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

// For example:


// c.encode('Codewars'); // returns 'HTIJBFWX'
// c.decode('BFKKQJX'); // returns 'WAFFLES'
// If something in the string is not in the alphabet (punctuation, spaces), simply leave it as is

class CaesarCipher {
  constructor(n){
    this.offset = n;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  decode(str){
    // loop through the string
    // shift the words backwards through the string
    // uppercase all the letters in the string
    // return the new string
    str = str.toUpperCase("");
    return str.split("").map(c=> {
      if (!this.alphabet.includes(c)) return c;
      let strCode = c.charCodeAt(0) - (65 - this.offset)
      return this.alphabet[strCode > 25 ? strCode - 26 : strCode];
    }).join("")
  }
  encode(){
    str = str.toUpperCase("");
    return str.split("").map(c=> {
      if (!this.alphabet.includes(c)) return c;
      let strCode = c.charCodeAt(0) - (65 - this.offset)
      return this.alphabet[strCode < 0 ? strCode + 26 : strCode];
    }).join("")
  }
}
var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
