'use strict';
const tabla = document.querySelector('#tbl_etiquetas tbody');

let mostrar_datos_etiqueta = () => {
    let etiquetas = listar_etiqueta();
    let id_institucion = sessionStorage.getItem('id_usuario');
    let tipo_usuario = sessionStorage.getItem('tipo_usuario');
    if (tipo_usuario == 'Institucion') {
        id_institucion = sessionStorage.getItem('id_usuario')
    } else {
        id_institucion = getUrl();
    }
    for (let i = 0; i < etiquetas.length; i++) {

        if (etiquetas[i]['id_institucion'] == id_institucion) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = etiquetas[i]['etiqueta'];
            fila.insertCell().innerHTML = etiquetas[i]['descripcion'];

            if (tipo_usuario=='Institucion') {


                let celda_configuracion = fila.insertCell();
                let boton_editar = document.createElement('a');
                boton_editar.classList.add('boton_editar');
                boton_editar.textContent = 'Editar';
                boton_editar.href = `actualizar_etiqueta.html?id_etiqueta=${etiquetas[i]['_id']}`
                celda_configuracion.appendChild(boton_editar);
                // 
                let boton_eliminar = document.createElement('a');
                boton_eliminar.classList.add('boton_eliminar')
                boton_eliminar.textContent = 'Eliminar';
                boton_eliminar.href = `eliminar_etiquetas.html?id_etiqueta=${etiquetas[i]['_id']}`;
                celda_configuracion.appendChild(boton_eliminar);
            }

        }

    };




}
function filtrar_etiqueta() {
    var tabla = document.getElementById('tbl_etiquetas');
    var busqueda = document.getElementById('txt_filtro_etiqueta').value.toLowerCase();
    var cellsOfRow = "";
    var found = false;
    var compareWith = "";
    for (var i = 1; i < tabla.rows.length; i++) {
        cellsOfRow = tabla.rows[i].getElementsByTagName('td');
        found = false;
        for (var j = 0; j < cellsOfRow.length && !found; j++) {
            compareWith = cellsOfRow[j].innerHTML.toLowerCase(); if (busqueda.length == 0 || (compareWith.indexOf(busqueda) > -1)) {
                found = true;
            }
        }
        if (found) {
            tabla.rows[i].style.display = '';
        } else {
            tabla.rows[i].style.display = 'none';
        }
    }
}
mostrar_datos_etiqueta();