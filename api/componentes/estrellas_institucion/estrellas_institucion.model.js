'use strict';
const mongoose=require('mongoose');

let schema_estrellas=new mongoose.Schema(
    {
        id_estrellas: {type: mongoose.Schema.ObjectId, auto:true},
        id_institucion:{type: String, required:false},
        estrellas : {type: Number,required:true},
        promedio : {type: Number,required:true},
        estado: {type: String, required: true}
    }
);
module.exports=mongoose.model('estrellas', schema_estrellas);