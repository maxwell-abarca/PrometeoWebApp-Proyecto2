'use strict';

const input_nombre=document.querySelector('#txt_nombre');
const input_fecha=document.querySelector('#dt_fecha');
const input_hora=document.querySelector('#txt_hora');
const input_lugar=document.querySelector('#txt_lugar');
const textarea_descripcion=document.querySelector('#txt_descripcion');
const boton_aceptar=document.querySelector('#btn_aceptar');
const id_usuario=sessionStorage.getItem('id_usuario');
const img_actividades=document.querySelector('#image_preview');

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

let obtener_datos=()=>{
    if (validacion()==false) {
        let id_institucion=id_usuario;
        let nombre=input_nombre.value;
        let fecha=input_fecha.value;
        let hora=input_hora.value;
        let lugar=input_lugar.value;
        let descripcion=textarea_descripcion.value;
        let imagen=img_actividades.src;

        registrar_actividades(nombre,fecha,hora,lugar,descripcion,id_institucion,imagen);

    } else {
        swal.fire({
            type:'warning',
            title: 'La actividad no fue registrada.',
            text: 'Por favor verifique los campos que están resaltados.'
        });
    }
};

boton_aceptar.addEventListener('click',obtener_datos);
$(boton_aceptar).on('click',function () {
    if (validacion()==true) {
        input_nombre.value;
        input_fecha.value;
        input_hora.value;
        input_lugar.value;
        textarea_descripcion.value;
        img_actividades.src;
    }else{
        $(input_nombre).val('');
        $(input_fecha).val('');
        $(input_hora).val('');
        $(input_lugar).val('');
        $(textarea_descripcion).val('');
        img_actividades.src = 'img/actividades/image-placeholder.png';
    }
  });


// function mostrar_actividades2(){

//     let filtro=input_filtro.value;
//     // let lista_actividades=listar_actividades();
//     let tbody=document.querySelector('#tbl_actividades tbody');
//     tbody.innerHTML='';

//     for(let i=0; i<lista_actividades.length; i++){

//         if (lista_actividades[i]['nombre'].toLowerCase().includes(filtro.toLowerCase()) || lista_actividades[i]['fecha'].toLowerCase().includes(filtro.toLowerCase())|| lista_actividades[i]['hora'].toLowerCase().includes(filtro.toLowerCase()) || lista_actividades[i]['lugar'].toLowerCase().includes(filtro.toLowerCase()) || lista_actividades[i]['descripcion'].toLowerCase().includes(filtro.toLowerCase())
//         && actividades[i]['id_institucion']==id_institucion) {
//             let fila=tbody.insertRow();

//             let nombre=fila.insertCell();
//             let fecha=fila.insertCell();
//             let hora=fila.insertCell();
//             let lugar=fila.insertCell();
//             let descripcion=fila.insertCell();
//             let celda_imagen=fila.insertCell();

//             nombre.innerHTML=lista_actividades[i]['nombre'];
//             fecha.innerHTML=lista_actividades[i]['fecha'];
//             hora.innerHTML=lista_actividades[i]['hora'];
//             lugar.innerHTML=lista_actividades[i]['lugar'];
//             descripcion.innerHTML=lista_actividades[i]['descripcion'];

//             let imagen=document.createElement('img');
//             imagen.classList.add('imagen_tabla');

//             if (lista_actividades[i]['imagen']) {
//                 imagen.src=lista_actividades[i]['imagen'];
//             } else {
//                 imagen.src='img/registro_padre/image_placeholder/image_placeholder.jpeg'
//             }

//             celda_imagen.appendChild(imagen);
//         }

//     }

// };




