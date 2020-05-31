'use strict'
const input_nombre = document.querySelector('#input_txt');
const input_descripcion = document.querySelector('#textarea_txt');
const id_usuario = sessionStorage.getItem('id_usuario');
const boton_registrar = document.querySelector('#btn_registrar');

let validar = () =>{
    let error = false;
    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }

    if (input_descripcion.value == '') {
        error = true;
        input_descripcion.classList.add('error_input');
    } else {
        input_descripcion.classList.remove('error_input');
    }

    return error;
};

let obtener_datos = () =>{
    if (validar() == false) {
        let nombre = input_nombre.value;
        let descripcion = input_descripcion.value;
        let id_institucion = id_usuario;
        registrar_idioma(id_institucion, nombre, descripcion)
    } else {
        swal.fire(
            {
                type: 'error',
                title: 'El idioma no se pudo registrar',
                text: 'Por favor verifique los campos que están resaltados'
            }
        )
    };
};

boton_registrar.addEventListener('click',obtener_datos);
$(boton_registrar).on('click', function(){
    if (validar() == true) {
        input_nombre.value;
        input_descripcion.value;
    } else {
        $(input_nombre).val('');
        $(input_descripcion).val('');
    }
})