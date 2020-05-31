'use strict';
const express = require('express');
const router = express.Router();
const api_costo = require('./registrar_costo.api');

router.param('id_costo', function (req, res, next, id_costo) {
    req.body.id_costo = id_costo;
    next();
});



router.route('/registrar_costo')
    .post(
        function (req, res) {
            api_costo.registrar_costos(req, res);
        }
    )
router.route('/listar_costo')
    .get(
        function (req, res) {
            api_costo.listar_costo(req, res);
        }
    );
router.route('/buscar_costo/:id_costo')
    .get(
        function (req, res) {
            api_costo.buscar_por_id(req, res);
        }
    );
router.route('/actualizar_costo')
    .post(
        function (req, res) {
            api_costo.actualizar(req, res);
        }
    )
router.route('/eliminar_costo')
    .post(
        function (req, res) {
            api_costo.eliminar(req, res);
        }
    )
module.exports = router;
