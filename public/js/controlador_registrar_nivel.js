'use strict'


const input_nombre = document.querySelector('#txt_nombre');
const input_descripcion = document.querySelector('#txt_descripcion');
const id_usuario = sessionStorage.getItem('id_usuario')
const boton_enviar = document.querySelector('#btn_registrar');

let validar = () =>{
    let error = false;
    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }
    if(input_descripcion.value == ''){
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

        registrar_nivel(id_institucion, nombre, descripcion, );
    } else {
        swal.fire({
            type : 'error',
            tittle : 'No se ha podido registrar el nivel',
            text : 'No se ha podido registrar el nivel'
        });
    }
};

boton_enviar.addEventListener('click', obtener_datos);
$(boton_enviar).on('click', function(){
    if (validar()==true) {
        input_nombre.value;
        input_descripcion.value;
    } else {
        $(input_nombre).val('');
        $(input_descripcion).val('');
    }
});
