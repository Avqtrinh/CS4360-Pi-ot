var AWS = require("aws-sdk")
var express = require('express')
const cors = require('cors')
var app = express()
const port = 3000
const config = require('./keys/config.json')

//s3 object
var logS3 = new AWS.S3({
  secretAccessKey:config['keys']['secret'],
  accessKeyId:config['keys']['access'],
  region:'us-east-2',
});
app.use(cors())
app.set('json spaces',0)

app.get('/api_logPing',(req,res)=>{
  var params = {
    Bucket:"pidatalog",
    MaxKeys: 10
  }
  logS3.listObjectsV2(params, function(err,data){ //error here somewhere
    if (err) console.log(err,err.stack);
    else res.send(data);
  });
});

app.listen(3001, ()=>{
  console.log('server started');
});
