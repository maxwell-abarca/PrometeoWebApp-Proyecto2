'use strict';

let listar_material_informativo = () => {
    let listar_material_informativo = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_informacion",
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        listar_material_informativo = res.informacion;
    });
    return listar_material_informativo;
};

let registrar_material_informativo = (preglamento, pproceso_matricula, psistema_evaluacion, precomendaciones, pareas_informativas, pseccion_ayuda, ptalleres_adicionales, pdeportes, pinformacion_adicional, pid_institucion) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_informacion",
        method: "POST",
        data: {
            reglamento: preglamento,
            proceso_matricula: pproceso_matricula,
            sistema_evaluacion: psistema_evaluacion,
            recomendaciones: precomendaciones,
            areas_informativas: pareas_informativas,
            seccion_ayuda: pseccion_ayuda,
            talleres_adicionales: ptalleres_adicionales,
            deportes: pdeportes,
            informacion_adicional: pinformacion_adicional,
            id_institucion: pid_institucion
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });
    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: '¡Material informativo enviado de forma exitosa!',
            // onClose: () => {
            //     window.location.href = 'listar_material_informativo.html';
            // }
            // text: `Saludos estimado(a) usuario la noticia "${ptitulo}" ha sido registrada en el sistema.`
        });
    });
}
let buscar_material = (id_material) => {
    let material = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_material/" + id_material,
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        material = res.informacion;
    });

    return material
};
let actualizar_material = (pid, preglamento, pproceso_matricula, psistema_evaluacion, precomendaciones, pareas_informativas, pseccion_ayuda, ptalleres_adicionales, pdeportes, pinformacion_adicional) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizar_material",
        method: "POST",
        data: {
            id: pid,
            reglamento: preglamento,
            proceso_matricula: pproceso_matricula,
            sistema_evaluacion: psistema_evaluacion,
            recomendaciones: precomendaciones,
            areas_informativas: pareas_informativas,
            seccion_ayuda: pseccion_ayuda,
            talleres_adicionales: ptalleres_adicionales,
            deportes: pdeportes,
            informacion_adicional: pinformacion_adicional,

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });
    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: '¡Material informativo actualizado de forma exitosa!',
            onClose: () => {
                window.location.href = 'listar_material_informativo.html';
            }
            // text: `Saludos estimado(a) usuario la noticia "${ptitulo}" ha sido registrada en el sistema.`
        });
    });
    request.fail(function (jqXHR, textStatus) {

    });
}
let eliminar_material = (pid, preglamento, pproceso_matricula, psistema_evaluacion, precomendaciones, pareas_informativas, pseccion_ayuda, ptalleres_adicionales, pdeportes, pinformacion_adicional) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/eliminar_material",
        method: "POST",
        data: {
            id: pid,
            reglamento: preglamento,
            proceso_matricula: pproceso_matricula,
            sistema_evaluacion: psistema_evaluacion,
            recomendaciones: precomendaciones,
            areas_informativas: pareas_informativas,
            seccion_ayuda: pseccion_ayuda,
            talleres_adicionales: ptalleres_adicionales,
            deportes: pdeportes,
            informacion_adicional: pinformacion_adicional,

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });
    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: '¡Material informativo eliminado de forma exitosa!',
            onClose: () => {
                window.location.href = 'listar_material_informativo.html'
            }

            // text: `Saludos estimado(a) usuario la noticia "${ptitulo}" ha sido registrada en el sistema.`
        });
    });
    request.fail(function (jqXHR, textStatus) {

    });
}
