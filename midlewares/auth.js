'use strict'

const service=require('../services/index');
//como es midlewere lleva next
function isAuth(req,res,next) {  //Midleware para validar la autenticación/token
    if(!req.headers.authorization){ //Aqui se envia la autorización, es decir el Token
        return res.status(403).send({'message':'No tienes permiso'});
    }

    const token= req.headers.authorization.split(" ")[1];  //Se desgloza el token-- se debe enviar: bearer Token
    
    service.decodeToken(token) //Llamamos la promesa para decodiificar el token
    .then(response =>{      //
        req.user=response
        next();
    })
    .catch(response=>{
        return res.status(403).send({'message':'No tienes permiso'});
        res.status(response.status);  
    });
}
module.exports=isAuth;