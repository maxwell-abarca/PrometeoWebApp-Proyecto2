'use strict'

const id_usuario = sessionStorage.getItem('id_usuario');
const input_nombre = document.querySelector('.input_nombre');
const input_tipo = document.querySelector('.input_tipo');
const input_descripcion = document.querySelector('.textarea_descripcion');
const boton_registrar = document.querySelector('#btn_registrar');

let validar = () => {
    let error = false;

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }

    if (input_tipo.value == '') {
        error = true;
        input_tipo.classList.add('error_input');
    } else {
        input_tipo.classList.remove('error_input');
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
    if (validar()==false) {
        let id_institucion = id_usuario;
        let nombre = input_nombre.value;
        let tipo = input_tipo.value;
        let descripcion = input_descripcion.value;

        registrar_becas(id_institucion, nombre, tipo, descripcion);
    } else {
        swal.fire({
            type: 'warning',
            title: 'La beca no fue registrada.',
            text: 'Por favor verifique los campos que están resaltados.'
        });
    }
};

boton_registrar.addEventListener('click', obtener_datos);
$(boton_registrar).on('click',function () {
    if (validar()==true) {
        input_nombre.value;
        input_tipo.value;
        input_descripcion.value;
    }else{
        $(input_nombre).val('');
        $(input_tipo).val('');
        $(input_descripcion).val('');
    }
  });