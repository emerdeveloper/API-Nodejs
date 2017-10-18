'use strict'
class User{
    
     constructor(id,nombre,password){
         this.id=id;
         this.nombre=nombre;
         this.password=password;
         
     }   
 }
 
 var usuario=[];
 usuario.push(new User());
 module.exports=usuario;