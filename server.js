/**
 * Created by outstudio on 16/6/28.
 */
/**
 * Created by dandi_000 on 2016/6/27.
 */

var express = require('express')
var app = require('express')();
var static = require("express-static");
var bodyParser=require('body-parser');
var fs=require('fs');
var Pattern=require('./node/pattern/Pattern');


app.use(static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function (req, res) {
    res.send("have fun!");
});


/**
 * fetch component
 */
app.get("/generate/apiDoc.do",function(req,res) {
    try {
        //var user_name=req.body.user;
        var dir='./components/basic';
        var content=fs.readFileSync('./log.txt','utf-8');
        //fs.writeFileSync('./log.txt',content,'utf8');
        //var files=fs.readdirSync('./components/basic');
        //files.map(function(filename,i) {
        //   console.log('filename==='+filename);
        //});
        Pattern.comment(content);
        Pattern.author(content);
        res.send('got ready');
    } catch (err) {
        err.message = filename + ': ' + err.message;
        throw err;
    }
});

app.listen(9003);