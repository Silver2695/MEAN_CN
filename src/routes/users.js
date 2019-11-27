// Aqui el usuario podra ingresar a las url para registrarse o autenticarse
const express=require('express'); 
const router= express.Router();

// <----------------- RUTA PARA EL REGISTRO DE USUARIOS ------------------>
router.get('/users/singin',(req,res)=>{
    res.render('users/singin.hbs');
});

// <----------------- RUTA PARA EL ACCESO DE USUARIOS   ------------------>
router.get('/users/login',(req,res)=>{
    res.render('users/login.hbs');
});

module.exports=router;