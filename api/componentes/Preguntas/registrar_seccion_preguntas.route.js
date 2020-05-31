'use strict';
const express=require('express');
const router=express.Router();
const api_preguntas=require('./registrar_seccion_preguntas.api');


router.param('id_mod_pregunta',function(req,res,next,id_mod_pregunta){
    req.body.id_mod_pregunta=id_mod_pregunta;
    next();
})


router.route('/registrar_pregunta')
.post(
function (req,res) {
    api_preguntas.registrar(req,res);
}


);
router.route('/listar_pregunta')
.get(
    function (req,res) {
        api_preguntas.listar_pregunta(req,res);
    }
)

router.route('/actualizar_pregunta')
.post(
    function(req,res){
        api_preguntas.actualizar(req,res);
    }
);



router.route('/buscar_pregunta/:id_mod_pregunta')
.get(
    function(req,res){
        api_preguntas.buscar_por_id(req,res);
    }
);

router.route('/eliminar_pregunta')
.post(
    function(req,res){
        api_preguntas.eliminar(req,res);
    }
);

module.exports=router;