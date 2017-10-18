'use strict'
//tokens: Código alfanumerico
//
const Usuario=require('../models/Users');
 const service=require('../services/index');

 //Registro del usuario por primera vez
 function logUp(req,res){

    if(req.body!==undefined){
        Usuario.push(req.body);
        return res.status(201).send({'message': 'Se creo el usuario, proceda con el Login'});
        //return res.status(201).send({'token': service.createToken(Usuario)});
        res.send(Usuario).status(200);   
            
    }else{
        res.sendStatus(400);
    }
 }
 //el usuarios se autentica en el aplicativo
 function logIn(req,res){
    var e=null;
    var token=null;
    for(let i=0; i<Usuario.length;i++){

        if(Usuario[i].id==req.body.id){
            if(Usuario[i].nombre==req.body.nombre && Usuario[i].password==req.body.password){
             token= res.status(201).send({'token': service.createToken(Usuario[i])});
            }else{
             token=res.status(403).send({'message': 'No se logro loguear'});
            }
            e=Usuario[i];
            console.log(e);
           break;
        }
        e=null;
        token=null;
    }
    if(e==null){
        res.send('No se encontro').status(404);
    }else
    {
        /*if(err) return res.status(500).send({'message':err});       */
    }

    /*if(token==null){
        res.send('No se logro loguear').status(404);
    }else{
        if(err) return res.status(500).send({'message':err}); 
    }*/

 }

 module.exports={
     logIn,
     logUp
 };