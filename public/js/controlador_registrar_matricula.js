'use strict';

const input_matricula = document.querySelector('#nmb_matricula');
const input_mensualidad = document.querySelector('#nmb_mensualidad');
const boton_registrar = document.querySelector('#btn_registrar');
const id_usuario = sessionStorage.getItem('id_usuario');
let niveles = listar_niveles();
const contenedor_niveles = document.querySelector('#contenedor_niveles');

let select_nivel = document.createElement('select');

select_nivel.setAttribute("id", "slt_nivel");

let label_nivel = document.createElement('label');

label_nivel.textContent = 'Nivel';
label_nivel.setAttribute("for",select_nivel);
label_nivel.classList.add('label');
for (let i = 0; i < niveles.length; i++) {


    if (niveles[i]['id_institucion']==id_usuario) {
        let opcion = new Option(niveles[i]['nombre']);  
        select_nivel.options.add(opcion);
    }

    contenedor_niveles.appendChild(label_nivel);
    contenedor_niveles.appendChild(select_nivel);

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
let obtener_datos = () => {
    if (validar() == false) {
        let nivel = select_nivel.value;
        let matricula = input_matricula.value;
        let mensualidad = input_mensualidad.value;
        let id_institucion = id_usuario;
        registrar_costos(nivel, matricula, mensualidad, id_institucion)
    } else {
        swal.fire(
            {
                type: 'error',
                title: 'La matricula no pudo ser registrada',
                text: 'Por favor verifique los campos que estan resaltados'
            }
        )
    };

};
boton_registrar.addEventListener('click', obtener_datos);
$(boton_registrar).on('click', function () {
    if (validar() == true) {
        select_nivel.value;
        input_matricula.value;
        input_mensualidad.value;

    } else {
        $(select_nivel).val('Seleccione el nivel');
        $(input_matricula).val('');
        $(input_mensualidad).val('');

    }

})