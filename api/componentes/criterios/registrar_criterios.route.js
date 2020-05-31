'use strict';
const express = require('express');
const router = express.Router();
const api_criterios = require('./registrar_criterios.api');
router.param('id_criterio', function (req, res, next, id_criterio) {
    req.body.id_criterio = id_criterio;
    next();
});
router.route('/registrar_criterio')
    .post(
        function (req, res) {
            api_criterios.registrar_criterio(req, res);
        }
    )
router.route('/listar_criterio')
    .get(
        function (req, res) {
            api_criterios.listar_criterio(req, res);
        }
    );
router.route('/buscar_criterio/:id_criterio')
    .get(
        function (req, res) {
            api_criterios.buscar_por_id(req, res);
        }
    )
router.route('/actualizar_criterio')
    .post(
        function (req, res) {
            api_criterios.actualizar(req, res);
        }
    )
router.route('/eliminar_criterio')
    .post(
        function (req, res) {
            api_criterios.eliminar(req, res);
        }
    )
module.exports = router;