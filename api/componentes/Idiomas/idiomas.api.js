'use strict'

const model_idioma = require ('./idiomas.model');

module.exports.registrar_idioma = (req, res) => {
    let nuevo_idioma = new model_idioma({
        idioma_id : req.body.ObjectId,
        id_institucion : req.body.id_institucion,
        idiomas : req.body.idiomas,
        descripcion : req.body.descripcion,
        estado : 'Activo'
    });
    nuevo_idioma.save(function(error){
        if(error){
                res.json({
                    success : false,
                    msg : `No se pudo registrar el idioma, ocurrió el siguiente error ${error}`
                }
                );
        }else{
                res.json({
                    success : true,
                    msg : `Se registro satisfactoriamente el idioma.`
                });
        }
    });
};

module.exports.listar_idioma = (req, res) => {
    model_idioma.find().then(
        function (idiomas) {
            if(idiomas.length > 0) {
                res.json(
                    {
                        success: true,
                        idiomas : idiomas
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        idiomas: 'No se encontraron idiomas.'
                    }
                )
            }
        }
    )
};

module.exports.buscar_por_id=function(req,res){
    model_idioma.find({_id: req.body.id_institucion}).then(
        function(idioma){
            if (idioma) {
                res.json({success: true, idioma: idioma});
            }else{
                res.json({success: false, idioma: idioma});
            }
        }
    );
};

module.exports.actualizar=function(req,res){
    model_idioma.findByIdAndUpdate(req.body.id,{$set: req.body},
        function(error){
            if (error) {
                res.json({success: false, msg: 'No se pudo actualizar el idioma.'});
            } else {
                res.json({success: true, msg: 'El idioma se actualizó correctamente.'});
            }
        }
        
        );
}

module.exports.eliminar=function(req,res){
    model_idioma.findByIdAndDelete(req.body.id,
        function(error){
            if (error) {
                res.json({success: false, msg:'No se pudo eliminar el idioma.'});
            } else {
                res.json({success: true, msg:'El idioma se eliminó correctamente.'});  
            }
        }
        
        );
}