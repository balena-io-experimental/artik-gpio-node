// var pinNum = 135; for Artik 5
var pinNum = 22; // for Artik 10

var led = require("pi-pins").connect(pinNum);

// set the pin mode: LED as ouput
led.mode('out');

// blink the LED
setInterval(function () {
  if (led.value()) {
    led.value(false);
  } else {
    led.value(true);
  }
}, 10);
