'use strict';

const input_titulo=document.querySelector('#txt_titulo');
const input_fecha=document.querySelector('#dt_fecha');
const input_hora=document.querySelector('#txt_hora');
const input_lugar=document.querySelector('#txt_lugar');
const textarea_descripcion=document.querySelector('#txt_descripcion');
const boton_aceptar=document.querySelector('#btn_aceptar');
const id_usuario=sessionStorage.getItem('id_usuario');
const img_noticias=document.querySelector('#image_preview');

let get_param=(param)=>{
    let url_string=window.location.href;
    let url=new URL(url_string);
    let id=url.searchParams.get(param);

    return id;
};


let _id=get_param('id_noticias_id');

let noticias=buscar_noticias(_id);

let mostrar_datos=()=>{
    input_titulo.value=noticias[0]['titulo'];
    input_fecha.value=noticias[0]['fecha'];
    input_hora.value=noticias[0]['hora'];
    input_lugar.value=noticias[0]['lugar'];
    textarea_descripcion.value=noticias[0]['descripcion'];
    img_noticias.src=noticias[0]['imagen'];

    if (img_noticias.src=='undefined') {
        img_noticias.src = 'img/noticias/image-placeholder.png';
      } 
};

if (noticias) {
    mostrar_datos();
}

let obtener_datos=()=>{
    let titulo=input_titulo.value;
    let fecha=input_fecha.value;
    let hora=input_hora.value;
    let lugar=input_lugar.value;
    let descripcion=textarea_descripcion.value;
    let imagen=img_noticias.src;

    Swal.fire({
        title: '¿Está seguro que desea eliminar la noticia?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí'
      }).then((result) => {
        if (result.value) {
           eliminar_noticias(titulo,fecha,hora,lugar,descripcion,imagen,_id);
        }
      })

}

boton_aceptar.addEventListener('click',obtener_datos);

