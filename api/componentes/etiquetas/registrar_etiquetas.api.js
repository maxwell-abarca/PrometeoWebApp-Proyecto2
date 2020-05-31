'use strict';
const modelo_etiqueta = require('./registrar_etiquetas.model');
module.exports.registrar = (req, res) => {
    let nueva_etiqueta = new modelo_etiqueta(
        {
            id_etiqueta: req.body.ObjectId,
            id_institucion: req.body.id_institucion,
            etiqueta: req.body.etiqueta,
            descripcion: req.body.descripcion,
            estado: 'Activo'
        }


    );
    nueva_etiqueta.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `no se pudo registrar la etiqueta debido al error ${error}`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `etiqueta registrada correctamente`
                }
            );
        }
    });
};
module.exports.listar_etiqueta = (req, res) => {
    modelo_etiqueta.find().then(
        function (etiqueta) {
            if (etiqueta.length > 0) {
                res.json(
                    {
                        success: true,
                        etiqueta: etiqueta
                    }
                );
            } else {
                res.json(
                    {
                        success: false,
                        msg: `revise los campos de nuevo`
                    }
                );
            }
        }
    );
};
module.exports.buscar_por_id = function (req, res) {
    modelo_etiqueta.find({ _id: req.body.id_etiqueta }).then(
        function (etiqueta) {
            if (etiqueta) {
                res.json(
                    {
                        success: true,
                        etiqueta: etiqueta
                    }
                );
            } else {
                res.json(
                    {
                        success: false,
                        etiqueta: etiqueta
                    }
                )
            }
        }
    );
};
module.exports.actualizar = function (req, res) {
    console.log(req.body.id);
    modelo_etiqueta.findByIdAndUpdate(req.body.id, { $set: req.body },
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
    modelo_etiqueta.findByIdAndDelete(req.body.id,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo eliminar la etiqueta.' });
            } else {
                res.json({ success: true, msg: 'La etiqueta se eliminó correctamente.' });
            }
        }
    );
}

