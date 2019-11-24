// Aqui van las ur de la pagina principal
const express=require('express'); 
const router= express.Router();

// <------------------- RUTAS DE LA APLICACION ---------------------->
router.get('/',(req,res)=>{
    res.send('Index de routes');
});
// <------------------- RUTAS DE "ACERCA DE" ---------------------->
router.get('/about',(req,res)=>{
    res.send('Aplicacion para la materia de Computo en la Nube');
});


module.exports=router;

