'use strict';
const modelo_costo = require('./registrar_costo.model');
module.exports.registrar_costos = (req, res) => {
    let nuevo_costo = new modelo_costo(
        {
            id_costo: req.body.ObjectId,
            id_institucion: req.body.id_institucion,
            nivel: req.body.nivel,
            matricula: req.body.matricula,
            mensualidad: req.body.mensualidad,
            estado: 'Activo'


        }



    );
    nuevo_costo.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `Revise los campos nuevamente.`
                }
            )
        } else {
            res.json(
                {
                    success: true,
                    msg: `Se ha registrado el costo de la matrícula y mensualidad correctamente.`
                }
            );
        }
    }
    );
};
module.exports.listar_costo = (req, res) => {
    modelo_costo.find().then(
        function (costos) {
            if (costos.length > 0) {
                res.json(
                    {
                        success: true,
                        costos: costos
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        msg: `Revise los campos nuevamente.`
                    }
                )
            }
        }
    );

};
module.exports.buscar_por_id = function (req, res) {
    modelo_costo.find({ _id: req.body.id_costo }).then(
        function (costos) {
            if (costos) {
                res.json(
                    {
                        success: true,
                        costos: costos
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        costos: costos
                    }
                )
            }
        }
    );
};
module.exports.actualizar = function (req, res) {
    console.log(req.body.id);
    modelo_costo.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error) {
            if (error) {
                res.json({ success: false, msg: `No se pudo actualizar la información de los costos.` });
            } else {
                res.json({ success: true, msg: `Se ha actualizado el costo de la matrícula y mensualidad correctamente.` });

            }
        }
    );
}
module.exports.eliminar = function (req, res) {
    modelo_costo.findByIdAndDelete(req.body.id,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudieron eliminar los costos por nivel.' });
            } else {
                res.json({ success: true, msg: 'Se eliminaron correctamente los costos por nivel.' });
            }
        }

    )
}









