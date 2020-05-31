'use strict';
const mongoose = require('mongoose');

let schema_lista_oficial = new mongoose.Schema(
    {
        util1: { type: String, required: true },
        util2: { type: String, required: true },
        util3: { type: String, required: true },
        util4: { type: String, required: true },
        util5: { type: String, required: true },
        util6: { type: String, required: true },
        util7: { type: String, required: true },
        util8: { type: String, required: true },
        util9: { type: String, required: true },
        util10: { type: String, required: true },


        descripcion1: { type: String, required: true },
        descripcion2: { type: String, required: true },
        descripcion3: { type: String, required: true },
        descripcion4: { type: String, required: true },
        descripcion5: { type: String, required: true },
        descripcion6: { type: String, required: true },
        descripcion7: { type: String, required: true },
        descripcion8: { type: String, required: true },
        descripcion9: { type: String, required: true },
        descripcion10: { type: String, required: true },

        cantidad1: { type: Number, required: true },
        cantidad2: { type: Number, required: true },
        cantidad3: { type: Number, required: true },
        cantidad4: { type: Number, required: true },
        cantidad5: { type: Number, required: true },
        cantidad6: { type: Number, required: true },
        cantidad7: { type: Number, required: true },
        cantidad8: { type: Number, required: true },
        cantidad9: { type: Number, required: true },
        cantidad10: { type: Number, required: true },

        nivel: { type: String, required: true },

    }
);
module.exports = mongoose.model('lista', schema_lista_oficial);