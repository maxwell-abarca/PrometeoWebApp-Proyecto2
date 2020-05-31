'use strict'
const model_padre = require('./usuarios_padre.model');


module.exports.registrar_padre = (req, res) => {
    let nuevo_padre = new model_padre(
        {
            padre_id: req.body.ObjectId,
            padre_nombre: req.body.padre_nombre,
            padre_apellido: req.body.padre_apellido,
            padre_correo_electronico: req.body.padre_correo_electronico,
            padre_hijos: req.body.padre_hijos,
            padre_fecha: req.body.padre_fecha,
            padre_direccion: req.body.padre_direccion,
            padre_telefono: req.body.padre_telefono,
            padre_nacionalidad: req.body.padre_nacionalidad,
            padre_cedula: req.body.padre_cedula,
            padre_contrasena: req.body.padre_contrasena,
            padre_imagen: req.body.padre_imagen,
            tipo_usuario: "Padre", 
        }
    );
    nuevo_padre.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar el usuario, ocurrio el siguiente error ${error}`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `Se registró satisfactoriamente el usuario`
                }
            );
        }
    });
};

module.exports.validar_padre = function (req, res) {
    model_padre.findOne({ padre_correo_electronico: req.body.padre_correo_electronico }).then(
        function (usuario_padre) {
            if (usuario_padre) {
                if (usuario_padre.padre_contrasena == req.body.padre_contrasena) {
                    res.json({
                        success: true,
                        usuario_padre: usuario_padre
                    });
                } else {
                    res.json({
                        success: false,
                        msg: 'La contraseña no es correcta'
                    });
                }
            } else {
                res.json({
                    success: false,
                    msg: 'El usuario no existe'
                });
            }
        }
    )
};

module.exports.listar_padre = (req, res) => {
    model_padre.find().then(
        function (padres) {
            if (padres.length > 0) {
                res.json(
                    {
                        success: true,
                        padres: padres
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        padres: ' No se encontraron padres'
                    }
                )
            }
        }
    )
};

module.exports.buscar_por_id=function(req,res){
    model_padre.find({_id: req.body.id_padres}).then(
        function(padres){
            if (padres) {
                res.json({success: true, padres: padres});
            } else {
                res.json({success: false, padres: padres});
            }
        }
    );
}

module.exports.actualizar=function(req,res){
    model_padre.findByIdAndUpdate(req.body.id,{$set: req.body},
        
        function(error){
            if (error) {
                res.json({success: false, msg: 'No se pudo actualizar el perfil.'});
            } else {
                res.json({success: true, msg: 'El perfil se actualizó correctamente.'});
            }
        }
        
        );
}

module.exports.eliminar=function(req,res){
    model_padre.findByIdAndDelete(req.body.id,
        function(error){
            if (error) {
                res.json({success: false, msg:'No se pudo eliminar el perfil.'});
            } else {
                res.json({success: true, msg:'El perfil se eliminó correctamente.'}); 
            }
        }
        
        );
}