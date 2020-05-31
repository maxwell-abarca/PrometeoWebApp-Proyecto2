'use strict';
const modelo_estrellas=require('./estrellas_institucion.model');

module.exports.registrar=(req,res)=>{
    let nuevas_estrellas=new modelo_estrellas(
        {
            id_estrellas: req.body.ObjectId,
            id_institucion: req.body.id_institucion,
            estrellas: req.body.estrellas,
            promedio: req.body.promedio,
            estado: 'Activo'
        }
    );

    nuevas_estrellas.save(function(error){
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar las estrellas ${error}.`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `Se envió correctamente las estrellas.`
                }
            );
        }
    });

};

module.exports.listar_estrellas=(req,res)=>{
    modelo_estrellas.find().sort({estrellas:'desc'}).then(
        function(estrellas){
            if (estrellas.length > 0) {
                res.json(
                    {
                        success: true,
                        estrellas: estrellas
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        estrellas: 'No se encontraron estrellas.'
                    }
                )
            }
        }
    )};
