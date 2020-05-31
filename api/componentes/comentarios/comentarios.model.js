'use strict';

const mongoose = require ('mongoose');

let schema_comentario = new mongoose.Schema({
    comentario_id : {type: mongoose.Schema.ObjectId, auto: true},
    id_institucion : {type:String, required: false},
    nombre : {type:String, required: true},
    imagen : {type:String, required: true},
    comentario : {type:String, required: true},
    stars : {type:Number, required: true}
});
module.exports = mongoose.model('Comentarios_Institucion',schema_comentario);