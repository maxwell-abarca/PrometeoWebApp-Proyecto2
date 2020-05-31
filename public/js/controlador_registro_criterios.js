'use strict';

const input_nmb_criterio = document.querySelector('#nmb_criterio');
const input_txt_criterio = document.querySelector('#txt_criterio');
const input_nmb_puntaje = document.querySelector('#nmb_puntaje');
const boton_registrar = document.querySelector('#btn_registrar');
const boton_agregar = document.querySelector('#btn_agregar');
const id_usuario = sessionStorage.getItem('id_usuario');

let validar = () => {
    let error = false;
    if (input_nmb_criterio.value == '' || input_nmb_criterio.value > 10 || input_nmb_criterio.value < 0) {
        error = true;
        input_nmb_criterio.classList.add('error_input');
    } else {
        input_nmb_criterio.classList.remove('error_input');
    }
    if (input_txt_criterio.value == '') {
        error = true;
        input_txt_criterio.classList.add('error_input');
    } else {
        input_nmb_criterio.classList.remove('error_input');
    }
    if (input_nmb_puntaje.value == '' || input_nmb_puntaje.value > 10 || input_nmb_puntaje < 0) {
        error = true;
        input_nmb_puntaje.classList.add('error_input');
    } else {
        input_nmb_puntaje.classList.remove('error_input');
    }
    return error;

}
let obtener_datos = () => {
    if (validar() == false) {
        let numero = input_nmb_criterio.value;
        let criterio = input_txt_criterio.value;
        let puntaje = input_nmb_puntaje.value;
        let id_institucion = id_usuario;


        registrar_criterio(numero, criterio, puntaje, id_institucion);
    } else {
        swal.fire(
            {
                type: 'error',
                title: 'Revise cada campo del formulario.',
                text: 'El criterio de evaluación no se registró correctamente.'
            }
        );
    }
};
boton_registrar.addEventListener('click', obtener_datos);
$(boton_registrar).on('click', function () {

    if (validar() == true) {
        input_nmb_criterio.value;
        input_txt_criterio.value;
        input_nmb_puntaje.value;

    } else {
        $(input_nmb_criterio).val('');
        $(input_txt_criterio).val('');
        $(input_nmb_puntaje).val('');
    }

})




