'use strict';
const input_pregunta = document.querySelector('#txt_pregunta');
const input_respuesta = document.querySelector('#txt_respuesta');
const boton_registrar = document.querySelector('#btn_registrar');
const id_usuario = sessionStorage.getItem('id_usuario');

let validar = () => {
    let error = false;
    if (input_pregunta.value == '') {
        error = true;
        input_pregunta.classList.add('error_input');
    } else {
        input_pregunta.classList.remove('error_input');
    }
    if (input_respuesta.value == '') {
        error = true;
        input_respuesta.classList.add('error_input');
    } else {
        input_respuesta.classList.remove('error_input');
    }

    return error;


};
let obtener_informacion = () => {
    if (validar() == false) {

        let pregunta = input_pregunta.value;
        let respuesta = input_respuesta.value;
        let id_institucion = id_usuario;
        registrar_pregunta(pregunta, respuesta, id_institucion);
    } else {
        swal.fire({
            type: 'error',
            title: 'La pregunta no se ha registrado correctamente.',
            title: 'Revise los campos que estan resaltados'
        });
    };




}
boton_registrar.addEventListener('click', obtener_informacion);
$(boton_registrar).on('click', function () {
    if (validar() == true) {
        input_pregunta.value;
        input_respuesta.value;
    } else {
        $(input_pregunta).val('');
        $(input_respuesta).val('');


    }
})