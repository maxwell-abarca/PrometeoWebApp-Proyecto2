'use strict';
//Vamos a acceder al cuerpo de la tabla por esta razón agregamos el tbody

const tabla_idiomas = document.querySelector('#tbl_idiomas tbody');


let mostrar_idiomas = () => {

    let idiomas = listar_idioma();
    let id_institucion = sessionStorage.getItem('id_usuario');

    for (let i = 0; i < idiomas.length; i++) {

        //Para que sepa a cual institución debe de redireccionar la informacion de la actividad
        if (idiomas[i]['id_institucion'] == id_institucion) {  

            let fila = tabla_idiomas.insertRow();
            /* crear el elemento imagen */
            //fila es como el tr del html
            //innerHTML es el contenido que está adentro del elemento
            fila.insertCell().innerHTML = idiomas[i]['idiomas'];
            fila.insertCell().innerHTML = idiomas[i]['descripcion'];

            if (idiomas[i]['id_institucion'] == id_institucion) {  
                let idioma_configuracion = fila.insertCell();

                let boton_editar = document.createElement('a');
                boton_editar.classList.add('boton_editar');
                boton_editar.textContent = 'Editar';
                boton_editar.href = `actualizar_idioma.html?id_institucion=${idiomas[i]['_id']}`;
    
                idioma_configuracion.appendChild(boton_editar);
    
                let boton_eliminar=document.createElement('a');
                boton_eliminar.classList.add('boton_eliminar');
               boton_eliminar.textContent='Eliminar';
               idioma_configuracion.appendChild(boton_eliminar);
               boton_eliminar.href=`eliminar_idioma.html?id_institucion=${idiomas[i]['_id']}`;
            }


        }
    };

};

function filtrar_idioma() {
    var tabla = document.getElementById('tbl_idiomas');
    var busqueda = document.getElementById('txt_filtro_idioma').value.toLowerCase();
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


mostrar_idiomas();