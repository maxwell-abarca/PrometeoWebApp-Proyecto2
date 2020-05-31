'use strict';
const mongoose = require('mongoose');

let schema_instituciones_cercanas = new mongoose.Schema(
    {
        id_instituciones_cercanas:  {type: mongoose.Schema.ObjectId, auto:true},
        id_padre: {type: String, required: false},
        institucion1: { type: String, required: true, unique: true },
        institucion2: { type: String, required: true, unique: true },
        institucion3: { type: String, required: true, unique: true },
        institucion4: { type: String, required: true, unique: true },
        institucion5: { type: String, required: true, unique: true },
        institucion6: { type: String, required: true, unique: true },
        institucion7: { type: String, required: true, unique: true },
        institucion8: { type: String, required: true, unique: true },
        institucion9: { type: String, required: true, unique: true },
        institucion10: { type: String, required: true, unique: true }
    }
);

module.exports = mongoose.model('instituciones_cercanas', schema_instituciones_cercanas);