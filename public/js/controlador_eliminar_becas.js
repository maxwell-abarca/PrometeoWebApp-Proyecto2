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
        title: '¿Está seguro que desea eliminar la beca?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí'
      }).then((result) => {
        if (result.value) {
            eliminar_becas(nombre,tipo,descripcion,_id);
        }
      })


};

boton_registrar.addEventListener('click', obtener_datos);