var AWS = require("aws-sdk")
var awsIot = require('aws-iot-device-sdk');
var express = require('express')
var router = express.Router()
const cors = require('cors')
var app = express()
const port = 3000


var logS3 = new AWS.S3({
  secretAccessKey:'D+s8z7mXDB5ajugyZVwP/EkMGNNC8Z86tebBVxtf',
  accessKeyId:'AKIAXJ3NINUNPBQZR2A5',
  region:'us-east-2',
});
var params = {
  Bucket:"pidatalog",
  MaxKeys: 10
}
var pingList = {}
logS3.listObjectsV2(params, function(err,data){ //error here somewhere
  if (err) console.log(err,err.stack);
  else pingList = data;
});


var message = ""
var device = awsIot.device({
  keyPath:"./keys/private.pem.key",
  certPath:"./keys/certificate.pem.crt",
  caPath: "./keys/CA.pem",
  host: "a2vjr670r30pov-ats.iot.us-east-2.amazonaws.com"
});

app.use(cors())
app.set('json spaces',0)
app.get('/api_livePing',(req,res)=>{
  res.send(JSON.stringify({text:message}))
  //console.log("express get called for livePing")
})
app.get('/api_logPing',(req,res)=>{
  res.send(pingList)
  //console.log("express get called for log")
})
app.listen(3001, ()=>{
  console.log('server started');
});

device
  .on('connect', function() {
    console.log('Connected');
    device.subscribe('testConnection');
  });

device
  .on('message', function(topic, payload) {
    console.log(payload.toString());
    message = payload.toString();
    message = message.substring(message.indexOf(':')+3,message.length-3);
    console.log("payload: " + message)
  });

device
  .on('error', function(error) {
    console.log('Error: ', error)
  });
