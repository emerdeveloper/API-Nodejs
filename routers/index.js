'use strict'

const express= require('express');
const api= express.Router();
const empleado=require('../controllers/empleado');
const usrCtrl=require('../controllers/auth');

const auth=require('../midlewares/auth');

//******* LOS GET **************
//api.get('/', empleado.test);
api.get('/employes',auth,empleado.getAllEmployees);
api.get('/employe/:Id',auth,empleado.getEmployeeById);
//********* LOS POST **************
api.post('/addEmploye',empleado.addEmployee);
api.delete('/delete/:Id',empleado.deleteEmploye);
api.get('/',auth,(req,res)=>{
 res.status(200).send({'message':'Acceso concedido'});
});
api.post('/logIn',usrCtrl.logIn);
api.post('/logUp',usrCtrl.logUp);
module.exports=api;