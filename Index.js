//importing library
const express = require('express');
const mongoose = require('./configs/mongoose')

//defining port
const port = 8000;

const app = express();
app.use(express.urlencoded());

//router
app.use('/', require('./routers'));

//start server
app.listen(port, function(err){
    if(err) 
        console.log('Error: ',err);
    else
        console.log('Server is running on PORT: ', port);
});