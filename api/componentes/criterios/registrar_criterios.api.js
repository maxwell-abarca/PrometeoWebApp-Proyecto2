'use strict';
const modelo_criterio = require('./registrar_criterios.model');
module.exports.registrar_criterio = (req, res) => {
    let nuevo_criterio = new modelo_criterio(
        {
            id_criterio: req.body.ObjectId,
            id_institucion: req.body.id_institucion,
            numero: req.body.numero,
            criterio: req.body.criterio,
            puntaje: req.body.puntaje
        }
    )
    nuevo_criterio.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `El criterio de evaluación no ha sido registrado correctamente.`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `La información del criterio de evaluación fue registrada correctamente.`

                }
            )
        }
    }
    );
};
module.exports.listar_criterio = (req, res) => {
    modelo_criterio.find().then(
        function (criterio) {
            if (criterio.length > 0) {
                res.json(
                    {
                        success: true,
                        criterio: criterio
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        msg: `El criterio de evaluación no se registró correctamente.`
                    }
                );
            }
        }
    )
};
module.exports.buscar_por_id = function (req, res) {
    modelo_criterio.find({ _id: req.body.id_criterio }).then(
        function (criterio) {
            if (criterio) {
                res.json(
                    {
                        success: true,
                        criterio: criterio
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        criterio: criterio
                    }
                );
            }
        }
    )
};
module.exports.actualizar = function (req, res) {
    console.log(req.body.id);
    modelo_criterio.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error) {
            if (error) {
                res.json({ success: false, msg: `No se ha podido actualizar la etiqueta del cetro educativo.` });
            } else {
                res.json({ success: true, msg: `Se actualizó la etiqueta del centro educativo correctamente.` });
            }
        }
    );
}
module.exports.eliminar = function (req, res) {
    modelo_criterio.findByIdAndDelete(req.body.id,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo eliminar el criterio.' });
            } else {
                res.json({ success: true, msg: 'El criterio se eliminó correctamente.' });
            }
        }

    );
}
