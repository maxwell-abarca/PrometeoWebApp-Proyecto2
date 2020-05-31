'use strict';

const express = require('express');
const router = express.Router();
const api_instituciones_cercanas=require('./instituciones_cercanas.api');

router.route('/registrar_instituciones_cercanas')

.post(
    function(req, res){
        api_instituciones_cercanas.registrar(req,res);
    }
);

//Listar

module.exports=router;