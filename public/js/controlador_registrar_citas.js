'use strict';
const input_nombre_cita=document.querySelector('#txt_nombre_cita');
const input_nombre_familiar=document.querySelector('#txt_nombre_familiar');
const input_fecha=document.querySelector('#dt_fecha');
const input_hora=document.querySelector('#tm_hora');
const textarea_descripcion=document.querySelector('#txt_descripcion');
const boton_registrar_cita=document.querySelector('#btn_registrar_cita');
const id_usuario=sessionStorage.getItem('id_usuario');
const error=false; 
let validacion=()=>{
    let error=false;
    if (input_nombre_cita.value=='') {
        error=true;
        input_nombre_cita.classList.add('error_input');
    } else {
        input_nombre_cita.classList.remove('error_input');
    }

    if (input_nombre_familiar.value=='') {
        error=true;
        input_nombre_familiar.classList.add('error_input');
    } else {
        input_nombre_familiar.classList.remove('error_input');
    }

    if (input_fecha.value=='') {
        error=true;
        input_fecha.classList.add('error_input');
    } else {
        input_fecha.classList.remove('error_input');
    }

    if (input_hora.value=='') {
        error=true;
        input_hora.classList.add('error_input');
    } else {
        input_hora.classList.remove('error_input');
    }

    if (textarea_descripcion.value=='') {
        error=true;
        textarea_descripcion.classList.add('error_input');
    } else {
        textarea_descripcion.classList.remove('error_input');
    }
    return error;
};

let obtener_datos=()=>{
    if (validacion()==false) {
        let id_institucion=id_usuario;
        let nombre_cita=input_nombre_cita.value;
        let nombre_familiar=input_nombre_familiar.value;
        let fecha=input_fecha.value;
        let hora=input_hora.value;
        let descripcion=textarea_descripcion.value;

        registrar_citas(nombre_cita,nombre_familiar,fecha,hora,descripcion,id_institucion);
    } else {
        swal.fire({
            type: 'warning',
            title: 'la cita no ha sido enviada',
            text: 'Por favor revise los campos que están resaltados'
        });
    }
};

let limpiar_campos=()=>{
    error=true;
   if (input_nombre_cita.value==error && input_nombre_familiar.value==error && input_fecha.value==error &&
    input_hora.value==error && textarea_descripcion.value==error) {
    input_nombre_cita.value=='';
    input_nombre_familiar='';
    input_fecha='';
    input_hora='';
    textarea_descripcion='';
   }
 
};

boton_registrar_cita.addEventListener('click', obtener_datos,limpiar_campos)

// if (boton_registrar_cita.addEventListener=='click') {
//     addEventListener.reset()=input_nombre_cita;
//     // input_nombre_familiar='';
//     // input_fecha='';
//     // input_hora='';
//     // textarea_descripcion='';

// }

