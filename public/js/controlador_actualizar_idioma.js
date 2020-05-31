'use strict';

const input_nombre=document.querySelector('#input_txt');
const textarea_descripcion=document.querySelector('#textarea_txt');
const boton_aceptar=document.querySelector('#btn_aceptar');

let get_param=(param)=>{
    let url_string=window.location.href;
    let url=new URL(url_string);
    let id=url.searchParams.get(param);

    return id;
};

let _id=get_param('id_institucion');//

let idiomas = buscar_idioma(_id);


let mostrar_datos=()=>{
    input_nombre.value=idiomas[0]['idiomas'];
 
     textarea_descripcion.value=idiomas[0]['descripcion'];
    
};

if (idiomas) {
    mostrar_datos();
}

    let obtener_datos=()=>{
        let idiomas=input_nombre.value;
        let descripcion=textarea_descripcion.value;

        Swal.fire({
            title: '¿Está seguro que desea actualizar el idioma ?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí'
          }).then((result) => {
            if (result.value) {
                actualizar_idioma(idiomas, descripcion,_id);
            }
          })

    
   
    }

    let validar = () =>{
        let error = false;
        if (input_nombre.value == '') {
            error = true;
            input_nombre.classList.add('error_input');
        } else {
            input_nombre.classList.remove('error_input');
        }
    
        if (textarea_descripcion.value == '') {
            error = true;
            textarea_descripcion.classList.add('error_input');
        } else {
            textarea_descripcion.classList.remove('error_input');
        }
    
        return error;
    };
    

boton_aceptar.addEventListener('click', obtener_datos);
$(boton_aceptar).on('click',function () {

    if (validar()==true) {
        swal.fire({
            type:'warning',
            title: 'El idioma no pudo ser actualizado.',
            text: 'Por favor verifique que los campos que están resaltados estén llenos.'
        });
    } 


})