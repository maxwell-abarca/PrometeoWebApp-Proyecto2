'use strict';
const express = require('express');
const router = express.Router();
const api_idioma = require('./idiomas.api');

router.param('id_institucion',function(req, res, next, id_institucion){
    req.body.id_institucion=id_institucion;
    next();//para que continue con la fucnión que lo llamó

})

router.route('/registrar_idioma')
    .post(
        function(req, res){
                api_idioma.registrar_idioma(req, res);
        }
    );
router.route('/listar_idioma')
    .get(
        function (req, res){
            api_idioma.listar_idioma(req, res);
        }
    );

router.route('/buscar_idioma/:id_institucion')
    .get(
        function (req, res){
            api_idioma.buscar_por_id(req, res);
        }
    );

router.route('/actualizar_idioma')

.post(
    function(req,res){
        api_idioma.actualizar(req,res);
    }
);

router.route('/eliminar_idioma')
.post(
    function(req,res){
        api_idioma.eliminar(req,res);
    }
);

module.exports = router;