'use strict';

const express = require('express');
const router = express.Router();
const api_ranking = require('./ranking_mep.api');

router.param('id_ranking', function (req, res, next, id_ranking) {
    req.body.id_ranking = id_ranking;
    next();
});

router.route('/registrar_ranking')
.post(
    function(req, res){
        api_ranking.registrar(req, res);
    }
);

router.route('/listar_ranking')
.get(
    function(req, res){
        api_ranking.listar_ranking_mep(req, res);
    }
)
router.route('/buscar_ranking/:id_ranking')
    .get(
        function (req, res) {
            api_ranking.buscar_por_id(req, res);
        }
    );

router.route('/actualizar_ranking')
    .post(
        function (req, res) {
            api_ranking.actualizar(req, res);
        }
    )

module.exports = router;