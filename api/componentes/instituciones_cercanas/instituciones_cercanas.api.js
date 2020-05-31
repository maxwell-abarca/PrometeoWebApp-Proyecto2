'use strict';
const modelo_instituciones_cercanas=require('./instituciones_cercanas.model');

module.exports.registrar=(req,res)=>{
    let nuevo_instituciones_cercanas=new modelo_instituciones_cercanas(

        {
            id_instituciones_cercanas: req.body.ObjectId,
            id_padre: req.body.id_padre,
            institucion1: req.body.institucion1,
            institucion2: req.body.institucion2,
            institucion3: req.body.institucion3,
            institucion4: req.body.institucion4,
            institucion5: req.body.institucion5,
            institucion6: req.body.institucion6,
            institucion7: req.body.institucion7,
            institucion8: req.body.institucion8,
            institucion9: req.body.institucion9,
            institucion10: req.body.institucion10

        }

    );

    nuevo_instituciones_cercanas.save(function(error){
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar los centros educativos cercanos, ocurrió el siguiente error ${error}` 
                }
            );

        }else{
            res.json(
                {
                    success: true,
                    msg: `Se registró correctamente los centros educativos cercanos a su ubicación.`  
                }
            );
        }

    });
};

//listar

// module.exports.listar_instituciones_cercanas=(req,res)=>{
//     modelo_instituciones_cercanas.find().then(
//         function(instituciones_cercanas){
//             if (instituciones_cercanas >0) {
//                 res.json(
//                     {
//                         success: true,
//                         instituciones_cercanas: instituciones_cercanas
//                     }
//                 )
//             } else {
//                 res.json(
//                     {
//                         success: false,
//                         instituciones_cercanas: 'No hay centros educativos cercanos a tú ubicación.'
//                     }
//                 )
//             }
//         }
//     )};