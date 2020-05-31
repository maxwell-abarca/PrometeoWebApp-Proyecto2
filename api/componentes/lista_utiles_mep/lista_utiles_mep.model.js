'use strict';

const mongoose=require('mongoose');

let schema_lista_utiles_mep=new mongoose.Schema(
    {
        // id_utiles: {type: mongoose.Schema.ObjectId, auto:true},
        // id_institucion:{type: String, required: false},
        nombre_util: {type: String, required:true},
        cantidad: {type: Number, required:true},
        descripcion: {type: String, required:true},
        estado: {type: String, required: true}
    }
);

module.exports=mongoose.model('lista_utiles_mep',schema_lista_utiles_mep);