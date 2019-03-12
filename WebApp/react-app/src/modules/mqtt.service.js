var awsIot = require('aws-iot-device-sdk');

function test(){

console.log("This is a test")

var device = awsIot.device({
  keyPath:"./certinfo/private.pem.key",
  certPath:"./certinfo/certificate.pem.crt",
  caPath: "./certinfo/CA.pem",
  host: "a2vjr670r30pov-ats.iot.us-east-2.amazonaws.com"
});

device
    .on('connect', function() {
      console.log('Connected');
      device.subscribe('testConnection');
    })

device
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
  });

device
    .on('error', function(error) {
        console.log('Error: ', error)
    });
}
