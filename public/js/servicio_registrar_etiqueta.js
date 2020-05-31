'use strict';

let registrar_datos = (petiqueta, pdescripcion, pid_institucion) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_etiqueta",
        method: "POST",
        data: {
            etiqueta: petiqueta,
            descripcion: pdescripcion,
            id_institucion: pid_institucion
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8'

    });

    request.done(function (msg) {
        swal.fire(
            {
                type: 'success',
                title: 'informacion de etiqueta enviada correctamente',
                text: 'las etiquetas fueron registradas con exito',
                onClose: () => {
                    window.location.href = 'listar_etiquetas.html';
                }
            }
        )
    });

    request.fail(function (jqXHR, textStatus) {

    });





};
let listar_etiqueta = () => {
    listar_etiqueta = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_etiqueta",
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        async: false

    });

    request.done(function (res) {
        listar_etiqueta = res.etiqueta;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return listar_etiqueta;


}
let buscar_etiqueta = (id_etiqueta) => {
    let etiqueta = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_etiqueta/" + id_etiqueta,
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        async: false

    });

    request.done(function (res) {
        etiqueta = res.etiqueta
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return etiqueta;


};
let actualizar_etiqueta = (pid, petiqueta, pdescripcion) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_etiqueta",
        method: "POST",
        data: {
            id: pid,
            etiqueta: petiqueta,
            descripcion: pdescripcion,


        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8'

    });

    request.done(function (msg) {
        swal.fire(
            {
                type: 'success',
                title: 'informacion de etiqueta actualizada correctamente',
                text: 'las etiquetas fueron actualizadas con exito',
                onClose: () => {
                    window.location.href = 'listar_etiquetas.html';
                }
            }
        )
    });

    request.fail(function (jqXHR, textStatus) {

    });



}
let eliminar_etiqueta = (pid, petiqueta, pdescripcion) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/eliminar_etiqueta',
        method: "POST",
        data: {
            id: pid,
            etiqueta: petiqueta,
            descripcion: pdescripcion

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',

    });

    request.done(function (res) {
        swal.fire({
            type: 'success',
            title: 'Se ha eliminado la etiqueta con éxito.',
            text: res.msg,
            onClose: () => {
                window.location.href = 'listar_etiquetas.html';
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
