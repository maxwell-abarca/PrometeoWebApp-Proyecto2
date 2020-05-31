'use strict'

const textarea_comentario = document.querySelector('#div_registro_comentarios #textarea_comentario');
const boton_enviar = document.querySelector('#enviar_comentario');
const star_container = document.querySelector('#div_registro_comentarios .starrr');
const id_padre = sessionStorage.getItem('id_usuario');
const imagen_padre = document.querySelector('#div_registro_comentarios .padre_img');
const label_nombre = document.querySelector('#label_nombre');
const padre_nombre = '';
const container = document.querySelector('#div_registro_comentarios');
let estrellas_registro = 0;  
$('#div_registro_comentarios .starrr').starrr({
    rating: 0 ,
    change: function(e, value){
    estrellas_registro = value;
  }
});

$(document).ready(
  function comentarios(){


    if (tipo_usuario=='Institucion') {
      container.style.display = 'none'; 
    }
    
    let imagen = listar_padre();
    

  for (let e = 0; e < imagen.length; e++) {
    
    if (imagen[e]['padre_id']==id_padre) {

      imagen_padre.src = imagen[e]['padre_imagen'];
      imagen_padre.value = imagen[e]['padre_imagen'];
      label_nombre.innerHTML = ('Escribe tu comentario '+imagen[e]['padre_nombre']+' '+imagen[e]['padre_apellido']);
      label_nombre.value = imagen[e]['padre_nombre']+' '+imagen[e]['padre_apellido'];
      break;
    }
  } 
         
  });

  let validacion=()=>{
    let error = false;
    if (textarea_comentario.value == '') {
      textarea_comentario.classList.add('error_input');
      error = true;
      }else{
        textarea_comentario.classList.remove('error_input');
      }
    if (estrellas_registro==0) {
      star_container.classList.add('error_input');
      error = true;
    }else{
      star_container.classList.remove('error_input');
    }
    
  return error;
  }


  let obtener_datos=()=>{
    if (validacion()==false) {
        let id_institucion = getUrl();
        let nombre = label_nombre.value;
        let imagen = imagen_padre.value;
        let comentario = textarea_comentario.value;
        let stars = estrellas_registro;

        registrar_comentarios(id_institucion, nombre, imagen, comentario, stars);
        registrar_estrellas(id_institucion,nombre,imagen,comentario,stars)
    } else {
        swal.fire({
            type: 'error',
            title: 'El comentario no ha sido enviado',
            text: 'Por favor revise los campos que están resaltados'
        });
    }
};

boton_enviar.addEventListener('click',obtener_datos);
$(boton_enviar).on('click', function () {
  if (validacion() == true) {
    textarea_comentario.value;
  } else {
      $(textarea_comentario).val('');
      $(estrellas).val('0');
      
  }
});