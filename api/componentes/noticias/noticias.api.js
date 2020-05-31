'use strict';
const modelo_noticias=require('./noticias.model');

module.exports.registrar=(req,res)=>{
    let nueva_noticia=new modelo_noticias(
        {
            id_noticias: req.body.ObjectId,
            id_institucion: req.body.id_institucion,
            titulo: req.body.titulo,
            fecha: req.body.fecha,
            hora: req.body.hora,
            lugar: req.body.lugar,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            estado: 'Activo'
        }
    );

    nueva_noticia.save(function(error){
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar la noticia, ha ocurrido el error ${error}.`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `Se envió correctamente la nueva noticia.`
                }
            );
        }
    });

};

module.exports.listar_noticias=(req,res)=>{
    modelo_noticias.find().then(
        function(noticias){
            if (noticias.length > 0) {
                res.json(
                    {
                        success: true,
                        noticias: noticias
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        noticias: 'No se encontró la noticia.'
                    }
                )
            }
        }
    )};


module.exports.buscar_por_id=function(req,res){
    modelo_noticias.find({_id:req.body.id_noticias_id}).then(
        function(noticias){
            if (noticias) {
                res.json({success: true, noticias: noticias});
            } else {
                res.json({success: false, noticias: noticias});
            }
        }
    );
};

module.exports.actualizar=function(req,res){
    modelo_noticias.findByIdAndUpdate(req.body.id,{$set: req.body},
        function(error){
            if (error) {
                res.json({success: false, msg: 'No se pudo actualizar la noticia.'});
            }else{
                res.json({success: true, msg: 'La noticia se actualizó correctamente.'}); 
            }
        }
        
        );
}

module.exports.eliminar=function(req,res){
    modelo_noticias.findByIdAndDelete(req.body.id,
        function(error){
            if (error) {
                res.json({success: false, msg:'No se pudo eliminar la noticia.'});
            } else {
                res.json({success: true, msg:'La noticia se eliminó correctamente.'});   
            }
        }
        
        );
}