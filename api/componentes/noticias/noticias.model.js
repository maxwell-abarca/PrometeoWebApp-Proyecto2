'use strict';
const mongoose=require('mongoose');

let schema_noticias=new mongoose.Schema(
    {
        id_noticias: {type: mongoose.Schema.ObjectId, auto:true},
        id_institucion:{type: String, required:false},
        titulo: {type: String, required: true},
        fecha : {type: String,required:true},
        hora :{type: String,required:true}, 
        lugar :{type:String,required:true},
        descripcion : {type:String,required:true},
        imagen : {type: String, required: false},
        estado: {type: String, required: true}
    }
);
module.exports=mongoose.model('noticias', schema_noticias);