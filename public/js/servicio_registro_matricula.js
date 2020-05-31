'use strict';
let registrar_costos = (pnivel, pmatricula, pmensualidad, pid_institucion) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_costo",
        method: "POST",
        data: {
            nivel: pnivel,
            matricula: pmatricula,
            mensualidad: pmensualidad,
            id_institucion: pid_institucion
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8'
    });

    request.done(function (msg) {
        swal.fire(
            {
                type: 'success',
                title: 'Se ha registrado correctamente los costos de la matricula y mensualidad.',
                text: 'Informacion de los costos de la matricula y mensualidad registrados correctamente.',
                onClose: () => {
                    window.location.href = 'listar_costos.html'
                }
            }
        );
    }
    );

    request.fail(function (jqXHR, textStatus) {

    });



}
let listar_costo = () => {
    let listar_costo = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_costo",
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        async: false
    });

    request.done(function (res) {
        listar_costo = res.costos;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return listar_costo;
};
let buscar_costo = (id_costo) => {
    let costo = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_costo/" + id_costo,
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        async: false
    });

    request.done(function (res) {
        costo = res.costos;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return costo;
}
let actualizar_costo = (pid, pnivel, pmatricula, pmensualidad, pid_institucion) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_costo",
        method: "POST",
        data: {
            id: pid,
            nivel: pnivel,
            matricula: pmatricula,
            mensualidad: pmensualidad,
            id_institucion: pid_institucion,
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8'
    });

    request.done(function (res) {
        swal.fire(
            {
                type: 'success',
                title: 'Se ha actualizado correctamente los costos de la matricula y mensualidad.',
                text: 'Informacion de los costos de la matricula y mensualidad actualizados correctamente.',
                onClose: () => {
                    window.location.href = 'listar_costos.html';
                }
            }
        );
    }
    );

    request.fail(function (jqXHR, textStatus) {

    });
}
let eliminar_costo = (pid, pnivel, pmatricula, pmensualidad) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/eliminar_costo",
        method: "POST",
        data: {
            id: pid,
            nivel: pnivel,
            matricula: pmatricula,
            mensualidad: pmensualidad,

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8'
    });

    request.done(function (msg) {
        swal.fire(
            {
                type: 'success',
                title: 'Se ha eliminado correctamente los costos de la matricula y mensualidad.',
                text: 'Informacion de los costos de la matricula y mensualidad Fue eliminada.',
                onClose: () => {
                    window.location.href = 'listar_costos.html';
                }
            }
        );
    }
    );

    request.fail(function (jqXHR, textStatus) {
        swal.fire({
            type: 'error',
            title: 'Proceso no realizado',
            text: res.msg
        });
    });

}
