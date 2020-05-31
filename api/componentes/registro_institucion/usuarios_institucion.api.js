'use strict'
const nodeMailer = require('nodemailer');  
const model_institucion = require ('./usuarios_institucion.model');

const transporter =  nodeMailer.createTransport({
    service : 'gmail',
    auth:{
        user : 'servicio.soporte.prometeo@gmail.com',
        pass : 'Grupokoel2019'
    }
});
function contrasena() {  
    let contrasena = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numeros = "0123456789"
    let caracteres = "!@#$%^&*"
    for(let i = 0; i < 5; i++) {
        contrasena += letras.charAt(Math.floor(Math.random() * letras.length));
            }
        contrasena += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    for(let e = 0; e < 2; e++) {
    contrasena += numeros.charAt(Math.floor(Math.random() * numeros.length));
            }



    return contrasena;
}

module.exports.registrar_institucion = (req, res) =>{
    let nuevo_institucion = new model_institucion(
        {
            institucion_id: req.body.ObjectId,
            institucion_nombre : req.body.institucion_nombre,
            institucion_nombre_inscrito : req.body.institucion_nombre_inscrito,
            institucion_cedula : req.body.institucion_cedula,
            institucion_telefono : req.body.institucion_telefono,
            institucion_tipo : req.body.institucion_tipo,
            // institucion_idiomas : req.body.institucion_idiomas,
            institucion_generos : req.body.institucion_generos,
            institucion_provincia : req.body.institucion_provincia,
            institucion_canton : req.body.institucion_canton,
            institucion_distrito : req.body.institucion_distrito,
            institucion_direccion : req.body.institucion_direccion,
            institucion_fundacion : req.body.institucion_fundacion,
            institucion_referencia : req.body.institucion_referencia,
            institucion_ideologia : req.body.institucion_ideologia,
            institucion_bachillerato_internacional : req.body.institucion_bachillerato_internacional,
            institucion_correo_electronico : req.body.institucion_correo_electronico,
            institucion_sitio_web : req.body.institucion_sitio_web,
            institucion_facebook : req.body.institucion_facebook,
            institucion_twitter : req.body.institucion_twitter,
            institucion_nombre_encargado : req.body.institucion_nombre_encargado,
            institucion_apellido_encargado : req.body.institucion_apellido_encargado,
            institucion_cedula_encargado : req.body.institucion_cedula_encargado,
            institucion_departamento_encargado : req.body.institucion_departamento_encargado,
            institucion_correo_electronico_encargado : req.body.institucion_correo_electronico_encargado,
            institucion_contrasena : contrasena(),
            institucion_fax : req.body.institucion_fax,
            institucion_imagen : req.body.institucion_imagen,
            tipo_usuario : "Institucion",
            estado : 'Activo'
        }
    );
    


    nuevo_institucion.save(function(error){
        if(error){
            res.json(
                {
                    success : false,
                    msg : `No se pudo registrar el usuario, ocurrio el siguiente error ${error}`
                }
            );
        }else{
            res.json({
                success : true,
                msg : `Se registró satisfactoriamente el usuario.`
                });
            let mailOptions = {
                from : 'servicio.soporte.prometeo@gmail.com',
                to : nuevo_institucion.institucion_correo_electronico,
                subject :'Bienvenido a Prometeo ',
                html : `<html>
                <head>
                  <link href="https://http://localhost:3000/public/inicio_sesion.htmfonts.googleapis.com/css?family=Roboto" rel="stylesheet">
                  <style>
                   .wrapper{
                  background : #2c2c54;
                  font-family: 'Roboto', sans-serif;
                }
                .container{
                  margin: 0 auto;
                  background: #fff;
                  width: 500px;
                  text-align: center;
                  padding: 10px;
                }
                .boton{
                  background: #2c2c54;;
                  color: #fff;
                  display: block;
                  padding: 15px;
                  text-decoration: none;
                  width: 50%;
                  margin: 0 auto;
                }
                </style>
                </head>
                <body class="wrapper">
                  <div class="container">
                    <h1>Bienvenido a Prometeo</h1>
                  
                  <p>El lugar donde puedes encontrar el centro educativo ideal para el desarrollo del aprendizaje
                          de tu hijo.</p>
                  <p>El correo electrónico asociado es: ${nuevo_institucion.institucion_correo_electronico}</p>
                  <p>Su contraseña es:${nuevo_institucion.institucion_contrasena}</p>
                  <p>Para ingresar presione el siguiente botón<p> 
                    <a href="http://localhost:3000/public/inicio_sesion.html" class="boton">Prometeo </a>
                  </div>
                  
                </body>
                
              </html>`
            };
            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    console.log(error);
                }else{
                    console.log('Correo Enviado' + info.response);
                }
            });
        }

    });
};

module.exports.validar_institucion = function (req, res){
    model_institucion.findOne({institucion_correo_electronico: req.body.institucion_correo_electronico}).then(
        function(usuario_institucion){
            if(usuario_institucion){
                if(usuario_institucion.institucion_contrasena == req.body.institucion_contrasena){
                    res.json({
                        success: true,
                        usuario_institucion: usuario_institucion
                    });
                } else{
                    res.json({
                        success: false,
                        msg: 'La contraseña no es correcta.'
                    });
                }
            }else{
                res.json({
                    success: false,
                    msg: 'El usuario no existe.'
                });
            }
        }
    )
};

module.exports.listar_institucion = (req, res) => {
    model_institucion.find().then(
        function (instituciones) {
            if(instituciones.length > 0) {
                res.json(
                    {
                        success: true,
                        instituciones : instituciones
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        instituciones: 'No se encontraron instituciones.'
                    }
                )
            }
        }
    )
};
module.exports.buscar_por_id=function(req,res){
    model_institucion.find({_id: req.body.id_institucion}).then(
        function(institucion){
            if(institucion.length > 0){
                res.json({success: true, institucion: institucion});
            }else{
                res.json({success: false, institucion: institucion});
                msg: 'No se encontro el usuario'
            }
        }
    );
};

module.exports.actualizar = function(req, res){
    model_institucion.findByIdAndUpdate(req.body.id, { $set: req.body},
        function(error){
            if(error){
                res.json(
                    {
                        success : false,
                        msg : `No se pudo actualizar el usuario, ocurrio el siguiente error ${error}`
                    }
                );
            }else{
                res.json({
                    success : true,
                    msg : `Se actualizo satisfactoriamente el usuario.`
                    });
            }
    
        }
    );

}
module.exports.eliminar = function (req, res) {
    model_institucion.findByIdAndDelete(req.body.id,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo eliminar el centro educativo.' });
            } else {
                res.json({ success: true, msg: 'El centro educativo se eliminó correctamente.' });
            }
        }
    );
}
