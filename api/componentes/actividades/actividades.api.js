'use strict';
const modelo_actividades=require('./actividades.model');

//función registrar la información de la actividad
module.exports.registrar=(req,res)=>{
    let nueva_actividad=new modelo_actividades(
        {
            id_actividades: req.body.ObjectId,
            id_institucion: req.body.id_institucion,
            nombre : req.body.nombre,
            fecha : req.body.fecha,
            hora : req.body.hora,
            lugar : req.body.lugar,
            descripcion : req.body.descripcion,
            imagen : req.body.imagen,
            estado: 'Activo'
            
        }
    );

    nueva_actividad.save(function(error){
        if(error){
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar la actividad , ha ocurrido el siguiente error ${error}`
                }
            );
        }else{
            res.json(
                {
                    success: true,
                    msg:`Se envió correctamente la nueva actividad.`
                }
            );
        }
    });
};
//función listar la información de la actividad
module.exports.listar_actividad=(req,res) =>{
    modelo_actividades.find().then(
        function(actividades){
            if(actividades.length > 0){
                res.json(
                    {
                        success: true,
                        actividades: actividades
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        actividades: 'No se encontró la actividad.'
                    }
                )
            }
              
        }
    )};

    module.exports.buscar_por_id=function(req,res){
        modelo_actividades.find({_id: req.body.id_institucion}).then(
            function(actividades){
                if (actividades) {
                    res.json({success: true, actividades: actividades});
                }else{
                    res.json({success: false, actividades: actividades});
                }
            }
        );
    };

    module.exports.actualizar=function(req,res){
        modelo_actividades.findByIdAndUpdate(req.body.id,{$set: req.body},
            function(error){
                if (error) {
                    res.json({success: false, msg: 'No se pudo actualizar la actividad.'});
                } else {
                    res.json({success: true, msg: 'La actividad se actualizó correctamente.'});
                }
            }
            
            );
    }

    module.exports.eliminar=function(req,res){
        modelo_actividades.findByIdAndDelete(req.body.id,
            function(error){
                if (error) {
                    res.json({success: false, msg:'No se pudo eliminar la actividad.'});
                } else {
                    res.json({success: true, msg:'La actividad se eliminó correctamente.'});  
                }
            }
            
            );
    }