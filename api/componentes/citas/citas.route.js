'use strict';
const express=require('express');
const router=express.Router();
const api_citas=require('./citas.api');

router.route('/registrar_citas')
    .post(
        function(req,res){
            api_citas.registrar(req,res);
        }
    );
router.route('/listar_citas')
    .get(
        function(req,res){
            api_citas.listar_citas(req, res);
        }
    ) 
module.exports=router;       
        