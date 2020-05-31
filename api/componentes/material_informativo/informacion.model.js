'use strict';
const mongoose=require('mongoose');

let schema_informacion=new mongoose.Schema(
    {
        id_informacion:{type: mongoose.Schema.ObjectId, auto:true},
        id_institucion:{type: String, required: false},
        reglamento:{type: String, required: true},
        proceso_matricula:{type: String, required: true},
        sistema_evaluacion:{type: String, required: true},
        recomendaciones: {type: String, required: true},
        areas_informativas:{type: String, required: true},
        seccion_ayuda:{type: String, required: true},
        talleres_adicionales:{type: String, required: true},
        deportes:{type: String, required: true},
        informacion_adicional:{type: String, required: false}
    }
);

module.exports=mongoose.model('informacion',schema_informacion);