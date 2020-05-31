'use strict';
const mongoose=require('mongoose');

let schema_niveles=new mongoose.Schema(
    {
        id_nivel : {type: mongoose.Schema.ObjectId, auto:true},
        id_institucion : {type:String, required: false},
        nombre : {type:String,required:true},
        descripcion : {type:String,required:true}
    }
);
module.exports=mongoose.model('niveles',schema_niveles);