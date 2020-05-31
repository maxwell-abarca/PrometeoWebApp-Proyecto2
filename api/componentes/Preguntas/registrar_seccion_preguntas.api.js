'use strict';
const modelo_pregunta = require('./registrar_seccion_preguntas.model');
module.exports.registrar = (req, res) => {
    let nueva_pregunta = new modelo_pregunta(
        {
            id_pregunta:req.body.ObjectId,
            id_institucion:req.body.id_institucion,
            pregunta: req.body.pregunta,
            respuesta: req.body.respuesta,
            estado: 'Activo'
        }

    );
    nueva_pregunta.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: `No se registro la pregunta.`
            });
        } else {
            res.json({
                success: true,
                msg: `se registró la pregunta de manera correcta.`
            }
            );
        }
    });

};
module.exports.listar_pregunta = (req, res) => {
    modelo_pregunta.find().then(
        function (pregunta) {
            if (pregunta.length > 0) {
                res.json(
                    {
                        success: true,
                        pregunta: pregunta
                    }
                );
            } else {
                res.json(
                    {
                        success: false,
                        msg: `No se encontró pregunta alguna.`

                    }
                )

            }
        }

    )

};

module.exports.buscar_por_id=function(req,res){
    modelo_pregunta.find({_id:req.body.id_mod_pregunta}).then(
        function(pregunta){
            if (pregunta) {
                res.json({success: true, pregunta:pregunta});
            } else {
                res.json({success: false, pregunta:pregunta});
            }
        }
    );
};

module.exports.actualizar=function(req,res){
    modelo_pregunta.findByIdAndUpdate(req.body.id,{$set: req.body},
        function(error){
            if (error) {
                res.json({success: false, msg:'No se pudo actualizar la pregunta.'});
            } else {
                res.json({success: true, msg:'La pregunta se actualizó correctamente.'});
            }
        }
        
        );
}


module.exports.eliminar=function(req,res){
    modelo_pregunta.findByIdAndDelete(req.body.id,
        function(error){
            if (error) {
                res.json({success: false, msg:'No se pudo eliminar la pregunta.'});
            } else {
                res.json({success: true, msg:'La pregunta se eliminó correctamente.'});  
            }
        }
        
        );
}