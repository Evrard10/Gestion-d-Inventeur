const express = require('express');
const app = express();



app.set('view engine', 'ejs');

app.get('/index',function(req, res){
    
    res.render('index');
})

app.listen(9090, function(){
    console.log("Mon serveur écoute sur le port 9090");
})