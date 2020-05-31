'use strict';

const input_padre_nombre = document.querySelector('#txt_padre_nombre');
const input_padre_apellido = document.querySelector('#txt_padre_apellido');
const input_padre_correo_electronico = document.querySelector('#txt_padre_correo_electronico');
const input_padre_hijos = document.querySelector('#slt_padre_hijos');
const input_padre_fecha = document.querySelector('#txt_padre_fecha');
const input_padre_direccion = document.querySelector('#txt_padre_direccion');
const input_padre_telefono = document.querySelector('#txt_padre_telefono');
const input_padre_nacionalidad = document.querySelector('#txt_padre_nacionalidad');
const input_padre_cedula = document.querySelector('#txt_padre_cedula');
const input_padre_contrasena = document.querySelector('#txt_padre_contrasena');
const imagen_padre = document.querySelector('#image_preview');
const boton_registrar = document.querySelector('#btn_registrar');


let get_param=(param)=>{
    let url_string=window.location.href;
    let url=new URL(url_string);
    let id=url.searchParams.get(param);

    return id;
};

let _id=get_param('id_padres');

let padres=buscar_padres(_id);

let mostrar_datos=()=>{
    input_padre_nombre.value=padres[0]['padre_nombre'];
    input_padre_apellido.value=padres[0]['padre_apellido'];
    input_padre_correo_electronico.value=padres[0]['padre_correo_electronico'];
    input_padre_hijos.value=padres[0]['padre_hijos'];
    input_padre_fecha.value= new Date(padres[0]['padre_fecha']).toISOString().substring(0, 10);
    input_padre_direccion.value=padres[0]['padre_direccion'];
    input_padre_telefono.value=padres[0]['padre_telefono'];
    input_padre_nacionalidad.value=padres[0]['padre_nacionalidad'];
    input_padre_cedula.value=padres[0]['padre_cedula'];
    input_padre_contrasena.value=padres[0]['padre_contrasena'];
    imagen_padre.src=padres[0]['padre_imagen'];
}

if (padres) {
    mostrar_datos();
}
function cerrar_sesion() {
  sessionStorage.clear();
  window.location.href = 'index.html';
}

let obtener_datos=()=>{
    let nombre=input_padre_nombre.value;
    let apellido=input_padre_apellido.value;
    let correo=input_padre_correo_electronico.value;
    let hijos=input_padre_hijos.value;
    let fecha=input_padre_fecha.value;
    let direccion=input_padre_direccion.value;
    let telefono= input_padre_telefono.value;
    let nacionalidad=input_padre_nacionalidad.value;
    let cedula=input_padre_cedula.value;
    let contrasena=input_padre_contrasena.value;
    let imagen=imagen_padre.src;
    let identificacion = get_param('id_padres');

    Swal.fire({
        title: '¿Está seguro que desea eliminar el perfil?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí'
      }).then((result) => {
        if (result.value) {
            eliminar_padres(nombre,apellido,correo,hijos,fecha,direccion,telefono,nacionalidad,cedula,contrasena,imagen,identificacion);
            // cerrar_sesion();
        }
      }) 
};

boton_registrar.addEventListener('click', obtener_datos);