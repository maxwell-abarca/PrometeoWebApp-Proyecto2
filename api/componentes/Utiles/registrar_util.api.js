'use strict';
const modelo_util = require('./regitstrar_util.model');
module.exports.registrar_util = (req, res) => {
    let nuevo_util = new modelo_util(
        {
            id_util: req.body.ObjectId,
            nivel: req.body.nivel,
            util: req.body.util,
            descripcion: req.body.descripcion,
            cantidad: req.body.cantidad,
            id_institucion: req.body.id_institucion,
            estado: 'Activo'




        }



    );
    nuevo_util.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar el útil`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `se ha registrado el util correctamente`
                }
            );
        }
    }
    )

};
module.exports.listar_util = (req, res) => {
    modelo_util.find().then(
        function (util) {
            if (util.length > 0) {
                res.json(
                    {
                        success: true,
                        util: util
                    }
                );
            } else {
                res.json(
                    {
                        success: false,
                        msg: `No se ha podido registrar la informacion del útil.`
                    }
                );
            }
        }


    )



};
module.exports.buscar_por_id = function (req, res) {
    modelo_util.find({ _id: req.body.id_util }).then(
        function (util) {
            if (util) {
                res.json(
                    {
                        success: true,
                        util: util
                    }
                );
            } else {
                res.json(
                    {
                        success: false,
                        util: util
                    }
                )
            }
        }


    );

};
module.exports.actualizar = function (req, res) {
    console.log(req.body.id);
    modelo_util.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error) {
            if (error) {
                res.json({ success: false, msg: `No se pudo actualizar la informacion de los costos.` });
            } else {
                res.json({ success: true, msg: `Se ha actualizado el costo de la matrícula y mensualidad correctamente.` });

            }
        }
    );
}
module.exports.eliminar = function (req, res) {
    modelo_util.findByIdAndDelete(req.body.id,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo eliminar el útil.' });
            } else {
                res.json({ success: true, msg: 'El util se eliminó correctamente.' });
            }
        }
    )
};


