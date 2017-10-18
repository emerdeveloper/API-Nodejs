'use strict'
var app= require('./app');
var config=require('./config');
const server=app.listen(config.port,()=>{
    console.log('Server Running on port : %d', server.address().port);
});