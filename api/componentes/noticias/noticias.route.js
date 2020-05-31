'use strict';
const express=require('express');
const router=express.Router();
const api_noticias=require('./noticias.api');


router.param('id_noticias_id',function(req, res, next, id_noticias_id){
    req.body.id_noticias_id=id_noticias_id;
    next();
})


router.route('/registrar_noticias')
    .post(
        function(req,res){
            api_noticias.registrar(req,res);
        }
    );

router.route('/listar_noticias')
        .get(
            function(req,res){
                api_noticias.listar_noticias(req,res);
            }
        )


router.route('/actualizar_noticias')
.post(
    function(req,res){
        api_noticias.actualizar(req,res);
    }
);



router.route('/buscar_noticias/:id_noticias_id')
.get(
    function(req,res){
        api_noticias.buscar_por_id(req,res);
    }
);


router.route('/eliminar_noticias')
.post(
    function(req,res){
        api_noticias.eliminar(req,res);
    }
);


module.exports=router;