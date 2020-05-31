'use strict';
const express = require('express');
const router = express.Router();
const api_informacion = require('./informacion.api');

router.param('id_material', function (req, res, next, id_material) {
    req.body.id_material = id_material;
    next();
})
router.route('/registrar_informacion')
    .post(
        function (req, res) {
            api_informacion.registrar(req, res);
        }
    );

router.route('/listar_informacion')
    .get(
        function (req, res) {
            api_informacion.listar_informacion(req, res);

        }
    )
router.route('/buscar_material/:id_material')
    .get(
        function (req, res) {
            api_informacion.buscar_por_id(req, res);

        }
    )
router.route('/actualizar_material')
    .post(
        function (req, res) {
            api_informacion.actualizar(req, res);
        }
    );
router.route('/eliminar_material')
    .post(
        function (req, res) {
            api_informacion.eliminar(req, res);
        }
    );
    

module.exports = router;