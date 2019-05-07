var express = require('express');
var app = express();
var path = require('path');

app.use('/',express.static('Login'))
app.use('/fo',express.static('FO'))
app.use('/student',express.static('Student'))
app.use('/store',express.static('Store'))
app.get('/',function(req, res){
    res.sendFile(path.join(__dirname + '/Login/login.html'));
});
app.get('/fo',function(req,res){
    res.sendFile(__dirname + '/FO/fo.html');
})
app.get('/fo/reg',function(req,res){
    res.sendFile(__dirname + '/FO/p2_register.html');
})
app.get('/fo/topup',function(req,res){
    res.sendFile(__dirname + '/FO/p3_topup.html');
})
app.get('/student',function(req,res){
    res.sendFile(__dirname + '/Student/student.html');
})
app.get('/store',function(req,res){
    res.sendFile(__dirname + '/Store/store.html');
})
app.get('/store/income',function(req,res){
    res.sendFile(__dirname + '/Store/p2_income.html');
})
app.listen(8002)