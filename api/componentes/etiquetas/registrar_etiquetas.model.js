'use strict';
const mongoose = require('mongoose');
let schema_etiqueta = new mongoose.Schema(
    {
        id_etiqueta: { type: mongoose.Schema.ObjectId, auto: true },
        id_institucion: { type: String, required: false },
        etiqueta: { type: String, required: true },
        descripcion: { type: String, required: true },
        estado: { type: String, required: true }
    }
);
module.exports = mongoose.model('etiqueta', schema_etiqueta);