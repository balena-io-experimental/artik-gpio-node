var users = {};
if(process.env.TTYUSER && process.env.TTYPASSWORD) {
	users[process.env.TTYUSER] = process.env.TTYPASSWORD;
}
require('tty.js').createServer({
	shell: 'bash',
	users: users,
	port: process.env.TTYPORT || process.env.PORT
}).listen();

var led= require("pi-pins").connect(22),
    button = require("pi-pins").connect(17);
button.mode('in');
led.mode('out');
led.value(false);
button.on('rise', function () {
    console.log("button pressed");
    led.value(true);
    setInterval(function () {
        led.value(false);
    }, 2000);
});