'use strict';
const boton_actualizar = document.querySelector('#btn_enviar');
const select_nivel = document.createElement('select');
let label_nivel = document.createElement('label');
label_nivel.textContent = 'Nivel';
label_nivel.setAttribute("id", select_nivel);

const select_util = document.createElement('select');
let label_util = document.createElement('label');
label_util.textContent = 'Útil';
label_util.setAttribute("id", select_util);
const input_descripcion = document.querySelector('#txt_descripcion');
const input_cantidad = document.querySelector('#nmb_cantidad');

let utiles = listar_util();
let get_param = (param) => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param); /* toma el parámetro del url y retorna el valor */
    return id;
};

let _id = get_param('id_util');

let util = buscar_util(_id);
let mostrar_datos = () => {
    const contenedor_niveles = document.querySelector('#contenedor_niveles');
    select_nivel.setAttribute("id", "slt_nivel");
    select_util.setAttribute("id", "slt_util");
    for (let i = 0; i < util.length; i++) {
        let opcion = new Option(util[i]['nivel']);


        select_nivel.options.add(opcion);
        contenedor_niveles.appendChild(label_nivel);
        contenedor_niveles.appendChild(select_nivel);

    }
    for (let i = 0; i < util.length; i++) {
        let opcion = new Option(util[i]['util']);


        select_util.options.add(opcion);
        contenedor_niveles.appendChild(label_util);
        contenedor_niveles.appendChild(select_util);

    }
    input_descripcion.value = util[0]['descripcion'];
    input_cantidad.value = util[0]['cantidad'];


}
if (util) {
    mostrar_datos();
}
let obtener_datos = () => {

    let nivel = select_nivel.value;
    let util = select_util.value;
    let descripcion = input_descripcion.value;
    let cantidad = input_cantidad.value;
    Swal.fire({
        title: '¿Está seguro que desea actualizar el útil?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí'
    }).then((result) => {
        if (result.value) {

            actualizar_util(_id, nivel, util, descripcion, cantidad);

        }
    })

}
let validar = () => {
    let error = false;
    if (input_descripcion.value == '') {
        input_descripcion.classList.add('error_input');
        error = true;

    } else {
        input_descripcion.classList.remove('error_input');
    }
    if (input_cantidad.value == '') {
        error = true;
        input_cantidad.classList.add('error_input');
    } else {
        input_cantidad.classList.remove('error_input');
    }
    return error;
}


boton_actualizar.addEventListener('click', obtener_datos);
$(boton_actualizar).on('click', function (params) {
    if (validar() == true) {
        swal.fire({
            type: 'error',
            title: 'El útil no pudo ser actualizado.',
            text: 'Por favor verifique que los campos que están resaltados estén llenos.'
        });
    }
})