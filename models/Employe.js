'use strict'

class Employe{
   
    constructor(id,nombre,cargo){
        this.id=id;
        this.nombre=nombre;
        this.cargo=cargo;
        
    }   
}

var empleado=[];
empleado.push(new Employe(1,'Daniel','Developer'));
empleado.push(new Employe(2,'Juan','Developer'));
empleado.push(new Employe(3,'Maria','Analista'));

//var empleado= new Employe(1,'Daniel','Developer');

module.exports=empleado;