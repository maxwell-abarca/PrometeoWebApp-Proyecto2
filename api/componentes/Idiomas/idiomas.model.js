'use strict';
const mongoose = require ('mongoose');

let schema_idiomas = new mongoose.Schema({
    idioma_id : {type: mongoose.Schema.ObjectId, auto: true},
    id_institucion : {type:String, required: false},
    idiomas : {type : String, required:true},
    descripcion : {type : String, required:true},
    estado : {type : String, required:true}
});
module.exports = mongoose.model('Idiomas_Institucion', schema_idiomas);
