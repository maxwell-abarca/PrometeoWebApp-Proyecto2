'use strict';
const express=require('express');
const router=express.Router();
const api_lista_utiles_mep=require('./lista_utiles_mep.api');


router.param('id_utiles_mep',function(req,res, next, id_utiles_mep){
    req.body.id_utiles_mep=id_utiles_mep;
    next();
})


router.route('/registrar_lista_utiles_mep')
    .post(
        function(req,res){
            api_lista_utiles_mep.registrar(req,res);
        }
    );
router.route('/listar_utiles_mep')
        .get(
            function(req,res){
                api_lista_utiles_mep.listar_utiles_mep(req,res);
            }
        )

router.route('/actualizar_lista_utiles_mep')
        .post(
            function(req,res){
                api_lista_utiles_mep.actualizar(req,res);
            }
        );

router.route('/buscar_lista_utiles_mep/:id_utiles_mep')

        .get(
            function(req,res){
                api_lista_utiles_mep.buscar_por_id(req,res);
            }
        );


router.route('/eliminar_lista_utiles_mep')
        .post(
            function(req,res){
                api_lista_utiles_mep.eliminar(req,res);
            }
        )


module.exports=router;