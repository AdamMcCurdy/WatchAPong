var gpio = require('rpi-gpio');

var sensor1 = 7;
var sensor2 = 11;
var side1 = false;
var side2 = false;

gpio.on('change', function(channel, value) {
  console.log('channel ' + channel + ' value is now ' + value);
  if(channel === sensor1) {
    if(value === true){
      side1 = true;
    }else if(value === false){
      side2 = false;
    }
  }

  if(channel === sensor2) {
    if(channel === sensor2) {
      if(value === true) {
        side2 = true;
      }else if(value === false){
        side2 = false;
      }
    }    
  }

});

gpio.setup(sensor1, gpio.DIR_IN, gpio.EDGE_BOTH);
gpio.setup(sensor2, gpio.DIR_IN, gpio.EDGE_BOTH);
