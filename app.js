//provision the gpio pins 22 for the led output and 17 for the button input

pinNum =

// for Artik 5
// var pinNum = 135;

var led = require("pi-pins").connect(22),

//set the pin mode,  setting pin 22 as an output and 17 as an input
button.mode('in');
led.mode('out');

// blink the LED
setInterval(function () {
  if (pin.value()) {
    led.value(false);
  } else {
    led.value(true);
  }
}, 10);
