'use strict';
//Vamos a acceder al cuerpo de la tabla por esta razón agregamos el tbody

const tabla_niveles = document.querySelector('#tbl_niveles tbody');


let mostrar_niveles = () => {

    let niveles = listar_niveles();
    let id_institucion = sessionStorage.getItem('id_usuario');

    for (let i = 0; i < niveles.length; i++) {

        //Para que sepa a cual institución debe de redireccionar la informacion de la actividad
        if (niveles[i]['id_institucion'] == id_institucion) {  

            let fila = tabla_niveles.insertRow();
            /* crear el elemento imagen */
            //fila es como el tr del html
            //innerHTML es el contenido que está adentro del elemento
            fila.insertCell().innerHTML = niveles[i]['nombre'];
            fila.insertCell().innerHTML = niveles[i]['descripcion'];
        }
    };

};

function filtrar_nivel() {
    var tabla = document.getElementById('tbl_niveles');
    var busqueda = document.getElementById('txt_filtro_nivel').value.toLowerCase();
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


mostrar_niveles();