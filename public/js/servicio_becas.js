'use strict';

let registrar_becas = (pid_institucion, pnombre, ptipo, pdescripcion) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/registrar_becas',
        method: "POST",
        data: {
            id_institucion: pid_institucion,
            nombre: pnombre,
            tipo: ptipo,
            descripcion: pdescripcion
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });
    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: '!La beca ha sido registrada de forma exitosa!',
            text: `Saludos estimado(a) la beca ha sido registrada a su centro educativo.`
        });
    });
}
let listar_becas = () => {
    let listar_becas = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_becas", //se usa el mismo nombre que se pone en el route
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        listar_becas = res.becas;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return listar_becas;

};

let buscar_becas = (id_institucion) => {
    let becas = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_becas/" + id_institucion,
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        becas = res.becas;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return becas;
};

let actualizar_becas = (pnombre, ptipo, pdescripcion, pid) => {

    let request = $.ajax({
        url: 'http://localhost:4000/api/actualizar_becas',
        method: "POST",
        data: {
            nombre: pnombre,
            tipo: ptipo,
            descripcion: pdescripcion,
            id: pid
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',

    });

    request.done(function (res) {
        swal.fire({
            type: 'success',
            title: 'Actualización realizada con éxito.',
            text: res.msg,
            onClose: () => {
                window.location.href = 'listar_becas.html';
            }
        });
    });

    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Proceso no realizado',
            text: res.msg
        });

    });

};

let eliminar_becas = (pnombre, ptipo, pdescripcion, pid) => {

    let request = $.ajax({
        url: 'http://localhost:4000/api/eliminar_becas',
        method: "POST",
        data: {
            nombre: pnombre,
            tipo: ptipo,
            descripcion: pdescripcion,
            id: pid
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    });

    request.done(function (res) {
        swal.fire({
            type: 'success',
            title: 'Se ha eliminado la beca con éxito.',
            text: res.msg,
            onClose: () => {
                window.location.href = 'listar_becas.html';
            }
        });
    });


    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Proceso no realizado',
            text: res.msg
        });

    });
}
