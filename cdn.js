//
// Shinobi
// Copyright (C) 2016 Moe Alam, moeiscool
//
//
// # Donate
//
// If you like what I am doing here and want me to continue please consider donating :)
// PayPal : paypal@m03.ca
//
process.on('uncaughtException', function (err) {
    console.error('uncaughtException',err);
});
var fs = require('fs');
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);

server.listen(80,function(){
    console.log('CDN on Port 80');
});
app.enable('trust proxy');
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.use('/',express.static(__dirname + '/files'));
app.get('/', function (req,res){
    res.sendFile(__dirname+'/index.html');
});