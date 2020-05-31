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
const boton_eliminar = document.querySelector('#btn_registrar');
let get_param = (param) => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);
    return id;
}

let _id = get_param('id_material');
let material = buscar_material(_id);

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
};
let obtener_datos = () => {
    let reglamento = textarea_reglamento.value;
    let proceso_matricula = textarea_proceso_matricula.value;
    let evaluacion = textarea_sistema_evaluacion.value;
    let recomendaciones = textarea_recomendaciones.value;
    let areas = textarea_areas_informativas.value;
    let seccion_ayuda = textarea_seccion_ayuda.value;
    let talleres = textarea_talleres_adicionales.value;
    let deportes = textarea_deportes.value;
    let info_adicional = textarea_informacion_adicional.value;

    Swal.fire({
        title: '¿Está seguro que desea eliminar la información del material informativo?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí'
    }).then((result) => {
        if (result.value) {
            eliminar_material(_id, reglamento, proceso_matricula, evaluacion, recomendaciones, areas,
                seccion_ayuda, talleres, deportes, info_adicional)
        }
    })

};
boton_eliminar.addEventListener('click', obtener_datos);