'use strict'
const express = require('express');
const router = express.Router();
const api_becas = require('./becas.api');


router.param('id_institucion', function(req,res, next, id_institucion){
    req.body.id_institucion=id_institucion;
    next();
})


router.route('/registrar_becas')
    .post(
        function(req,res){
            api_becas.registrar(req,res);
        }
    );
router.route('/listar_becas')
    .get(
        function(req,res){
            api_becas.listar_becas(req,res);
        }
    );


router.route('/actualizar_becas')
    .post(
        function(req,res){
            api_becas.actualizar(req,res);
        }
    );

router.route('/buscar_becas/:id_institucion')    
    .get(
        function(req,res){
            api_becas.buscar_por_id(req,res);
        }
    );

router.route('/eliminar_becas')
    .post(
        function(req,res){
            api_becas.eliminar(req,res);
        }
    );

module.exports = router;