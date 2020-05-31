'use strict';
const modelo_ranking = require('./ranking_mep.model');

/*Funcion 1 Nos permite registrar los datos*/
module.exports.registrar = (req, res) => {
    let nuevo_ranking = new modelo_ranking(
        {
            id_ranking: req.body.ObjectId,
            puesto1 : req.body.puesto1,
            puesto2 : req.body.puesto2,
            puesto3 : req.body.puesto3,
            puesto4 : req.body.puesto4,
            puesto5 : req.body.puesto5,
            puesto6 : req.body.puesto6,
            puesto7 : req.body.puesto7,
            puesto8 : req.body.puesto8,
            puesto9 : req.body.puesto9,
            puesto10 : req.body.puesto10,
        }
    );
    nuevo_ranking.save(function(error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar el ranking del MEP, ocurrió el siguiente error ${error}`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `Se registró correctamente el ranking del MEP.`
                }
            );

        }

    });
}


module.exports.listar_ranking_mep = (req, res) => {

    modelo_ranking.find().then(
        function(ranking){
            if(ranking.length >0){
                res.json(
                    {
                        success: true,
                        ranking: ranking
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        ranking: 'No hay ranking.'
                    }
                )
            }
            
        }
        
    )};   

    module.exports.actualizar = function (req, res) {

        modelo_ranking.findByIdAndUpdate(req.body.id, { $set: req.body },
            function (error) {
                if (error) {
                    res.json({ success: false, msg: `No se ha podido actualizar el ranking de los centros educativos.` });
                } else {
                    res.json({ success: true, msg: `Se actualizó el ranking de los centros educativos correctamente.` });
                }
            }
        );
    }

    module.exports.buscar_por_id = function (req, res) {
        modelo_ranking.find({ _id: req.body.id_ranking }).then(
            function (ranking) {
                if (ranking) {
                    res.json(
                        {
                            success: true,
                            ranking: ranking
                        }
                    );
                } else {
                    res.json(
                        {
                            success: false,
                            ranking: ranking
                        }
                    )
                }
            }
        );
    };










let eliminar_institucion = (pid, pinstitucion_nombre, pinstitucion_nombre_encargado, pinstitucion_apellido_encargado, pinstitucion_departamento_encargado,pinstitucion_telefono, pinstitucion_correo_electronico, pinstitucion_nombre_inscrito, pinstitucion_ideologia, pinstitucion_bachillerato_internacional,pinstitucion_fundacion, pinstitucion_referencia, pinstitucion_tipo, pinstitucion_generos, pinstitucion_cedula, pinstitucion_provincia, pinstitucion_canton,pinstitucion_distrito, pinstitucion_direccion, pinstitucion_sitio_web, pinstitucion_fax, pinstitucion_imagen, pinstitucion_facebook, pinstitucion_twitter, pinstitucion_cedula_encargado,pinstitucion_correo_electronico_encargado) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/eliminar_institucion",
        method: "POST",
        data: {
            id: pid,
            institucion_nombre: pinstitucion_nombre,
            institucion_nombre_encargado: pinstitucion_nombre_encargado,
            institucion_apellido_encargado: pinstitucion_apellido_encargado,
            institucion_departamento_encargado: pinstitucion_departamento_encargado,
            institucion_telefono: pinstitucion_telefono,
            institucion_correo_electronico: pinstitucion_correo_electronico,
            institucion_nombre_inscrito: pinstitucion_nombre_inscrito,
            institucion_ideologia: pinstitucion_ideologia,
            institucion_bachillerato_internacional: pinstitucion_bachillerato_internacional,
            institucion_fundacion: pinstitucion_fundacion,
            institucion_referencia: pinstitucion_referencia,
            institucion_tipo: pinstitucion_tipo,
            institucion_generos: pinstitucion_generos,
            institucion_cedula: pinstitucion_cedula,

            institucion_provincia: pinstitucion_provincia,
            institucion_canton: pinstitucion_canton,
            institucion_distrito: pinstitucion_distrito,
            institucion_direccion: pinstitucion_direccion,
            institucion_sitio_web: pinstitucion_sitio_web,
            institucion_fax: pinstitucion_fax,
            institucion_imagen: pinstitucion_imagen,
            institucion_facebook: pinstitucion_facebook,
            institucion_twitter: pinstitucion_twitter,
            institucion_cedula_encargado: pinstitucion_cedula_encargado,
            institucion_correo_electronico_encargado: pinstitucion_correo_electronico_encargado,
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (msg) {

        swal.fire({
            type: 'success',
            title: 'Usuario eliminado Correctamente.',
            text: `El usuario centro eduativo ha sido elimiado correctamente`,
            showConfirmButton: false,
            timer: 4000
        });
        /*setTimeout("window.location.href = 'index.html';",4500);*/
    });

    request.fail(function (msg) {
        Swal.fire({
            type: 'error',
            title: 'Error.',
            text: '¡Ocurrió un error!',
        });
    });
}
