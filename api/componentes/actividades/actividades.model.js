'use strict';
//permite crear el modelo para crear la base de datos 
const mongoose=require('mongoose');
/*para facilitar una comunicacion, creamos un esquema, es decir creamos la forma de la estructura,
 y como lo vamos a guardar*/
let schema_actividades=new mongoose.Schema(
    {
        id_actividades: {type: mongoose.Schema.ObjectId, auto:true},
        id_institucion:{type: String, required: false},
        nombre : {type:String,required:true},//me define la estructura de ese dato
        fecha : {type: String,required:true},
        hora :{type: String,required:true}, 
        lugar :{type:String,required:true},
        descripcion : {type:String,required:true},
        imagen : {type: String, required: true},
        estado: {type: String, required: true}
        // imagen :{required: false} //no está definida por el momento 

    }//estructura (esquema)

);
//Exportando el modelo de mongoose
module.exports=mongoose.model('actividades',schema_actividades);