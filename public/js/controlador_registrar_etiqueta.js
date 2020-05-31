'use strict';
const input_etiqueta = document.querySelector('#txt_etiqueta');
const input_descripcion = document.querySelector('#txt_descripcion');
const boton_enviar = document.querySelector('#btn_registrar');
const id_usuario = sessionStorage.getItem('id_usuario');

let validar = () => {
    let error = false;
    if (input_etiqueta.value == '') {
        error = true;
        input_etiqueta.classList.add('error_input');
    } else {
        input_etiqueta.classList.remove('error_input');
    }
    if (input_descripcion.value == '') {
        error = true;
        input_descripcion.classList.add('error_input');
    } else {
        input_descripcion.classList.remove('error_input');
    }
    return error;
};
let obtener_datos = () => {
    if (validar() == false) {
        let etiqueta = input_etiqueta.value;
        let descripcion = input_descripcion.value;
        let id_institucion = id_usuario;
        registrar_datos(etiqueta, descripcion, id_institucion);
    } else {
        swal.fire(
            {
                type: 'error',
                title: 'no se ha podido registrar nada'
            }
        );
    }
};
boton_enviar.addEventListener('click', obtener_datos);
$(boton_enviar).on('click', function () {
    if (validar() == true) {
        input_etiqueta.value;
        input_descripcion.value;
    } else {
        $(input_etiqueta).val('');
        $(input_descripcion).val('');

    }
});