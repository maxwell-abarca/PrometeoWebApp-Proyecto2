'use strict'
const modelo_niveles = require('./niveles.model');

module.exports.registrar=(req,res)=>{
    let nuevo_nivel= new modelo_niveles({
        id_nivel: req.body.ObjectId,
        id_institucion :req.body.id_institucion,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
    });

    nuevo_nivel.save(function(error){

        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar el nivel, ha ocurrido el siguiente ${error}`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `Se registró correctamente el nivel del centro educativo`
                }
            );
        }

    });    
};

module.exports.listar_niveles=(req,res)=>{
    modelo_niveles.find().then(//Busca todos los (niveles) que existen
        function(niveles){
            if (niveles.length > 0) {
                res.json(
                    {
                        success: true,
                        niveles: niveles
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        niveles: 'No se encontró el nivel'        
                    }
                )
            }
        }
    )};