var express = require('express');
var app = express();
var path = require('path');

app.use('/',express.static('Login'))
app.use('/officer',express.static('Officer'))
app.use('/student',express.static('Student'))
app.use('/store',express.static('Store'))
app.get('/',function(req, res){
    res.sendFile(path.join(__dirname + '/Login/login.html'));
});
app.get('/fo',function(req,res){
    res.sendFile(__dirname + '/Officer/officer.html');
})
app.get('/fo/reg',function(req,res){
    res.sendFile(__dirname + '/Officer/officer_register_page.html');
})
app.get('/fo/topup',function(req,res){
    res.sendFile(__dirname + '/Officer/officer_topup_page.html');
})
app.get('/student',function(req,res){
    res.sendFile(__dirname + '/Student/student.html');
})
app.get('/store',function(req,res){
    res.sendFile(__dirname + '/Store/store.html');
})
app.get('/store/income',function(req,res){
    res.sendFile(__dirname + '/Store/store_Report.html');
})
app.listen(8002)