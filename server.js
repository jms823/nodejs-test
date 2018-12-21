const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/'));

// app.get('/view/*',function(req,res){
//     res.sendFile(path.join(__dirname,'view',req.url));
// });

app.post('/api/login',function(req,res){
    console.log(req.body.id);
    console.log(req.body.pw);
    var result = {msg:'login OK!'};
    res.json(result);
})

app.use('/api/*',function(req,res){
    console.log(req.method);
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    var text = 'param : ' + req.params;
    text += "<br>query : " + req.query;
    text += "<br>body : " + req.body;
    text += "<br>method : " + req.method;
    res.send(text);
})
app.listen(7001,()=>{
    console.log('http server running on 7001 port');
})
