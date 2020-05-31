'use strict';
const mongoose = require ('mongoose');

let schema_usuarios = new mongoose.Schema( //Definicion del esquema de la base datos llamado Usuarios
    {
        //Datos que va a contener el esquema
        institucion_id : { type: mongoose.Schema.ObjectId, auto: true },
        institucion_nombre : {type : String, required:true, unique:true},//Nombre con el que se le conoce
        institucion_nombre_inscrito : {type : String, required:true, unique:true},//Nombre con el que esta inscrito
        institucion_cedula : {type : Number, required:true, unique:true},//Numero de cedula juridica
        institucion_telefono : {type : Number, required:true, unique:true},//Numero de telefono de la institucion
        institucion_tipo : {type : String, required:true},//Tipo de institucion(Privado, Publico, academico, cientifico..)
        // institucion_idiomas : {type : String, required:true},//Idiomas que imparte
        institucion_generos : {type : String, required:true},//Generos distribuidos en el centro educativo
        institucion_provincia : {type : String, required:true},//Provincia a la cual pertenece
        institucion_canton : {type : String, required:true},//Canton al que pertenece
        institucion_distrito : {type : String, required:true},//Distrito al que pertenece
        institucion_direccion : {type : String, required:true, unique:true},//Direccion textual de donde esta ubicado el centro educativo
        institucion_fundacion : {type : Number, required:true},//Numero del año de fundacion
        institucion_referencia : {type : String, required:true, unique:true},//Referencia historica de la institucion
        institucion_ideologia : {type : String, required:true},//Ideologia en la que esta basada la institucion
        institucion_bachillerato_internacional : {type : String, required:true},//Si    cuenta con bachillerato internacional o no
        institucion_correo_electronico : {type : String, required:true, unique:true},//Correo de la institucion
        institucion_sitio_web : {type : String, required:true, unique:true},//Enlace o url del sitio web de la institucion
        institucion_facebook : {type : String, required:true, unique:true},//Direccion de fax de la institucion
        institucion_twitter : {type : String, required:true, unique:true},//Direccion de fax de la institucion
        institucion_nombre_encargado : {type : String, required:true},//Nombre del encargado de la institucion
        institucion_apellido_encargado : {type : String, required:true},
        institucion_cedula_encargado : {type : Number, required:true, unique:true},//Numero de cedula juridica
        institucion_departamento_encargado : {type : String, required:true},//Nombre del departamento del encargado
        institucion_correo_electronico_encargado : {type : String, required:true, unique:true},//Correo de la institucion
        institucion_contrasena : {type : String, required:true},
        institucion_fax : {type : String, required:true, unique:true},
        institucion_imagen : {type : String, required:true},
        tipo_usuario : {type : String, required: false},
        estado: {type: String, required: true}
    }
);

module.exports = mongoose.model('Usuario_Institucion', schema_usuarios);//Exporta el esquema definido para la base de datos