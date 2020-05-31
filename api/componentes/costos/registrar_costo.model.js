'use strict';
const mongoose = require('mongoose');

let schema_costo = new mongoose.Schema(
    {
        id_costo: { type: mongoose.Schema.ObjectId, auto: true },
        id_institucion: { type: String, required: false },
        nivel: { type: String, required: true },
        matricula: { type: Number, required: true },
        mensualidad: { type: Number, required: true },
        
        estado: { type: String, required: true }
    }
);
module.exports = mongoose.model('costos', schema_costo);