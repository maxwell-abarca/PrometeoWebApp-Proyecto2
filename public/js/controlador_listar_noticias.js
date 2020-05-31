'use strict';
const tabla_noticias=document.querySelector('#tbl_noticias tbody');

let mostrar_noticias=()=>{
    let noticias=listar_noticias();
      // let id_institucion=sessionStorage.getItem('id_usuario');

      let id_institucion;
      let tipo_usuario=sessionStorage.getItem('tipo_usuario');
  
      if (tipo_usuario=='Institucion') {
          id_institucion=sessionStorage.getItem('id_usuario');
      }else{
          id_institucion=getUrl();
      }

    for(let i=0; i<noticias.length; i++){
        if (noticias[i]['id_institucion']==id_institucion) {

            let fila=tabla_noticias.insertRow();

            let imagen=document.createElement('img');

            fila.insertCell().innerHTML=noticias[i]['titulo'];
            fila.insertCell().innerHTML=noticias[i]['fecha'];
            fila.insertCell().innerHTML=noticias[i]['hora'];
            fila.insertCell().innerHTML=noticias[i]['lugar'];
            fila.insertCell().innerHTML=noticias[i]['descripcion'];
            let celda_imagen=fila.insertCell();
            celda_imagen.appendChild(imagen);

            if (noticias[i]['imagen']) {
                imagen.src = noticias[i]['imagen'];
            } else {
                imagen.src = 'img/noticias/image-placeholder.png'
            }

            if (tipo_usuario=='Institucion') {
                let celda_configuracion=fila.insertCell();
                //Creación del boton editar
                let boton_editar=document.createElement('a');
                //Para el estilo
                boton_editar.classList.add('boton_editar');
                boton_editar.textContent='Editar';//textContent lo que muestra en la tabla 'Editar'
                boton_editar.href=`actualizar_noticias.html?id_noticias_id=${noticias[i]['_id']}`;
    
                celda_configuracion.appendChild(boton_editar);
    
            //    let celda_eliminar=fila.insertCell();
               let boton_eliminar=document.createElement('a');
                boton_eliminar.classList.add('boton_eliminar');
               boton_eliminar.textContent='Eliminar';
               celda_configuracion.appendChild(boton_eliminar);
               boton_eliminar.href=`eliminar_noticias.html?id_noticias_id=${noticias[i]['_id']}`;
    

            }

            
        }
    };

};

function filtrar_noticia() {
    var tabla = document.getElementById('tbl_noticias');
    var busqueda = document.getElementById('txt_filtro_noticia').value.toLowerCase();
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

mostrar_noticias();
