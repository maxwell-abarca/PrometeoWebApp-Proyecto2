'use strict'
const express = require('express');
const router = express.Router();
const api_padre = require('./usuarios_padre.api');

router.param('id_padres',function(req,res, next,id_padres){
    req.body.id_padres=id_padres;
    next();
})

router.route('/registrar_padre')
    .post(
        function (req, res) {
            api_padre.registrar_padre(req, res);
        }
    );

router.route('/validar_padre')
    .post(
        function (req, res) {
            api_padre.validar_padre(req, res);
        }
    );
router.route('/listar_padre')
    .get(
        function (req, res) {
            api_padre.listar_padre(req, res);
        }
    );

router.route('/actualizar_padres')
.post(
    function(req,res){
        api_padre.actualizar(req,res);
    }
);


router.route('/buscar_padres/:id_padres')
.get(
    function(req,res){
        api_padre.buscar_por_id(req,res);
    }
);

router.route('/eliminar_padres')
.post(
    function(req,res){
        api_padre.eliminar(req,res);
    }
);

module.exports = router;