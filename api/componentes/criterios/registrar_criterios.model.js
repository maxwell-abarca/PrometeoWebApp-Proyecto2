'use strict';
const mongoose = require('mongoose');
let schema_criterio = new mongoose.Schema(
    {
        id_criterio: { type: mongoose.Schema.ObjectId, auto: true },
        id_institucion: { type: String, required: false },
        /*  */
        numero: { type: Number, required: true },
        criterio: { type: String, required: true },
        puntaje: { type: Number, required: true }
    }
);
module.exports = mongoose.model('criterio', schema_criterio);