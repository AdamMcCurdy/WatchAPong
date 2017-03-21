var gpio = require('rpi-gpio');
var slack = require('slack-webhook');
var slack = new slack('https://hooks.slack.com/services/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');

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

  if(side1 === true && side2 === true)
  {
    console.log("TABLE IS OCCUPIED");
    slack.send("TABLE IS OCCUPADO!!!")
  }

  if(side1 === false && side2 === false)
  {
    console.log("TABLE IS OPEN");
    slack.send("TABLE IS OPEN!!!");
  }

});

gpio.setup(sensor1, gpio.DIR_IN, gpio.EDGE_BOTH);
gpio.setup(sensor2, gpio.DIR_IN, gpio.EDGE_BOTH);

