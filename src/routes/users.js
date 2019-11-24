// Aqui el usuario podra ingresar a las url para registrarse o autenticarse
const express=require('express'); 
const router= express.Router();

// <----------------- RUTA PARA EL REGISTRO DE USUARIOS ------------------>
router.get('/users/singin',(req,res)=>{
    res.send('Pagina para registro de usuarios');
});

// <----------------- RUTA PARA EL ACCESO DE USUARIOS   ------------------>
router.get('/users/login',(req,res)=>{
    res.send('Login de la aplicacion');
});

module.exports=router;