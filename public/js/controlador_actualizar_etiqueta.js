'use strict';
const input_etiqueta = document.querySelector('#txt_etiqueta');
const input_descripcion = document.querySelector('#txt_descripcion');
const boton_actualizar = document.querySelector('#btn_actualizar');
const id_usuario = sessionStorage.getItem('id_usuario');

let get_param = (param) => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);

    return id;

};

let _id = get_param('id_etiqueta');

let etiqueta = buscar_etiqueta(_id);
if (etiqueta) {
    input_etiqueta.value = etiqueta[0]['etiqueta'];
    input_descripcion.value = etiqueta[0]['descripcion'];
}

let obtener_datos = () => {

    let etiqueta = input_etiqueta.value;
    let descripcion = input_descripcion.value;



    Swal.fire({
        title: '¿Está seguro que desea actualizar la etiqueta?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí'
    }).then((result) => {
        if (result.value) {

            actualizar_etiqueta(_id, etiqueta, descripcion);
        }
    })
}
let validar = () => {
    let error = false;
    if (input_etiqueta.value == '') {
        error = true;
        input_etiqueta.classList.add('error_input');
    } else {
        input_etiqueta.classList.remove('error_input');
    }
    if (input_descripcion.value == '') {
        error = true;
        input_descripcion.classList.add('error_input');
    } else {
        input_descripcion.classList.remove('error_input');
    }
    return error;
}
boton_actualizar.addEventListener('click', obtener_datos);
$(boton_actualizar).on('click', function (params) {
    if (validar() == true) {
        swal.fire({
            type: 'error',
            title: 'La etiqueta no pudo ser actualizada.',
            text: 'Por favor verifique que los campos que están resaltados estén llenos.'
        });
    }
})
