'use strict';
const express=require('express');
const router=express.Router();
const api_estrellas=require('./estrellas_institucion.api');

router.route('/registrar_estrellas')
    .post(
        function(req,res){
            api_estrellas.registrar(req,res);
        }
    );


router.route('/listar_estrellas')
.get(
    function(req,res){
        api_estrellas.listar_estrellas(req,res);
    }
)

module.exports=router;