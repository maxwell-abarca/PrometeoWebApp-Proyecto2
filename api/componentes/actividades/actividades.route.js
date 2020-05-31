'use strict';
const express=require('express');
const router= express.Router();
const api_actividades=require('./actividades.api');


router.param('id_institucion',function(req, res, next, id_institucion){
    req.body.id_institucion=id_institucion;
    next();//para que continue con la fucnión que lo llamó

})


router.route('/registrar_actividades')//ruta que usamos para probarlo en postman
    .post(
        function(req,res){
            api_actividades.registrar(req,res);
        }
    );
router.route('/listar_actividades')//ruta que usamos para probarlo en postman
        .get(
            function(req,res){
                api_actividades.listar_actividad(req, res);
            }
        )


router.route('/actualizar_actividades')

.post(
    function(req,res){
        api_actividades.actualizar(req,res);
    }
);



router.route('/buscar_actividades/:id_institucion')

.get(
    function(req,res){
        api_actividades.buscar_por_id(req,res);
    }
);

router.route('/eliminar_actividades')
.post(
    function(req,res){
        api_actividades.eliminar(req,res);
    }
);
        

module.exports=router;