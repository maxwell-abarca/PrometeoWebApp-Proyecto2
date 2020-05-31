'use strict';
let registrar_criterio = (pnumero_criterio, pcriterio, ppuntaje, pid_institucion) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_criterio",
        method: "POST",
        data: {
            numero: pnumero_criterio,
            criterio: pcriterio,
            puntaje: ppuntaje,
            id_institucion: pid_institucion
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8'
    });

    request.done(function (msg) {
        swal.fire(
            {
                type: 'success',
                title: 'Informacion del criterio fue registrada correctamente.',
                text: 'La información del criterio de evaluación fue registrada correctamente.',
                onClose: () => {
                    window.location.href = 'listar_criterios.html';
                }
            }
        );
    });

    request.fail(function (jqXHR, textStatus) {

    });

}
let listar_criterio = () => {
    listar_criterio = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_criterio",
        method: "GET",
        data: {},
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        async: false
    });

    request.done(function (res) {
        listar_criterio = res.criterio;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return listar_criterio;
};
let buscar_criterio = (id_criterio) => {
    let criterios = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_criterio/" + id_criterio,
        method: "GET",
        data: {},
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        async: false
    });


    request.done(function (res) {
        criterios = res.criterio;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return criterios;
}
let actualizar_criterio = (pid, pnumero_criterio, pcriterio, ppuntaje) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_criterio",
        method: "POST",
        data: {
            id: pid,
            numero: pnumero_criterio,
            criterio: pcriterio,
            puntaje: ppuntaje


        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8'
    });

    request.done(function (msg) {
        swal.fire(
            {
                type: 'success',
                title: 'Informacion del criterio actualizada correctamente.',
                text: 'La información del criterio de evaluación fue actualizada correctamente.',
                onClose: () => {
                    window.location.href = 'listar_criterios.html'
            }
            }
        );
    });

    request.fail(function (jqXHR, textStatus) {

    });
}
let eliminar_criterio = (pid, pnumero_criterio, pcriterio, ppuntaje) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/eliminar_criterio",
        method: "POST",
        data: {
            id: pid,
            numero: pnumero_criterio,
            criterio: pcriterio,
            puntaje: ppuntaje


        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8'
    });

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'Se ha eliminado la etiqueta con éxito.',
            text: 'La etiqueta se ha eliminado de manera exitosa',
            onClose: () => {
                window.location.href = 'listar_criterios.html';
            }
        });
    });

    request.fail(function (jqXHR, textStatus) {
        swal.fire({
            type: 'error',
            title: 'Proceso no realizado',
            text: res.msg
        });

    });
}
