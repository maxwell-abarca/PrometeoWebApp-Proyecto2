'use strict';
const seccion = document.querySelector('#tabla_pregunta tbody');
let mostrar_pregunta = () => {
    let pregunta = listar_pregunta();
      // let id_institucion=sessionStorage.getItem('id_usuario');

      let id_institucion;
      let tipo_usuario=sessionStorage.getItem('tipo_usuario');
  
      if (tipo_usuario=='Institucion') {
          id_institucion=sessionStorage.getItem('id_usuario');
      }else{
          id_institucion=getUrl();
      }
    for (let i = 0; i < pregunta.length; i++) {
        if (pregunta[i]['id_institucion'] == id_institucion) {
            // for (let i = 0; i < pregunta.length; i++) {
                let texto = seccion.insertRow();
                texto.insertCell().innerHTML = pregunta[i]['pregunta'];
                texto.insertCell().innerHTML = pregunta[i]['respuesta'];
        //     };
        //     break;
        // } else {
            if (tipo_usuario=='Institucion') {
                let celda_configuración=texto.insertCell();
                //Creación del boton editar
                let boton_editar=document.createElement('a');
                //Para el estilo
                boton_editar.classList.add('boton_editar');
                boton_editar.textContent='Editar';//textContent lo que muestra en la tabla 'Editar'
                boton_editar.href=`actualizar_preguntas.html?id_mod_pregunta=${pregunta[i]['_id']}`;
    
                celda_configuración.appendChild(boton_editar);
    
            //    let celda_eliminar=fila.insertCell();
               let boton_eliminar=document.createElement('a');
                boton_eliminar.classList.add('boton_eliminar');
               boton_eliminar.textContent='Eliminar';
               celda_configuración.appendChild(boton_eliminar);
               boton_eliminar.href=`eliminar_preguntas.html?id_mod_pregunta=${pregunta[i]['_id']}`;
            }

           

          
        }




    };



};

function filtrar_pregunta() {
    var tabla = document.getElementById('tabla_pregunta');
    var busqueda = document.getElementById('txt_filtro_pregunta').value.toLowerCase();
    var cellsOfRow="";
    var found=false;
    var compareWith="";
    for (var i = 1; i < tabla.rows.length; i++) {
        cellsOfRow = tabla.rows[i].getElementsByTagName('td');
        found = false;
        for (var j = 0; j < cellsOfRow.length && !found; j++) { compareWith = cellsOfRow[j].innerHTML.toLowerCase(); if (busqueda.length == 0 || (compareWith.indexOf(busqueda) > -1))
            {
                found = true;
            }
        }
        if(found)
        {
            tabla.rows[i].style.display = '';
        } else {
            tabla.rows[i].style.display = 'none';
        }
    }
}


mostrar_pregunta();