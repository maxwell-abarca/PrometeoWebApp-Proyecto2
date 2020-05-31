'use strict';
const boton_actualizar = document.querySelector('#btn_actualizar');
const select_nivel = document.createElement('select');
let label_nivel = document.createElement('label');
label_nivel.textContent = 'Nivel';
label_nivel.setAttribute("for", select_nivel);
label_nivel.classList.add('label');
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


let costo = buscar_costo(_id);
let mostrar_datos = () => {
    const contenedor_niveles = document.querySelector('#contenedor_niveles');
    contenedor_niveles.appendChild(select_nivel);
    select_nivel.setAttribute("id", "slt_nivel");
    for (let i = 0; i < costo.length; i++) {
        let opcion = new Option(costo[i]['nivel']);
    
    
        select_nivel.options.add(opcion);
        contenedor_niveles.appendChild(label_nivel);
        contenedor_niveles.appendChild(select_nivel);
    
    }
    select_nivel.disabled = true;
    select_nivel.value = costo[0]['nivel'];
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
        title: '¿Está seguro que desea eliminar el costo del nivel?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí'
    }).then((result) => {
        if (result.value) {
            eliminar_costo(_id, nivel, matricula, mensualidad);
        }
    })
}
boton_actualizar.addEventListener('click', obtener_datos);


