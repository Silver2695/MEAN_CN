// Aqui el usuario podra ingresar a las url para registrarse o autenticarse
const express=require('express'); 
const router= express.Router();

const User=require('../models/User')

// <----------------- RUTA PARA EL REGISTRO DE USUARIOS ------------------>
router.get('/users/singin',(req,res)=>{
    res.render('users/singin.hbs');
});
router.post('/users/singin', async(req,res)=>{
    const {Nombre, Apellido, Email, select, password, password_conf}= req.body;
    const errors = [];
    if(Nombre.length <= 0){
        errors.push({text:'Inserte su nombre'});
    }
    if(password != password_conf){
        errors.push({text: 'No coincide el password'});
    }
    if(password.length < 4){
        errors.push({text: 'El password debe ser mayor a 4 caracteres'});
    }
    if(errors.length > 0){
        res.render('users/singin', {errors, Nombre, Apellido, Email, select, password, password_conf});
    } else{
       const emailuser=  await User.findOne({Email: Email});
       if(emailuser){
           req.flash('error_msg', 'El email ya esta en uso');
           res.redirect('/users/singin');
       }
       const newUser = new User({Nombre, Apellido, Email, select, password});
       newUser.password= await newUser.encryptPassword(password);
       await newUser.save(); 
       req.flash('ESTAS REGISTRADO');
       res.redirect('/users/login');
    }
});
 
// <----------------- RUTA PARA EL ACCESO DE USUARIOS   ------------------>
router.get('/users/login',(req,res)=>{
    res.render('users/login.hbs');
});

module.exports=router;