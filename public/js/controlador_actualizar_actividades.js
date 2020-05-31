'use strict';

const input_nombre=document.querySelector('#txt_nombre');
const input_fecha=document.querySelector('#dt_fecha');
const input_hora=document.querySelector('#txt_hora');
const input_lugar=document.querySelector('#txt_lugar');
const textarea_descripcion=document.querySelector('#txt_descripcion');
const img_actividades=document.querySelector('#image_preview');
const boton_aceptar=document.querySelector('#btn_aceptar');

let get_param=(param)=>{
    let url_string=window.location.href;
    let url=new URL(url_string);
    let id=url.searchParams.get(param);

    return id;
};

//Así llamamos a esa función

let _id=get_param('id_institucion');//

let actividades=buscar_actividades(_id);

let mostrar_datos=()=>{
     input_nombre.value=actividades[0]['nombre'];
     input_fecha.value=actividades[0]['fecha'];
     input_hora.value=actividades[0]['hora'];
     input_lugar.value=actividades[0]['lugar'];
     textarea_descripcion.value=actividades[0]['descripcion']; 
     img_actividades.src=actividades[0]['imagen'];

    if (img_actividades.src=='undefined') {
      img_actividades.src = 'img/actividades/image-placeholder.png';
    } 
    
};

if (actividades) {
    mostrar_datos();
}

let obtener_datos=()=>{
    let nombre=input_nombre.value;
    let fecha=input_fecha.value;
    let hora=input_hora.value;
    let lugar=input_lugar.value;
    let descripcion=textarea_descripcion.value;
    let imagen=img_actividades.src;

    Swal.fire({
        title: '¿Está seguro que desea actualizar la actividad?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí'
      }).then((result) => {
        if (result.value) {
            actualizar_actividades(nombre,fecha,hora,lugar,descripcion,imagen,_id);
        }
      }) 
}

/***Parte para validar que en la actualización no dejen campos vacios en el formulario***/

let validacion=()=>{
  let error=false;
  
  if (input_nombre.value=='') {
      error=true;
      input_nombre.classList.add('error_input');
  } else {
      input_nombre.classList.remove('error_input');
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

boton_aceptar.addEventListener('click', obtener_datos);
$(boton_aceptar).on('click',function () {

    if (validacion()==true) {
        swal.fire({
            type:'warning',
            title: 'La actividad no pudo ser actualizada.',
            text: 'Por favor verifique que los campos que están resaltados estén llenos.'
        });
    } 


})