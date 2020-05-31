'use strict'


let validar_padre = (ppadre_correo_electronico, ppadre_contrasena, callback) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/validar_padre",
        type: "post",
        contenType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        /*async:false,*/
        data: {
            padre_correo_electronico: ppadre_correo_electronico,
            padre_contrasena: ppadre_contrasena
        }
    });

    request.done(function (response) {

        callback(response);
        sessionStorage.setItem('conectado', response.success);
        sessionStorage.setItem('tipo_usuario', response.usuario_padre.tipo_usuario);
        sessionStorage.setItem('id_usuario', response.usuario_padre.padre_id);
    });

    request.fail(function (response) {
        Swal.fire({
            type: 'error',
            title: '¡Error!',
            text: `El usuario no esta registrado o la contraseña es incorrecta.`,
        })
    });

};

let listar_padre = () => {
    let lista_padre = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_padre",
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });
    request.done(function (res) {
        lista_padre = res.padres;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return lista_padre;
};

let validar_institucion = (pinstitucion_correo_electronico, pinstitucion_constrasena, callback) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/validar_institucion',
        contenType: 'application/x-www-form-urlencoded; charset=UTF-8',
        type: "post",
        dataType: "json",
        data: {
            institucion_correo_electronico: pinstitucion_correo_electronico,
            institucion_contrasena: pinstitucion_constrasena
        }
    });
    request.done(function (response) {
        
        callback(response);
        sessionStorage.setItem('conectado', response.success);
        sessionStorage.setItem('tipo_usuario', response.usuario_institucion.tipo_usuario);
        sessionStorage.setItem('id_usuario', response.usuario_institucion.institucion_id);
    });
    request.fail(function (response) {
        Swal.fire({
            type: 'error',
            title: '¡Error!',
            text: `El usuario no esta registrado o la contraseña es incorrecta.`,
        })
    });
};

let listar_institucion = () => {
    let listar_institucion = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_institucion",
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });
    request.done(function (res) {
        listar_institucion = res.instituciones;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return listar_institucion;
};

let buscar_institucion = (id_institucion) => {
    let institucion = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_institucion/"+id_institucion,
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });
    request.done(function (res) {
        institucion = res.institucion;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return institucion;
};
let actualizar_institucion = (pid,pinstitucion_nombre_encargado, pinstitucion_apellido_encargado, pinstitucion_departamento_encargado, pinstitucion_telefono, pinstitucion_correo_electronico, pinstitucion_nombre_inscrito, pinstitucion_nombre, pinstitucion_bachillerato_internacional, pinstitucion_tipo, /*pinstitucion_idiomas, */pinstitucion_generos, pinstitucion_ideologia, pinstitucion_fundacion, pinstitucion_referencia, pinstitucion_cedula, pinstitucion_provincia, pinstitucion_canton, pinstitucion_distrito, pinstitucion_direccion, pinstitucion_sitio_web, pinstitucion_fax, pinstitucion_facebook, pinstitucion_twitter ,pinstitucion_imagen, pinstitucion_cedula_encargado,pinstitucion_correo_electronico_encargado,  ptipo_usuario) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_institucion",
        method: "POST",
        data: {
            id : pid,
            institucion_nombre: pinstitucion_nombre,
            institucion_nombre_inscrito: pinstitucion_nombre_inscrito,
            institucion_cedula: pinstitucion_cedula,
            institucion_telefono: pinstitucion_telefono,
            institucion_tipo: pinstitucion_tipo,
            /* institucion_idiomas: pinstitucion_idiomas,*/
            institucion_generos: pinstitucion_generos,
            institucion_provincia: pinstitucion_provincia,
            institucion_canton: pinstitucion_canton,
            institucion_distrito: pinstitucion_distrito,
            institucion_direccion: pinstitucion_direccion,
            institucion_fundacion: pinstitucion_fundacion,
            institucion_referencia: pinstitucion_referencia,
            institucion_ideologia: pinstitucion_ideologia,
            institucion_bachillerato_internacional: pinstitucion_bachillerato_internacional,
            institucion_correo_electronico: pinstitucion_correo_electronico,
            institucion_sitio_web: pinstitucion_sitio_web,
            institucion_facebook: pinstitucion_facebook,
            institucion_twitter: pinstitucion_twitter,
            institucion_nombre_encargado: pinstitucion_nombre_encargado,
            institucion_apellido_encargado : pinstitucion_apellido_encargado,
            institucion_cedula_encargado: pinstitucion_cedula_encargado,
            institucion_departamento_encargado: pinstitucion_departamento_encargado,
            institucion_correo_electronico_encargado: pinstitucion_correo_electronico_encargado,
            institucion_fax: pinstitucion_fax,
            institucion_imagen : pinstitucion_imagen
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function(msg){

        swal.fire({
            type: 'success',
            title: 'Usuario registrado Correctamente.',
            text: `Saludos ${pinstitucion_nombre_encargado}, su institución con el nombre de ${pinstitucion_nombre} ha sido registrada exitosamente en el sistema. Puede iniciar sesión con el correo ${pinstitucion_correo_electronico} y la contraseña que ingresó.`,
            showConfirmButton: false,
            timer: 4000
        });
        /*setTimeout("window.location.href = 'index.html';",4500);*/
    });
    
    request.fail(function(msg){
        Swal.fire({
            type: 'error',
            title: 'Error.',
            text: '¡Ocurrió un error!',
          });
    });
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

