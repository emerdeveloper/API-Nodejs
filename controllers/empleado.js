'use strict'

var employe=require('../models/Employe');

function getAllEmployees(req,res){
    res.send(employe).status(200);
    //res.render('../views/index.jade',employe);
}

function getEmployeeById(req,res){
    var e=null;
    for(let i=0; i<employe.length;i++){

        if(employe[i].id==req.params.Id){
            e=employe[i];
            console.log(e);
           // res.send(employe[i]).status(200);
           break;
        }
        e=null;
    }
    if(e==null){
        res.send('No se encontro').status(404);
    }else
    {
        res.send(e).status(200);
    }
    
}

function addEmployee(req,res){
    console.log(req.body);
    if(req.body!==undefined){
        employe.push(req.body);
        res.send(employe).status(200);
        //res.sendStatus(200); Sobra
    }else{
        res.sendStatus(400);
    }
}
function test(req,res){
    console.log(employe);
    res.sendStatus(401); 
}

function deleteEmploye(req,res){
    var emp=null;
    for(let i=0; i<employe.length;i++){
        if(employe[i].id==req.params.Id){
            emp=employe[i];
            if(emp!==undefined){
                employe.splice(i,i);
                res.send(employe).status(200);        
                break;        
            }/*else{
                res.sendStatus(400);
            }*/
         
        }
        emp=null;
    }
   
    if(emp==null){
        res.send('No se encontro empleado a eliminar').status(404);
    }else
    {
        res.send(emp).status(200);
    }
       
}

function addUser(req,res){
    console.log(req.body);
    if(req.body!==undefined){
        employe.push(req.body);
        res.send(employe).status(200);
        //res.sendStatus(200); Sobra
    }else{
        res.sendStatus(400);
    }
}

module.exports={getAllEmployees, getEmployeeById, addEmployee,test, deleteEmploye, addUser};