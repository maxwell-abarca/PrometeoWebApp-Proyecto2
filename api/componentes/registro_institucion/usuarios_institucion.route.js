'use strict';//Uso del modo estricto de javascript
const express = require('express');//Uso de la constante express
const router = express.Router();//Uso de la constante express en el Route
const api_institucion = require('./usuarios_institucion.api');//La constante api_institucion requiera el usuarios.api

router.param('id_institucion', function(req,res, next, id_institucion){
    req.body.id_institucion=id_institucion;
    next();
})

router.route('/registrar_institucion')
    .post(
        function(req, res){
           api_institucion.registrar_institucion(req, res);
        }
    );

router.route('/validar_institucion')
.post(
    function(req, res){
        api_institucion.validar_institucion(req, res);
    }
);
router.route('/listar_institucion')
    .get(
        function (req, res){
            api_institucion.listar_institucion(req, res);
        }
    );
router.route('/buscar_institucion/:id_institucion')
    .get(
        function (req, res){
            api_institucion.buscar_por_id(req, res);
        }
    );
router.route('/actualizar_institucion')
    .post(
        function(req, res){
           api_institucion.actualizar(req, res);
        }
    );
router.route('/eliminar_institucion')
    .post(
        function (req, res) {
            api_institucion.eliminar(req, res);
        }
    )
module.exports = router;