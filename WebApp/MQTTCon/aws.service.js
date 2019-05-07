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
  logS3.listObjectsV2(params, function(err,data){
    if (err) console.log(err,err.stack);
    else buildSendListOfObjects(data,res);
  });
});
var listItems = []
function buildSendListOfObjects(data,res){
  data['Contents'].forEach(function(item,index){
    var params = {
      Bucket:"pidatalog",
      Key:item['Key']
    }
    logS3.getObject(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else temp = JSON.parse(data["Body"].toString()), temp["Key"] = item["Key"], listItems.push((item['key'],temp));           // successful response
    });
  });
  res.send(listItems);
  listItems = [];
}
app.listen(3001, ()=>{
  console.log('server started');
});
