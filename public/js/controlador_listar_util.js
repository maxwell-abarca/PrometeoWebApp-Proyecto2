'use strict';





const tabla_util = document.querySelector('#tbl_utiles tbody');
const boton_agregar = document.querySelector('#btn_agregar');
const div_contenedor = document.querySelector('#form_contenedor');


let mostrar_datos = () => {
    let utiles = listar_util();




    let id_institucion = sessionStorage.getItem('id_usuario');
    let tipo_usuario = sessionStorage.getItem('tipo_usuario');
    if (tipo_usuario == 'Institucion') {
        id_institucion = sessionStorage.getItem('id_usuario')
    } else {
        id_institucion = getUrl();
    }
    for (let i = 0; i < utiles.length; i++) {
        if (utiles[i]['id_institucion'] == id_institucion) {
            let fila = tabla_util.insertRow();
            fila.insertCell().innerHTML = utiles[i]['nivel']
            fila.insertCell().innerHTML = utiles[i]['util'];
            fila.insertCell().innerHTML = utiles[i]['descripcion'];
            fila.insertCell().innerHTML = utiles[i]['cantidad'];

            if (tipo_usuario=='Institucion') {
                let celda_configuracion = fila.insertCell();
                let boton_editar = document.createElement('a');
                boton_editar.textContent = 'Editar';
                boton_editar.classList.add('boton_editar');
                boton_editar.href = `actualizar_util.html?id_util=${utiles[i]['_id']}`
                celda_configuracion.appendChild(boton_editar);
    
                let boton_eliminar = document.createElement('a');
                boton_eliminar.textContent = 'Eliminar';
                boton_eliminar.classList.add('boton_eliminar')
                boton_eliminar.href = `eliminar_util.html?id_util=${utiles[i]['_id']}`
                celda_configuracion.appendChild(boton_eliminar);
            }

 

        }

    }





};
function filtrar_util() {
    var tabla = document.getElementById('tbl_utiles');
    var busqueda = document.getElementById('txt_filtro_util').value.toLowerCase();
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


mostrar_datos();