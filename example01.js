// Example usage
var MakeTimer = require("./MakeTimer");

var timed = new MakeTimer();
var looper = new MakeTimer();
var count = 10;
var looping = 10;

function thing(){
  if(count >= 0){
    timed.start(1000,aTimedThing,thing);
  }
  if(count === 5){
    timed.stop();
  }
}

function loops() {
  looper.loop(3000, function () {
    --looping;
    console.log("this is a loopy counter", looping);
    if (looping < 5) {
      looper.halt();
    }
  });
}

function aTimedThing() {
  console.log("this is timed count", count);
  count--;
}

function loopThing() {
console.log("this is a loopy counter", looping);
  if (looping < 5) {
    looper.halt();
  }
}

thing();
loops();
