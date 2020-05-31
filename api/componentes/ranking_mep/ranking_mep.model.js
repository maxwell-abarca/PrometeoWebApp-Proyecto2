'use strict';
const mongoose = require('mongoose');

let schema_ranking = new mongoose.Schema(
    {
        id_ranking: { type: mongoose.Schema.ObjectId, auto: true },
        puesto1: { type: String, required: true, unique: true },
        puesto2: { type: String, required: true, unique: true },
        puesto3: { type: String, required: true, unique: true },
        puesto4: { type: String, required: true, unique: true },
        puesto5: { type: String, required: true, unique: true },
        puesto6: { type: String, required: true, unique: true },
        puesto7: { type: String, required: true, unique: true },
        puesto8: { type: String, required: true, unique: true },
        puesto9: { type: String, required: true, unique: true },
        puesto10: { type: String, required: true, unique: true },
    }
);

module.exports = mongoose.model('ranking', schema_ranking);