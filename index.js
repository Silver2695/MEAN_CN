//Constantes requeridas

const express=require('express');

//Inicializaciones: 
const app=express();

//Settings: Aqui van las configuraciones
    //Se configura el puerto 3000 para el servidor
    app.set('port',process.env.PORT || 3000);

//Middlewares: Aqui van las funciones que seran ejecutadas antes de llegar al servidor o las rutas

//Global Variables: Aqui se colocan datos para que estendisponibles para toda la aplicacion

//Routes: Aui van las rutas o Back-end

//Static Files: Aqui se define la carpeta de archivos estaticos

//Server listening: Aqui se inicializa el servidor de express

app.listen(app.get('port'),() =>{
    console.log('Servidor Activo en el puerto',app.get('port'));
});