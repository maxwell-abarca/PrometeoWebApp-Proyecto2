'use strict'

const input_padre_correo_electronico = document.querySelector('#txt_padre_correo_electronico');
const input_padre_contrasena = document.querySelector('#txt_padre_contrasena');
const boton_ingresar_padre = document.querySelector('#btn_ingresar_padre');


$(document).ready((function(){

    $('#padre_familia').show();
    $('#institucion').hide();

}));

$('#checkbox1').change(function(){
    if (this.checked) {
        $('#padre_familia').hide();
        $('#institucion').show();
    }
    else {
 
        $('#padre_familia').show();
        $('#institucion').hide();
    
    }
});
function obtener_datos_padre(){
    let padre_correo_electronico = input_padre_correo_electronico.value;
    let padre_contrasena = input_padre_contrasena.value;

    let errorBlancos = validar_padre_error(padre_correo_electronico, padre_contrasena);


    if (!errorBlancos) {

            validar_padre(padre_correo_electronico, padre_contrasena,function(res){
                if (res.success) {
                  window.location.href = 'index.html';
        
                } else {
                    swal.fire({
                        type:'error',
                        title:'Error',
                        text:`El usuario con la cédula "${padre_correo_electronico}" no existe, o la contraseña es incorrecta.`
                    });
                }
            });

    } 
};

function validar_padre_error(ppadre_correo_electronico, ppadre_contrasena){
    let error = false;
    
    if (ppadre_correo_electronico == '') {
        error = true;
        input_padre_correo_electronico.classList.add('error_input');
    } else {
        input_padre_correo_electronico.classList.remove('error_input');
    }

    if (ppadre_contrasena == '') {
        error = true;
        input_padre_contrasena.classList.add('error_input');
    } else {
        input_padre_contrasena.classList.remove('error_input');
    }

    return error;
}; 

boton_ingresar_padre.addEventListener('click', obtener_datos_padre);
const input_institucion_correo_electronico = document.querySelector('#txt_institucion_correo_electronico');
const input_institucion_contrasena = document.querySelector('#txt_institucion_contrasena');
const boton_ingresar_institucion = document.querySelector('#btn_ingresar_institucion');

function obtener_datos_institucion(){

    let institucion_correo_electronico = input_institucion_correo_electronico.value;
    let institucion_contrasena = input_institucion_contrasena.value;

    let errorBlancos = validar_institucion_error(institucion_correo_electronico, institucion_contrasena);
    if (!errorBlancos) {

            validar_institucion(institucion_correo_electronico, institucion_contrasena,function(res){
                if (res.success) {
                    window.location.href = 'index.html';
        
                } else {
                    swal.fire({
                        type:'error',
                        title:'¡Error!',
                        text:`El correo "${institucion_correo_electronico}" no existe, o la contraseña es incorrecta.`
                    });

                }
            });

    } 
};

function validar_institucion_error(pinstitucion_correo_electronico, pinstitucion_contrasena){
    let error = false;
    
    if (pinstitucion_correo_electronico == '') {
        error = true;
        input_institucion_correo_electronico.classList.add('error_input');
    } else {
        input_institucion_correo_electronico.classList.remove('error_input');
    }

    if (pinstitucion_contrasena == '') {
        error = true;
        input_institucion_contrasena.classList.add('error_input');
    } else {
        input_institucion_contrasena.classList.remove('error_input');
    }

    return error;
}; 
boton_ingresar_institucion.addEventListener('click', obtener_datos_institucion);