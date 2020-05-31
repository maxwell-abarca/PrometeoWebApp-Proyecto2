'use strict';

const input_nombre_util=document.querySelector('#txt_nombre_util');
const input_cantidad=document.querySelector('#nmb_util');
const input_descripcion=document.querySelector('#txt_descripcion');
const boton_aceptar=document.querySelector('#btn_aceptar');
const id_usuario=sessionStorage.getItem('id_usuario');

let get_param=(param)=>{
    let url_string=window.location.href;
    let url=new URL(url_string);
    let id=url.searchParams.get(param);

    return id;
};

let _id=get_param('id_utiles_mep');

let lista_utiles_mep=buscar_lista_utiles_mep(_id);

let mostrar_datos=()=>{
    input_nombre_util.value=lista_utiles_mep[0]['nombre_util'];
    input_cantidad.value=lista_utiles_mep[0]['cantidad'];
    input_descripcion.value=lista_utiles_mep[0]['descripcion'];
};

if (lista_utiles_mep) {
    mostrar_datos();
}

let obtener_datos=()=>{
    let nombre=input_nombre_util.value;
    let cantidad=input_cantidad.value;
    let descripcion=input_descripcion.value;

    Swal.fire({
        title: '¿Está seguro que desea eliminar la lista de útiles del MEP?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí'
      }).then((result) => {
        if (result.value) {
            eliminar_lista_utiles_mep(nombre,cantidad,descripcion,_id);
        }
      })

};
boton_aceptar.addEventListener('click', obtener_datos);