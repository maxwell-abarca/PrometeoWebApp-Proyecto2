'use strict';

const input_util1 = document.querySelector('#slt_util_1');
const input_util2 = document.querySelector('#slt_util_2');
const input_util3 = document.querySelector('#slt_util_3');
const input_util4 = document.querySelector('#slt_util_4');
const input_util5 = document.querySelector('#slt_util_5');
const input_util6 = document.querySelector('#slt_util_6');
const input_util7 = document.querySelector('#slt_util_7');
const input_util8 = document.querySelector('#slt_util_8');
const input_util9 = document.querySelector('#slt_util_9');
const input_util10 = document.querySelector('#slt_util_10');
const input_descripcion1 = document.querySelector('#descripcion_1');
const input_descripcion2 = document.querySelector('#descripcion_2');
const input_descripcion3 = document.querySelector('#descripcion_3');
const input_descripcion4 = document.querySelector('#descripcion_4');
const input_descripcion5 = document.querySelector('#descripcion_5');
const input_descripcion6 = document.querySelector('#descripcion_6');
const input_descripcion7 = document.querySelector('#descripcion_7');
const input_descripcion8 = document.querySelector('#descripcion_8');
const input_descripcion9 = document.querySelector('#descripcion_9');
const input_descripcion10 = document.querySelector('#descripcion_10');
const cantidad_1 = document.querySelector('#nmb_cantidad_1');
const cantidad_2 = document.querySelector('#nmb_cantidad_2');
const cantidad_3 = document.querySelector('#nmb_cantidad_3');
const cantidad_4 = document.querySelector('#nmb_cantidad_4');
const cantidad_5 = document.querySelector('#nmb_cantidad_5');
const cantidad_6 = document.querySelector('#nmb_cantidad_6');
const cantidad_7 = document.querySelector('#nmb_cantidad_7');
const cantidad_8 = document.querySelector('#nmb_cantidad_8');
const cantidad_9 = document.querySelector('#nmb_cantidad_9');
const cantidad_10 = document.querySelector('#nmb_cantidad_10');
const select_nivel = document.querySelector('#slt_nivel');
const boton_registrar = document.querySelector('#btn_registrar');

let validar = () => {
    let error = false;

    if (input_descripcion1.value == '') {
        error = true;
        input_descripcion1.classList.add('error_input');
    } else {
        input_descripcion1.classList.remove('error_input');
    }

    if (input_descripcion2.value == '') {
        error = true;
        input_descripcion2.classList.add('error_input');
    } else {
        input_descripcion2.classList.remove('error_input');
    }

    if (input_descripcion3.value == '') {
        error = true;
        input_descripcion3.classList.add('error_input');
    } else {
        input_descripcion3.classList.remove('error_input');
    }

    if (input_descripcion4.value == '') {
        error = true;
        input_descripcion4.classList.add('error_input');
    } else {
        input_descripcion4.classList.remove('error_input');
    }

    if (input_descripcion5.value == '') {
        error = true;
        input_descripcion5.classList.add('error_input');
    } else {
        input_descripcion5.classList.remove('error_input');
    }

    if (input_descripcion6.value == '') {
        error = true;
        input_descripcion6.classList.add('error_input');
    } else {
        input_descripcion6.classList.remove('error_input');
    }

    if (input_descripcion7.value == '') {
        error = true;
        input_descripcion7.classList.add('error_input');
    } else {
        input_descripcion7.classList.remove('error_input');
    }

    if (input_descripcion8.value == '') {
        error = true;
        input_descripcion8.classList.add('error_input');
    } else {
        input_descripcion8.classList.remove('error_input');
    }

    if (input_descripcion9.value == '') {
        error = true;
        input_descripcion9.classList.add('error_input');
    } else {
        input_descripcion9.classList.remove('error_input');
    }

    if (input_descripcion10.value == '') {
        error = true;
        input_descripcion10.classList.add('error_input');
    } else {
        input_descripcion10.classList.remove('error_input');
    }

    if (cantidad_1.value == '') {
        error = true;
        cantidad_1.classList.add('error_input');
    } else {
        cantidad_1.classList.remove('error_input');
    }

    if (cantidad_2.value == '') {
        error = true;
        cantidad_2.classList.add('error_input');
    } else {
        cantidad_2.classList.remove('error_input');
    }

    if (cantidad_3.value == '') {
        error = true;
        cantidad_3.classList.add('error_input');
    } else {
        cantidad_3.classList.remove('error_input');
    }

    if (cantidad_4.value == '') {
        error = true;
        cantidad_4.classList.add('error_input');
    } else {
        cantidad_4.classList.remove('error_input');
    }

    if (cantidad_5.value == '') {
        error = true;
        cantidad_5.classList.add('error_input');
    } else {
        cantidad_5.classList.remove('error_input');
    }

    if (cantidad_6.value == '') {
        error = true;
        cantidad_6.classList.add('error_input');
    } else {
        cantidad_6.classList.remove('error_input');
    }

    if (cantidad_7.value == '') {
        error = true;
        cantidad_7.classList.add('error_input');
    } else {
        cantidad_7.classList.remove('error_input');
    }

    if (cantidad_8.value == '') {
        error = true;
        cantidad_8.classList.add('error_input');
    } else {
        cantidad_8.classList.remove('error_input');
    }

    if (cantidad_9.value == '') {
        error = true;
        cantidad_9.classList.add('error_input');
    } else {
        cantidad_9.classList.remove('error_input');
    }
    
    if (cantidad_10.value == '') {
        error = true;
        cantidad_10.classList.add('error_input');
    } else {
        cantidad_10.classList.remove('error_input');
    }

    return error;
};

let obtener_datos = () => {
    if (validar() == false) {
        let util1 = input_util1.value;
        let util2 = input_util2.value;
        let util3 = input_util3.value;
        let util4 = input_util4.value;
        let util5 = input_util5.value;
        let util6 = input_util6.value;
        let util7 = input_util7.value;
        let util8 = input_util8.value;
        let util9 = input_util9.value;
        let util10 = input_util10.value;
        let descripcion1 = input_descripcion1.value;
        let descripcion2 = input_descripcion2.value;
        let descripcion3 = input_descripcion3.value;
        let descripcion4 = input_descripcion4.value;
        let descripcion5 = input_descripcion5.value;
        let descripcion6 = input_descripcion6.value;
        let descripcion7 = input_descripcion7.value;
        let descripcion8 = input_descripcion8.value;
        let descripcion9 = input_descripcion9.value;
        let descripcion10 = input_descripcion10.value;
        let cantidad1 = cantidad_1.value;
        let cantidad2 = cantidad_2.value;
        let cantidad3 = cantidad_3.value;
        let cantidad4 = cantidad_4.value;
        let cantidad5 = cantidad_5.value;
        let cantidad6 = cantidad_6.value;
        let cantidad7 = cantidad_7.value;
        let cantidad8 = cantidad_8.value;
        let cantidad9 = cantidad_9.value;
        let cantidad10 = cantidad_10.value;
        let nivel = select_nivel.value;

        registrar_lista_oficial(util1, util2, util3, util4, util5, util6, util7, util8, util9, util10, descripcion1, descripcion2, descripcion3, descripcion4, descripcion5, descripcion6, descripcion7, descripcion8, descripcion9, descripcion10, cantidad1, cantidad2, cantidad3, cantidad4, cantidad5, cantidad6, cantidad7, cantidad8, cantidad9, cantidad10, nivel);

    } else {
        swal.fire({
            type: 'warning',
            title: 'La lista de útiles no fue registrada.',
            text: 'Por favor verifique los campos que están resaltados.'
        });
    }
};

boton_registrar.addEventListener('click', obtener_datos)

select_nivel.addEventListener('change', function () {
    input_descripcion1.value = '';
    input_descripcion2.value = '';
    input_descripcion3.value = '';
    input_descripcion4.value = '';
    input_descripcion5.value = '';
    input_descripcion6.value = '';
    input_descripcion7.value = '';
    input_descripcion8.value = '';
    input_descripcion9.value = '';
    input_descripcion10.value = '';
    cantidad_1.value = '';
    cantidad_2.value = '';
    cantidad_3.value = '';
    cantidad_4.value = '';
    cantidad_5.value = '';
    cantidad_6.value = '';
    cantidad_7.value = '';
    cantidad_8.value = '';
    cantidad_9.value = '';
    cantidad_10.value = '';
})