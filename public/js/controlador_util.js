'use strict';
const input_descripcion = document.querySelector('#txt_descripcion');
const id_usuario = sessionStorage.getItem('id_usuario');
let niveles = listar_niveles();
const contenedor_nivel = document.querySelector('#contenedor_niveles');
const contenedor_util = document.querySelector('#contenedor_util');
const input_cantidad = document.querySelector('#nmb_cantidad');
let select_nivel = document.createElement('select');
let label_nivel = document.createElement('label');
label_nivel.innerHTML = "Nivel";
label_nivel.setAttribute("for", select_nivel);
select_nivel.setAttribute("id", "slt_nivel");

for (let i = 0; i < niveles.length; i++) {
  if (niveles[i]['id_institucion']==id_usuario) {
    let opcion = new Option(niveles[i]['nombre']);


    select_nivel.options.add(opcion);
  }

  contenedor_nivel.appendChild(label_nivel);
  contenedor_nivel.appendChild(select_nivel);

}

let utiles = listar_utiles_mep();
let select_util = document.createElement('select');
let label_util = document.createElement('label');
label_util.innerHTML = "Util";
label_util.setAttribute("for", select_util);
select_util.setAttribute("id", "slt_util");


  for (let i = 0; i < utiles.length; i++) {

    
    let opcion = new Option(utiles[i]['nombre_util']);


    select_util.options.add(opcion);
    contenedor_util.appendChild(label_util);
    contenedor_util.appendChild(select_util);

  

}



const boton_atras = document.querySelector('#btn_atras');
const boton_enviar = document.querySelector('#btn_enviar');



let validar = () => {
  let error = false;
  if (input_descripcion.value == '') {
    error = true;
    input_descripcion.classList.add('error_input');
  } else {
    input_descripcion.classList.remove('error_input');
  }
  if (input_cantidad.value == '') {
    input_cantidad.classList.add('error_input');
  } else {
    input_cantidad.classList.remove('error_input');
  }

  return error;


}
let obtener_datos = () => {
  if (validar() == false) {
    let nivel = select_nivel.value;
    let util = select_util.value;
    let descripcion = input_descripcion.value;
    let cantidad = input_cantidad.value;
    let id_institucion = id_usuario;



    registrar_util(nivel, util, descripcion, cantidad, id_institucion);

  } else {
    swal.fire(
      {
        type: 'error',
        title: 'Por favor revise los campos del formulario de manera correcta.',
        text: 'La informacion del útil no se ha enviado correctamente.'
      }
    );
  }

};
boton_enviar.addEventListener('click', obtener_datos);
$(boton_enviar).on('click', function () {
  if (validar() == true) {
    select_nivel.value;
    select_util.value;
    input_descripcion.value;
    input_cantidad.value;

  } else {
    $(input_descripcion).val('');
    $(input_cantidad).val('');

  }

})
