'use strict';
const boton_actualizar = document.querySelector('#btn_actualizar');
const select_nivel = document.createElement('select');
let label_nivel = document.createElement('label');
label_nivel.textContent = 'Nivel';
label_nivel.setAttribute("for",select_nivel);
label_nivel.classList.add('label');
const id_usuario = sessionStorage.getItem('id_usuario');
const input_matricula = document.querySelector('#nmb_matricula');
const input_mensualidad = document.querySelector('#nmb_mensualidad');
let nivel = listar_niveles();
let get_param = (param) => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param); /* toma el parámetro del url y retorna el valor */
    return id;
};

let _id = get_param('id_costo');

let niveles = listar_niveles();
let costo = buscar_costo(_id);
let mostrar_datos = () => {
    const contenedor_niveles = document.querySelector('#contenedor_niveles');
    select_nivel.setAttribute("id", "slt_nivel");
    for (let i = 0; i < niveles.length; i++) {

        if (niveles[i]['id_institucion'] == id_usuario) {
            let opcion = new Option(niveles[i]['nombre']);
            select_nivel.options.add(opcion);

        }

        contenedor_niveles.appendChild(label_nivel);
        contenedor_niveles.appendChild(select_nivel);

    }
    input_matricula.value = costo[0]['matricula'];
    input_mensualidad.value = costo[0]['mensualidad'];
}
if (costo) {
    mostrar_datos();
}
let obtener_datos = () => {
    let nivel = select_nivel.value;
    let matricula = input_matricula.value;
    let mensualidad = input_mensualidad.value;
    Swal.fire({
        title: '¿Está seguro que desea actualizar los costos de la matricula y mensualidad?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí'
    }).then((result) => {
        if (result.value) {
            actualizar_costo(_id, nivel, matricula, mensualidad);
        }
    })
}
let validar = () => {
    let error = false;
    if (select_nivel.value == 'Seleccione el nivel') {
        error = true;
        select_nivel.classList.add('error_input');
    } else {
        select_nivel.classList.remove('error_input');
    }
    if (input_matricula.value == '' || input_matricula.value < 0) {
        error = true;
        input_matricula.classList.add('error_input');
    } else {
        input_matricula.classList.remove('error_input');
    }
    if (input_mensualidad.value == '' || input_mensualidad.value < 0) {
        error = true;
        input_mensualidad.classList.add('error_input');
    } else {
        input_mensualidad.classList.remove('error_input');
    }

    return error;

};

boton_actualizar.addEventListener('click', obtener_datos);
$(boton_actualizar).on('click', function () {
    if (validar() == true) {
        swal.fire({
            type: 'warning',
            title: 'El costo no pudo ser actualizado.',
            text: 'Por favor verifique que los campos que están resaltados estén llenos.'
        });
    }
})




