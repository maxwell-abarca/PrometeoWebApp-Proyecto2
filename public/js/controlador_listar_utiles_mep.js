'use strict';
const tabla_utiles=document.querySelector('#tbl_utiles tbody');

let mostrar_utiles=()=>{
    let utiles=listar_utiles_mep();
    // let id_institucion=sessionStorage.getItem('id_usuario');
    // let id_institucion;
    // let tipo_usuario=sessionStorage.getItem('tipo_usuario');

    // if (tipo_usuario=='Institucion') {
    //     id_institucion=sessionStorage.getItem('id_usuario');
    // }else{
    //     id_institucion=getUrl();
    // }
    
    for(let i=0; i<utiles.length; i++){
        // if (utiles[i]['id_institucion']==id_institucion) {
            
            let fila=tabla_utiles.insertRow();
            // let nuevo_input=document.createElement('input');
            // nuevo_input={type: Number};

            fila.insertCell().innerHTML=utiles[i]['nombre_util'];
            fila.insertCell().innerHTML=utiles[i]['cantidad'];
            // let celda_cantidad=fila.insertCell();
            // celda_cantidad.appendChild(nuevo_input);
            fila.insertCell().innerHTML=utiles[i]['descripcion'];


            let celda_configuración=fila.insertCell();
            //Creación del boton editar
            let boton_editar=document.createElement('a');
            //Para el estilo
            boton_editar.classList.add('boton_editar');
            boton_editar.textContent='Editar';//textContent lo que muestra en la tabla 'Editar'
            boton_editar.href=`actualizar_lista_utiles_mep.html?id_utiles_mep=${utiles[i]['_id']}`;

            celda_configuración.appendChild(boton_editar);

        //    let celda_eliminar=fila.insertCell();
           let boton_eliminar=document.createElement('a');
            boton_eliminar.classList.add('boton_eliminar');
           boton_eliminar.textContent='Eliminar';
           celda_configuración.appendChild(boton_eliminar);
           boton_eliminar.href=`eliminar_lista_utiles_mep.html?id_utiles_mep=${utiles[i]['_id']}`;
            
        }
    };


function filtrar() {
    var tabla = document.getElementById('tbl_utiles');
    var busqueda = document.getElementById('txt_filtro').value.toLowerCase();
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

mostrar_utiles();
