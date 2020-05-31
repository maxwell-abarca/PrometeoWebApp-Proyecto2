'use strict';

const express = require('express');
const router = express.Router();
const api_lista_oficial = require('./lista_oficial.api');

router.route('/registrar_lista_oficial')
.post(
    function(req, res){
        api_lista_oficial.registrar(req, res);
    }
);

router.route('/listar_lista_oficial')
.get(
    function(req, res){
        api_lista_oficial.listar_lista_oficial(req, res);
    }
)

module.exports = router;