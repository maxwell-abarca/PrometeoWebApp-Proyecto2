'use strict'
const input_nombre = document.querySelector('#input_txt');
const input_descripcion = document.querySelector('#textarea_txt');
const id_usuario = sessionStorage.getItem('id_usuario');
const boton_registrar = document.querySelector('#btn_registrar');

let get_param=(param)=>{
    let url_string=window.location.href;
    let url=new URL(url_string);
    let id=url.searchParams.get(param);

    return id;
};

//Así llamamos a esa función

let _id=get_param('id_institucion');//

let idiomas=buscar_idioma(_id);

let mostrar_datos=()=>{
    input_nombre.value=idiomas[0]['idiomas'];
    input_descripcion.value=idiomas[0]['descripcion'];
    
};

if (idiomas) {
    mostrar_datos();
}

let obtener_datos = () =>{
    
        let nombre = input_nombre.value;
        let descripcion = input_descripcion.value;
       
        swal.fire({

            title: '¿Está seguro que desea eliminar el idioma?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí'
          }).then((result) => {
            if (result.value) {
                eliminar_idioma(nombre, descripcion, _id)
            }
          })     

};

boton_registrar.addEventListener('click',obtener_datos);

