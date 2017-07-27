// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// actual answer

function humanReadable(n){
  var sec = 0, min = 0, hr = 0, i = 0;
  while ( i < n ){
    sec++
    if ( sec === 60 ){
      sec = 0;
      min++
    }
    if ( min === 60 ){
      sec = 0;
      min = 0;
      hr++
    }
    i++
  }
  return ("0" + hr).split("").slice(-2).join("") + ":" + ("0" + min).split("").slice(-2).join("") + ":" + ("0" + sec).split("").slice(-2).join("")
}

console.log(humanReadable(359999)) // '99:59:59'
console.log(humanReadable(1)) // '00:00:01'

// Alternative answer

function humanReadable(sec){
    let hours = twoDig(Math.floor(sec/3600)),
        minutes = twoDig(Math.floor((sec%3600)/60)),
        seconds=twoDig(sec-(hours*3600)-(minutes*60));
    return `${hours}:${minutes}:${seconds}`
}

function twoDig(time){
  if((""+time).length < 2){return '0' + time}
  return time;
}
