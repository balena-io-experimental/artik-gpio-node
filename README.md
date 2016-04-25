# Basic GPIO with node.js

This is a basic example of GPIO control on the Artik 5 & 10 using the [pi-pins](https://www.npmjs.com/) module from npm

In this example we will blink an LED on pin 22 (for Artik 10) or pin 135 (for Artik 5). For pin-mapping consult [Artik documentation](https://developer.artik.io/documentation/developer-guide/gpio-mapping.html)

All you need to do is :

* clone this repo locally  and cd into the folder.
* connect up the Artik as shown in the diagram :
* add the resin remote repo with `git remote add resin git@git.resin.io:myGithubName/myResinAppName.git` , with the correct github and app name, or just copy if from the top right hand corner of your device dashboard on resin.io.
* now just `git push resin master` wait a minute or so for the code to upload and start.
* enjoy the all the LED goodness...

![Circuit diagram](/docs/images/basic-gpio.png)
![Schematics diagram](/docs/images/Schematics.png)

Image and Schematics sourced from [Artik documentation](https://developer.artik.io/documentation/tutorials/blink-an-led.html)
