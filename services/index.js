'use strict'
const jwt= require('jwt-simple');
const moment= require('moment');
const empleado=require('../controllers/empleado');
const config=require('../config');

//debemos crear un objeto payload, que son los datos que envia
//el cliente manda y viajan en el servidor
function createToken(usuario){
    const payload={
        "sub": usuario.id, //Id
        "fInicio": moment().unix(),// Fecha inicio de login del cliente
        "fFin": moment().add(14,'days').unix() //Fecha expiración del token
    };

    //aqui codificamos el payload y el VERIFY  SIGNATURE
    return jwt.encode(payload,config.SECRET_TOKEN)
}
function decodeToken(token){ //Promesas de forma nativa  
    const decode=new Promise((resolve, reject)=>{
        try {
            const payload=jwt.decode(token,config.SECRET_TOKEN);
            
            if(payload.exp<=moment().unix()){//verificamos si el token ha caducado
                reject({'status':401, 'message':'El token ha expirado'});
            }
            resolve(payload.sub); // en el objeto request del user, pasamos el usuario
        } catch (error) {
            reject({'status':500,'message':'Invalid token'})
        }
});
return decode;   
}
module.exports={createToken,decodeToken};