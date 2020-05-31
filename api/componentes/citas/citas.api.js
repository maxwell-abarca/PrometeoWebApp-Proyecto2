'use strict';
const modelo_citas=require('./citas.model');

module.exports.registrar=(req,res)=>{
    let nueva_cita=new modelo_citas(
        {
            id_citas: req.body.ObjectId,
            id_institucion: req.body.id_institucion,
            nombre_cita: req.body.nombre_cita,
            nombre_familiar: req.body.nombre_familiar,
            fecha : req.body.fecha,
            hora : req.body.hora, 
            descripcion : req.body.descripcion 
        }
    );

    nueva_cita.save(function(error){

        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo enviar la cita, ha ocurrido el siguiente ${error}`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `Se envío correctamente la cita al centro educativo`
                }
            );
        }

    });    

};

module.exports.listar_citas=(req,res)=>{
    modelo_citas.find().then(//Busca todos los comentario (citas) que existen
        function(citas){
            if (citas.length > 0) {
                res.json(
                    {
                        success: true,
                        citas: citas
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        citas: 'No se encontró la cita'        
                    }
                )
            }
        }
    )};