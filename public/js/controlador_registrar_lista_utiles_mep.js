'use strict';

const input_nombre_util=document.querySelector('#txt_nombre_util');
const input_cantidad=document.querySelector('#nmb_util');
const input_descripcion=document.querySelector('#txt_descripcion');
const boton_aceptar=document.querySelector('#btn_aceptar');
// const id_usuario=sessionStorage.getItem('id_usuario');

let validacion=()=>{
    let error=false;
    
    if (input_nombre_util.value=='') {
        error=true;
        input_nombre_util.classList.add('error_input');
    } else {
        input_nombre_util.classList.remove('error_input');
    }

    if (input_cantidad.value=='' || input_cantidad.value <0) {
        error=true;
        input_cantidad.classList.add('error_input');
    } else {
        input_cantidad.classList.remove('error_input');
    }

    if (input_descripcion.value=='') {
        error=true;
        input_descripcion.classList.add('error_input');
    } else {
        input_descripcion.classList.remove('error_input');
    }

    return error;
};

let obtener_datos=()=>{
    if (validacion()==false) {
        // let id_institucion=id_usuario;
        let util= input_nombre_util.value;
        let cantidad= input_cantidad.value;
        let descripcion=input_descripcion.value;

        registrar_lista_utiles_mep(util,cantidad,descripcion);
        
    } else {
        swal.fire({
            type:'warning',
            title: 'Los útiles no fueron registrados.',
            text: 'Por favor verifique los campos que están resaltados.'
        });
    }
};

boton_aceptar.addEventListener('click',obtener_datos);
$(boton_aceptar).on('click',function () {
    if (validacion()==true) {
        input_nombre_util.value;
        input_cantidad.value;
        input_descripcion.value;
    }else{
        $(input_nombre_util).val('');
        $(input_cantidad).val('');
        $(input_descripcion).val('');
    }
  });
