'use strict';
const express=require('express');
const router=express.Router();
const api_niveles=require('./niveles.api');

router.route('/registrar_niveles')
    .post(
        function(req,res){
            api_niveles.registrar(req,res);
        }
    );
router.route('/listar_niveles')
    .get(
        function(req,res){
            api_niveles.listar_niveles(req, res);
        }
    ) 
module.exports=router;       
        