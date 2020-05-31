'use strict';

const input_titulo=document.querySelector('#txt_titulo');
const input_fecha=document.querySelector('#dt_fecha');
const input_hora=document.querySelector('#txt_hora');
const input_lugar=document.querySelector('#txt_lugar');
const textarea_descripcion=document.querySelector('#txt_descripcion');
const boton_aceptar=document.querySelector('#btn_aceptar');
const id_usuario=sessionStorage.getItem('id_usuario');
const img_noticias=document.querySelector('#image_preview');

let validacion=()=>{
    let error=false;

    if (input_titulo.value=='') {
        error=true;
        input_titulo.classList.add('error_input');
    } else {
        input_titulo.classList.remove('error_input');
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

    if (input_lugar.value=='') {
        error=true;
        input_lugar.classList.add('error_input');
    } else {
        input_lugar.classList.remove('error_input');
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
        let titulo=input_titulo.value;
        let fecha=input_fecha.value;
        let hora=input_hora.value;
        let lugar=input_lugar.value;
        let descripcion=textarea_descripcion.value;
        let imagen=img_noticias.src;

        registrar_noticias(titulo,fecha,hora,lugar,descripcion,id_institucion,imagen);

    } else {
        swal.fire({
            type:'warning',
            title: 'La noticia no fue registrada.',
            text: 'Por favor verifique los campos que están resaltados.'
        });
    }
};

boton_aceptar.addEventListener('click',obtener_datos);
$(boton_aceptar).on('click',function () {
    if (validacion()==true) {
        input_titulo.value;
        input_fecha.value;
        input_hora.value;
        input_lugar.value;
        textarea_descripcion.value;
        img_noticias.src;
    }else{
        $(input_titulo).val('');
        $(input_fecha).val('');
        $(input_hora).val('');
        $(input_lugar).val('');
        $(textarea_descripcion).val('');
        img_noticias.src = 'img/noticias/image-placeholder.png';
    }
  });
