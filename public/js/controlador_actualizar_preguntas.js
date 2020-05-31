'use strict';
const input_pregunta = document.querySelector('#txt_pregunta');
const input_respuesta = document.querySelector('#txt_respuesta');
const boton_registrar = document.querySelector('#btn_registrar');
const id_usuario = sessionStorage.getItem('id_usuario');

let get_param=(param)=>{
    let url_string=window.location.href;
    let url=new URL(url_string);
    let id=url.searchParams.get(param);

    return id;
};

let _id=get_param('id_mod_pregunta');

let pregunta=buscar_pregunta(_id);

let mostrar_datos=()=>{
    input_pregunta.value=pregunta[0]['pregunta'];
    input_respuesta.value=pregunta[0]['respuesta'];
};

if (pregunta) {
    mostrar_datos();
}

let obtener_datos=()=>{
    let preguntas=input_pregunta.value;
    let respuesta=input_respuesta.value;

    Swal.fire({
        title: '¿Está seguro que desea actualizar la pregunta?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí'
      }).then((result) => {
        if (result.value) {
            actualizar_pregunta(preguntas,respuesta,_id);
        }
      })

}

/***Parte para validar que en la actualización no dejen campos vacios en el formulario***/

let validar = () => {
  let error = false;
  if (input_pregunta.value == '') {
      error = true;
      input_pregunta.classList.add('error_input');
  } else {
      input_pregunta.classList.remove('error_input');
  }
  if (input_respuesta.value == '') {
      error = true;
      input_respuesta.classList.add('error_input');
  } else {
      input_respuesta.classList.remove('error_input');
  }

  return error;


};

boton_registrar.addEventListener('click',obtener_datos);
$(boton_registrar).on('click',function () {

  if (validar() == true) {

    swal.fire({
        type: 'error',
        title: 'La pregunta no pudo ser actualizada.',
        text: 'Por favor verifique que los campos que están resaltados estén llenos.'
    });
}

});
