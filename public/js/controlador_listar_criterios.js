'use strict';
const tabla_criterio = document.querySelector('#tbl_criterio tbody');

let mostrar_datos = () => {
    let criterio = listar_criterio();


    for (let i = 0; i < criterio.length; i++) {
        let fila = tabla_criterio.insertRow();
        fila.insertCell().innerHTML = criterio[i]['numero'];
        fila.insertCell().innerHTML = criterio[i]['criterio'];
        fila.insertCell().innerHTML = criterio[i]['puntaje'];









        let celda_configuracion = fila.insertCell();
        let boton_editar = document.createElement('a');
        boton_editar.href = `actualizar_criterio_evaluacion.html?id_criterio=${criterio[i]['_id']}`
        boton_editar.textContent = 'Editar';
        boton_editar.classList.add('boton_editar');
        celda_configuracion.appendChild(boton_editar);


        let boton_eliminar = document.createElement('a');
        boton_eliminar.href = `eliminar_criterio_evaluacion.html?id_criterio=${criterio[i]['_id']}`
        boton_eliminar.textContent = 'Eliminar';
        boton_eliminar.classList.add('boton_eliminar');
        celda_configuracion.appendChild(boton_eliminar);





    }



};
mostrar_datos();