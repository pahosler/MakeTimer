**MakeTimer.js**

example usage:
```
// MakeTimer example usage

var timed = new MakeTimer();
var count = 10;

function thing(){
  count--
  if(count ===5 ){
    timed.stop();
  }else if(count >= 0){
  timed.start(1000,aTimedThing,thing);
  }
}

function aTimedThing() {

  console.log("this is timed count",count);
}

thing();
```
