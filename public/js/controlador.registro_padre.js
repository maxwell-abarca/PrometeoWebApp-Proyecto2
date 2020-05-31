'use strict';


const input_padre_nombre = document.querySelector('#txt_padre_nombre');
const input_padre_apellido = document.querySelector('#txt_padre_apellido');
const input_padre_correo_electronico = document.querySelector('#txt_padre_correo_electronico');
const input_padre_hijos = document.querySelector('#slt_padre_hijos');
const input_padre_fecha = document.querySelector('#txt_padre_fecha');
const input_padre_direccion = document.querySelector('#txt_padre_direccion');
const input_padre_telefono = document.querySelector('#txt_padre_telefono');
const input_padre_nacionalidad = document.querySelector('#txt_padre_nacionalidad');
const input_padre_cedula = document.querySelector('#txt_padre_cedula');
const input_padre_contrasena = document.querySelector('#txt_padre_contrasena');
const imagen_padre = document.querySelector('#image_preview');
const boton_registrar = document.querySelector('#btn_registrar');

let validar = () => {

    let error = false;

    if (input_padre_nombre.value == '') {
        error = true;
        input_padre_nombre.classList.add('error_input');
    } else {
        input_padre_nombre.classList.remove('error_input');
    }

    if (input_padre_apellido.value == '') {
        error = true;
        input_padre_apellido.classList.add('error_input');
    } else {
        input_padre_apellido.classList.remove('error_input');
    }

    if (input_padre_correo_electronico.value == '') {
        error = true;
        input_padre_correo_electronico.classList.add('error_input');
    } else {
        input_padre_correo_electronico.classList.remove('error_input');
    }

    if (input_padre_hijos.value == '') {
        error = true;
        input_padre_hijos.classList.add('error_input');
    } else {
        input_padre_hijos.classList.remove('error_input');
    }

    if (input_padre_fecha.value == '') {
        error = true;
        input_padre_fecha.classList.add('error_input');
    } else {
        input_padre_fecha.classList.remove('error_input');
    }

    if (input_padre_direccion.value == '') {
        error = true;
        input_padre_direccion.classList.add('error_input');
    } else {
        input_padre_direccion.classList.remove('error_input');
    }

    if (input_padre_telefono.value == '') {
        error = true;
        input_padre_telefono.classList.add('error_input');
    } else {
        input_padre_telefono.classList.remove('error_input');
    }

    if (input_padre_nacionalidad.value == '') {
        error = true;
        input_padre_nacionalidad.classList.add('error_input');
    } else {
        input_padre_nacionalidad.classList.remove('error_input');
    }

    if (input_padre_cedula.value == '' || input_padre_cedula.value < 0 ) {
        error = true;
        input_padre_cedula.classList.add('error_input');
    } else {
        input_padre_cedula.classList.remove('error_input');
    }

    if (input_padre_contrasena.value == '') {
        error = true;
        input_padre_contrasena.classList.add('error_input');
    } else {
        input_padre_contrasena.classList.remove('error_input');
    }

    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        let padre_nombre = input_padre_nombre.value;
        let padre_apellido = input_padre_apellido.value;
        let padre_correo_electronico = input_padre_correo_electronico.value;
        let padre_hijos = input_padre_hijos.value;
        let padre_fecha = input_padre_fecha.value;
        let padre_direccion = input_padre_direccion.value;
        let padre_telefono = input_padre_telefono.value;
        let padre_nacionaliad = input_padre_nacionalidad.value;
        let padre_cedula = input_padre_cedula.value;
        let padre_contrasena = input_padre_contrasena.value;
        let padre_imagen = imagen_padre.src;

        registrar_padre(padre_nombre, padre_apellido, padre_correo_electronico, padre_hijos, padre_fecha, padre_direccion, padre_telefono, padre_nacionaliad, padre_cedula, padre_contrasena, padre_imagen);
    } else {
        swal.fire({
            type: 'error',
            tittle: 'El registro no se pudo completar.',
            text: 'Hay campos que no se han llenado.'
        });

    }
};

boton_registrar.addEventListener('click', obtener_datos);   