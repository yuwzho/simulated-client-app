/*
* IoT Hub Raspberry Pi NodeJS - Microsoft Sample Code - Copyright (c) 2017 - Licensed MIT
*/
'use strict';

function MessageProcessor(option) {
  option = Object.assign({
    deviceId: '[Unknown device] node',
    temperatureAlert: 30
  }, option);
  this.deviceId = option.deviceId;
  this.temperatureAlert = option.temperatureAlert;
}

MessageProcessor.prototype.getMessage = function (messageId, cb) {
  var temperature = random(30, 35);
  cb(JSON.stringify({
    messageId: messageId,
    deviceId: this.deviceId,
    temperature: temperature,
    humidity: random(60, 80)
  }), temperature > this.temperatureAlert);
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

module.exports = MessageProcessor;
