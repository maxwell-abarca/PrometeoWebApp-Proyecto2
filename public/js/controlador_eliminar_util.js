'use strict';
const boton_eliminar = document.querySelector('#btn_enviar');
const select_nivel = document.createElement('select');

let label_nivel = document.createElement('label');
label_nivel.innerHTML = "Nivel";
label_nivel.setAttribute("for", select_nivel);
const select_util = document.createElement('select');

let label_util = document.createElement('label');
label_util.innerHTML = "Útil";
label_nivel.setAttribute("for", select_util);
const input_descripcion = document.querySelector('#txt_descripcion');
const input_cantidad = document.querySelector('#nmb_cantidad');
let utiles = listar_util();
let get_param = (param) => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);
    return id;
}
let _id = get_param('id_util');
let util = buscar_util(_id);

let mostrar_datos = () => {
    const contenedor_niveles = document.querySelector('#contenedor_niveles');
    select_nivel.setAttribute("id", "slt_nivel");

    select_util.setAttribute("id", "slt_util");
    select_nivel.disabled = true;
    select_util.disabled = true;
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
        title: '¿Está seguro que desea eliminar el útil?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí'
    }).then((result) => {
        if (result.value) {
            eliminar_util(_id, nivel, util, descripcion, cantidad);
        }
    })
}
boton_eliminar.addEventListener('click', obtener_datos);

