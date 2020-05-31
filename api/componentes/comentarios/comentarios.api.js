'use strict'

const model_comentario = require ('./comentarios.model');

module.exports.registrar_comentario = (req, res) => {
    let nuevo_comentario = new model_comentario({
        comentario_id : req.body.ObjectId,
        id_institucion : req.body.id_institucion,
        nombre : req.body.nombre,
        imagen : req.body.imagen,
        comentario : req.body.comentario,
        stars : req.body.stars,
        estado : 'Activo'
    });
    nuevo_comentario.save(function(error){
        if(error){
                res.json({
                    success : false,
                    msg : `No se pudo registrar el comentario, ocurrio el siguiente error ${error}`
                }
                );
        }else{
                res.json({
                    success : true,
                    msg : `Se registro satisfactoriamente el comentario.`
                });
        }
    });
};

module.exports.listar_comentarios = (req, res) => {
    model_comentario.find().then(
        function (comentarios) {
            if(comentarios.length > 0) {
                res.json(
                    {
                        success: true,
                        comentarios : comentarios
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        comentarios: 'No se encontraron comentarios.'
                    }
                )
            }
        }
    )
};