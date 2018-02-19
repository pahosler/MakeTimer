"use strict";
function MakeTimer() {
  var t = {
    start: function(duration,func,callback) {
      this.func = func;
      this.duration = duration;
      this.callback = callback;
      this.timer = setTimeout(function() {
        func();
        if(typeof callback === "function"){
          callback();
        }
      }, duration);
    },
    stop: function(){
      clearTimeout(this.timer);
      return;
    },
    loop: function (duration,func,callback) {
      this.timer = setInterval(function () {
        func();
        if (typeof callback === "function") {
          callback();
        }
      }, duration);
    },
    halt: function () {
      clearInterval(this.timer);
      return;
    }
  };
  return {
    start: t.start,
    stop: t.stop,
    loop: t.loop,
    halt: t.halt
  };
}
module.exports = MakeTimer;
