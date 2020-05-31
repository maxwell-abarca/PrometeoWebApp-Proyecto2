'use strict';
const input_numero = document.querySelector('#nmb_criterio');
const input_nombre = document.querySelector('#txt_criterio');
const input_puntaje = document.querySelector('#nmb_puntaje');
const boton_eliminar = document.querySelector('#btn_actualizar');

let get_param = (param) => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);
    return id;
}

let _id = get_param('id_criterio');

let criterios = buscar_criterio(_id);

let mostrar_datos = () => {
    input_numero.value = criterios[0]['numero'];
    input_nombre.value = criterios[0]['criterio'];
    input_puntaje.value = criterios[0]['puntaje'];
}
if (criterios) {
    mostrar_datos();
}
let obtener_datos = () => {
    let numero = input_numero.value;
    let nombre = input_nombre.value;
    let puntaje = input_puntaje.value;

    Swal.fire({
        title: '¿Está seguro que desea eliminar el criterio?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí'
    }).then((result) => {
        if (result.value) {
            eliminar_criterio(_id, numero, nombre, puntaje);
        }
    })
};
boton_eliminar.addEventListener('click', obtener_datos);

