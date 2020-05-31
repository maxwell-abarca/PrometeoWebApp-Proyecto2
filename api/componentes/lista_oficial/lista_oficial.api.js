'use strict';
const modelo_lista_oficial = require('./lista_oficial.model');
module.exports.registrar = (req, res) => {
    let nueva_lista_oficial = new modelo_lista_oficial(
        {
            util1:req.body.util1,
            util2:req.body.util2,
            util3:req.body.util3,
            util4:req.body.util4,
            util5:req.body.util5,
            util6:req.body.util6,
            util7:req.body.util7,
            util8:req.body.util8,
            util9:req.body.util9,
            util10:req.body.util10,

            descripcion1:req.body.descripcion1,
            descripcion2:req.body.descripcion2,
            descripcion3:req.body.descripcion3,
            descripcion4:req.body.descripcion4,
            descripcion5:req.body.descripcion5,
            descripcion6:req.body.descripcion6,
            descripcion7:req.body.descripcion7,
            descripcion8:req.body.descripcion8,
            descripcion9:req.body.descripcion9,
            descripcion10:req.body.descripcion10,
           
            cantidad1:req.body.cantidad1,
            cantidad2:req.body.cantidad2,
            cantidad3:req.body.cantidad3,
            cantidad4:req.body.cantidad4,
            cantidad5:req.body.cantidad5,
            cantidad6:req.body.cantidad6,
            cantidad7:req.body.cantidad7,
            cantidad8:req.body.cantidad8,
            cantidad9:req.body.cantidad9,
            cantidad10:req.body.cantidad10,

            nivel:req.body.nivel
        }
    );
    nueva_lista_oficial.save(function (error) {
        console.log('err' + error);
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar la lista de útiles, ocurrió el siguiente error ${error}`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `Se registró correctamente la lista de útiles`
                }
            );
        }
    });


};
module.exports.listar_lista_oficial = (req, res) => {
    let nivel = req.query.nivel;
    modelo_lista_oficial.find({
        'nivel': nivel
    }).then(
        function (lista_oficial) {
            if (lista_oficial.length > 0) {
                res.json(
                    {
                        success: true,
                        lista_oficial: lista_oficial
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        lista_oficial: []
                    }
                )
            }
        }
    )

};

module.exports.buscar_lista_oficial = (req, res) => {
    let nivel = req.query.nivel;
    let query = req.query.query;
    modelo_lista_oficial.find({$or:[
        {'nivel': nivel, "util1": /query/},
        {'nivel': nivel, "util2": /query/},
        {'nivel': nivel, "util3": /query/},
        {'nivel': nivel, "util4": /query/},
        {'nivel': nivel, "util5": /query/},
        {'nivel': nivel, "util6": /query/},
        {'nivel': nivel, "util7": /query/},
        {'nivel': nivel, "util8": /query/},
        {'nivel': nivel, "util9": /query/},
        {'nivel': nivel, "util10": /query/},
    ]}).then(
        function (lista_oficial) {
            if (lista_oficial.length > 0) {
                res.json(
                    {
                        success: true,
                        lista_oficial: lista_oficial
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        lista_oficial: []
                    }
                )
            }
        }
    )

};

