'use strict';

const input_numero = document.querySelector('#nmb_criterio');
const input_nombre = document.querySelector('#txt_criterio');
const input_puntaje = document.querySelector('#nmb_puntaje');
const boton_actualizar = document.querySelector('#btn_actualizar');
const id_usuario = sessionStorage.getItem('id_usuario');



let get_param = (param) => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);

    return id;
};

let _id = get_param('id_criterio');

let criterios = buscar_criterio(_id);




if (criterios) {
    input_numero.value = criterios[0]['numero'];
    input_nombre.value = criterios[0]['criterio'];
    input_puntaje.value = criterios[0]['puntaje'];

}
let obtener_datos = () => {

    let numero = input_numero.value;
    let criterio = input_nombre.value;
    let puntaje = input_puntaje.value;

    Swal.fire({
        title: '¿Está seguro que desea actualizar la pregunta?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí'
    }).then((result) => {
        if (result.value) {
            actualizar_criterio(_id, numero, criterio, puntaje);

        }
    })
}
let validar = () => {
    let error = false;
    if (input_numero.value == '') {
        error = true;
        input_numero.classList.add('error_input');
    } else {
        input_numero.classList.add('error_input');
    }
    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.add('error_input');
    }
    if (input_puntaje.value == '') {
        error = true;
        input_puntaje.classList.add('error_input');
    } else {
        input_puntaje.classList.add('error_input');
    }

    return error;
}
boton_actualizar.addEventListener('click', obtener_datos);
$(boton_actualizar).on('click', function () {
    if (validar() == true) {
        swal.fire({
            type: 'error',
            title: 'El Criterio no pudo ser actualizado.',
            text: 'Por favor verifique que los campos que están resaltados estén llenos.'
        });
    }
})