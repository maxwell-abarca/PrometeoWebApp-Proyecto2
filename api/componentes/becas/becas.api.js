'use strict'
const modelo_becas=require('./becas.model');

module.exports.registrar=(req,res)=>{
    let nueva_beca=new modelo_becas(
        {
            id_becas:req.body.ObjectId,
            id_institucion:req.body.id_institucion,
            nombre: req.body.nombre,
            tipo: req.body.tipo,
            descripcion:req.body.descripcion,
            estado: 'Activo'
        }
    );

    nueva_beca.save(function(error){
        if(error){
            res.json({
                success:false,
                msg: `No se pudo registrar la beca, ha ocurrido el siguiente error ${error}`
            });
        }else{
            res.json({
                success:true,
                msg: `Se envió correctamente la nueva beca.`
            });
        }
    });
};
module.exports.listar_becas=(req,res) =>{
    modelo_becas.find().then(
        function(becas){
            if(becas.length > 0){
                res.json(
                    {
                        success: true,
                        becas : becas
                    }
                )
            }else{
                res.json(
                    {
                    success: false,
                    becas: `No se encontró ninguna beca.`
                    }
                )
            }
        }
    )};

    module.exports.buscar_por_id=function(req,res){
        modelo_becas.find({_id: req.body.id_institucion}).then(
            function(becas){
                if(becas){
                    res.json({success: true, becas: becas});
                }else{
                    res.json({success: false, becas: becas});
                }
            }
        );
    };

    module.exports.actualizar=function(req,res){
        modelo_becas.findByIdAndUpdate(req.body.id,{$set: req.body},
            function(error){
                if (error) {
                    res.json({success: false, msg: 'No se pudo actualizar la beca.'});
                } else {
                    res.json({success: true, msg: 'La beca ha sido actualizada correctamente.'})
                }
            }
            
            );
    }

   module.exports.eliminar=function(req,res){
       modelo_becas.findByIdAndDelete(req.body.id,
        function(error){
            if (error) {
                res.json({success: false, msg:'No se pudo eliminar la beca.'});
            } else {
                res.json({success: true, msg:'La beca se eliminó correctamente.'});  
            }
        }
        
        );
   }