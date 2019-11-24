// Aqui van las rutas para el crud de los libros
const express=require('express'); 
const router= express.Router();

// <----------------- RUTA PARA EL REGISTRO DE USUARIOS ------------------>
router.get('/books',(req,res)=>{
    res.send('Libros en la bd');
});

module.exports=router;