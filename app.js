'use strict'
const express= require('express');
const body=require('body-parser');
const hbs=require('express-handlebars');
const app=express();

const api=require('./routers');

app.use(body.json());
app.use(body.urlencoded({extended:false}));

//Configutamos el motor de plantillas
app.engine('.hbs', hbs({
  defaultLayout:'default',
  extname:'.hbs'
}));

app.set('view engine', '.hbs');//definimos el view engine

app.use('/api',api);

//Renderizar
app.get('/login',(req,res)=>{
  res.render('login');   
});

app.get('/api/empleados/',(req,res)=>{
  res.render('employees');
});


/*app.put('/',(req,res)=>{
    res.send('Actualizamos algo');
  });

app.delete('/',(req,res)=>{
    res.send('Actualizamos algo');
  });*/

  module.exports=app;