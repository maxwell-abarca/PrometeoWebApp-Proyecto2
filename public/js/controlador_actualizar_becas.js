'use strict';

const id_usuario = sessionStorage.getItem('id_usuario');
const input_nombre = document.querySelector('.input_nombre');
const input_tipo = document.querySelector('.input_tipo');
const input_descripcion = document.querySelector('.textarea_descripcion');
const boton_registrar = document.querySelector('#btn_registrar');

let get_param=(param)=>{
    let url_string=window.location.href;
    let url=new URL(url_string);
    let id=url.searchParams.get(param);

    return id;
};

let _id=get_param('id_institucion');

let becas=buscar_becas(_id);

let mostrar_datos=()=>{
    input_nombre.value=becas[0]['nombre'];
    input_tipo.value=becas[0]['tipo'];
    input_descripcion.value=becas[0]['descripcion'];
};

if(becas){
    mostrar_datos();
}

let obtener_datos=()=>{
    let nombre=input_nombre.value;
    let tipo=input_tipo.value;
    let descripcion=input_descripcion.value;

    Swal.fire({
        title: '¿Está seguro que desea actualizar la beca?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí'
      }).then((result) => {
        if (result.value) {
            actualizar_becas(nombre,tipo,descripcion,_id);
        }
      })


};


/***Parte para validar que en la actualización no dejen campos vacios en el formulario***/

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



boton_registrar.addEventListener('click', obtener_datos);
$(boton_registrar).on('click',function () {


    if (validar()==true) {
        swal.fire({
            type: 'warning',
            title: 'La beca no pudo ser actualizada.',
            text: 'Por favor verifique que los campos que están resaltados estén llenos.'
        });
    } 

})