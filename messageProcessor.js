/*
* IoT Hub Raspberry Pi NodeJS - Microsoft Sample Code - Copyright (c) 2017 - Licensed MIT
*/
'use strict';

function MessageProcessor(option) {
  option = Object.assign({
    deviceId: '[Unknown device] node'
  }, option);
  this.deviceId = option.deviceId;
}

MessageProcessor.prototype.getMessage = function (messageId, cb) {
    cb(JSON.stringify({
      messageId: messageId,
      deviceId: this.deviceId,
      temperature: random(20, 35),
      humidity: random(60, 80)
    }));
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

module.exports = MessageProcessor;
