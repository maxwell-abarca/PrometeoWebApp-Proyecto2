'use strict';
const mongoose=require('mongoose');

let schema_citas=new mongoose.Schema(
    {
        id_citas: {type: mongoose.Schema.ObjectId, auto:true},
        id_institucion:{type: String, required: false},
        nombre_cita: {type: String, required:true},
        nombre_familiar: {type:String,required:true},
        fecha : {type: String,required:true},
        hora :{type: String,required:true}, 
        descripcion : {type:String,required:true}
    }
);
module.exports=mongoose.model('citas',schema_citas);