'use strict'
const mongoose = require('mongoose');
let schema_padre = new mongoose.Schema(
    {
        padre_id : { type: mongoose.Schema.ObjectId, auto: true },
        padre_nombre : {type : String, required:true},
        padre_apellido : {type : String, required:true},
        padre_correo_electronico : {type : String, required:true},
        padre_hijos : {type : Number, required:true},
        padre_fecha: {type : Date, required:true},
        padre_direccion: {type : String, required:true},
        padre_telefono: {type : Number, required:true},
        padre_nacionalidad: {type : String, required:true},
        padre_cedula: {type : String, required:true},
        padre_contrasena : {type : String, required:true},
        padre_imagen : {type : String, required:true},
        tipo_usuario : {type : String, required: true},
    }
);

module.exports = mongoose.model('Usuario_padre', schema_padre);