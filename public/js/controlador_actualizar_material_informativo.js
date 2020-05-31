'use strict';
const textarea_reglamento = document.querySelector('#txt_reglamento');
const textarea_proceso_matricula = document.querySelector('#txt_proceso_matricula');
const textarea_sistema_evaluacion = document.querySelector('#txt_sistema_evaluacion');
const textarea_recomendaciones = document.querySelector('#txt_recomendaciones')
const textarea_areas_informativas = document.querySelector('#txt_areas_informativas');
const textarea_seccion_ayuda = document.querySelector('#txt_seccion_ayuda');
const textarea_talleres_adicionales = document.querySelector('#txt_talleres_adicionales');
const textarea_deportes = document.querySelector('#txt_deportes');
const textarea_informacion_adicional = document.querySelector('#txt_informacion_adicional');
const boton_actualizar = document.querySelector('#btn_actualizar');

let get_param = (param) => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);
    return id;
}
let id = get_param('id_material');
let material = buscar_material(id);
let mostrar_datos = () => {
    textarea_reglamento.value = material[0]['reglamento'];
    textarea_proceso_matricula.value = material[0]['proceso_matricula'];
    textarea_sistema_evaluacion.value = material[0]['sistema_evaluacion'];
    textarea_recomendaciones.value = material[0]['recomendaciones'];
    textarea_areas_informativas.value = material[0]['areas_informativas'];
    textarea_seccion_ayuda.value = material[0]['seccion_ayuda'];
    textarea_talleres_adicionales.value = material[0]['talleres_adicionales'];
    textarea_deportes.value = material[0]['deportes'];
    textarea_informacion_adicional.value = material[0]['informacion_adicional'];

}
if (material) {
    mostrar_datos();
}

let obtener_informacion = () => {

    let reglamento = textarea_reglamento.value;
    let proceso_matricula = textarea_proceso_matricula.value;
    let sistema_evaluacion = textarea_sistema_evaluacion.value;
    let recomendaciones = textarea_recomendaciones.value;
    let areas_informativas = textarea_areas_informativas.value;
    let seccion_ayuda = textarea_seccion_ayuda.value;
    let talleres_adicionales = textarea_talleres_adicionales.value;
    let deportes = textarea_deportes.value;
    let informacion_adicional = textarea_informacion_adicional.value;
    Swal.fire({
        title: '¿Está seguro que desea actualizar la información del material informativo?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí'
    }).then((result) => {
        if (result.value) {

            actualizar_material(id, reglamento, proceso_matricula, sistema_evaluacion
                , recomendaciones, areas_informativas, seccion_ayuda, talleres_adicionales, deportes, informacion_adicional
            )
        }
    })



};

let validar = () => {
    let error = false;
    if (textarea_reglamento.value == '') {
        error = true;
        textarea_reglamento.classList.add('error_input');

    } else {
        textarea_reglamento.classList.remove('error_input');
    }
    if (textarea_proceso_matricula.value == '') {
        error = true;
        textarea_proceso_matricula.classList.add('error_input');
    } else {
        textarea_proceso_matricula.classList.remove('error_input');
    }
    if (textarea_sistema_evaluacion.value == '') {
        error = true;
        textarea_sistema_evaluacion.classList.add('error_input');
    } else {
        textarea_sistema_evaluacion.classList.remove('error_input');
    }
    if (textarea_recomendaciones.value == '') {
        error = true;
        textarea_recomendaciones.classList.add('error_input');
    } else {
        textarea_recomendaciones.classList.remove('error_input');
    }
    if (textarea_areas_informativas.value == '') {
        error = true;
        textarea_areas_informativas.classList.add('error_input');
    } else {
        textarea_areas_informativas.classList.remove('error_input');
    }
    if (textarea_seccion_ayuda.value == '') {
        error = true;
        textarea_seccion_ayuda.classList.add('error_input');
    } else {
        textarea_seccion_ayuda.classList.remove('error_input');
    }
    if (textarea_talleres_adicionales.value == '') {
        error = true;
        textarea_talleres_adicionales.classList.add('error_input');
    } else {
        textarea_talleres_adicionales.classList.remove('error_input');
    }
    if (textarea_deportes.value == '') {
        error = true;
        textarea_deportes.classList.add('error_input');
    } else {
        textarea_deportes.classList.remove('error_input');
    }
    if (textarea_informacion_adicional.value == '') {
        error = true;
        textarea_informacion_adicional.classList.add('error_input');
    } else {
        textarea_informacion_adicional.classList.remove('error_input');
    }

    return error;
}
boton_actualizar.addEventListener('click', obtener_informacion);
$(boton_actualizar).on('click', function () {
    if (validar() == true) {
        swal.fire({
            type: 'warning',
            title: 'El material informativo no pudo ser actualizado.',
            text: 'Por favor verifique que los campos que están resaltados estén llenos.'
        });
    } 
})

