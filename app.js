"use strict";

var _artikIo = require("artik-io");

var gpio = new _artikIo.Gpio(_artikIo.Gpio.pins.ARTIK_10[22]);
gpio.pinMode(_artikIo.Gpio.direction.INPUT);
gpio.on(_artikIo.Gpio.event.RISING, function () {
    console.info("sensor is on");
});
