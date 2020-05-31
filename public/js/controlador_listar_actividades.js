'use strict';
//Vamos a acceder al cuerpo de la tabla por esta razón agregamos el tbody

const tabla_actividades = document.querySelector('#tbl_actividades tbody');


let mostrar_actividades = () => {

    let actividades = listar_actividades();
      // let id_institucion = sessionStorage.getItem('id_usuario');

      let id_institucion;
      let tipo_usuario=sessionStorage.getItem('tipo_usuario');
  
      if (tipo_usuario=='Institucion') {
          id_institucion=sessionStorage.getItem('id_usuario');
      }else{
          id_institucion=getUrl();
      }

    for (let i = 0; i < actividades.length; i++) {

        //Para que sepa a cual institución debe de redireccionar la informacion de la actividad
        if (actividades[i]['id_institucion'] == id_institucion) {  

            let fila = tabla_actividades.insertRow();
            /* crear el elemento imagen */
            let imagen = document.createElement('img');
            //fila es como el tr del html
            //innerHTML es el contenido que está adentro del elemento
            fila.insertCell().innerHTML = actividades[i]['nombre'];
            fila.insertCell().innerHTML = actividades[i]['fecha'];
            fila.insertCell().innerHTML = actividades[i]['hora'];
            fila.insertCell().innerHTML = actividades[i]['lugar'];
            fila.insertCell().innerHTML = actividades[i]['descripcion'];
            let celda_imagen=fila.insertCell();
            celda_imagen.appendChild(imagen);
            // fila.insertCell().innerHTML = actividades[i]['imagen'];
            
            //En caso de que el usuario no registre una imagen, para que se le ponga una  
            if (actividades[i]['imagen']) {
                imagen.src = actividades[i]['imagen'];
            } else {
                imagen.src = 'img/actividades/image-placeholder.png'
            }
           
            if (tipo_usuario=='Institucion') {
                let celda_configuracion=fila.insertCell();
                           //Creación del boton editar
            let boton_editar=document.createElement('a');
            //Para el estilo
            boton_editar.classList.add('boton_editar');
            boton_editar.textContent='Editar';//textContent lo que muestra en la tabla 'Editar'
            boton_editar.href=`actualizar_actividades.html?id_institucion=${actividades[i]['_id']}`;

            celda_configuracion.appendChild(boton_editar);

        //    let celda_eliminar=fila.insertCell();
           let boton_eliminar=document.createElement('a');
            boton_eliminar.classList.add('boton_eliminar');
           boton_eliminar.textContent='Eliminar';
           celda_configuracion.appendChild(boton_eliminar);
           boton_eliminar.href=`eliminar_actividades.html?id_institucion=${actividades[i]['_id']}`; 
            }

        }
    };

};

// function eliminarFila(index) {
//     $("" + index).remove();
// }


function filtrar_actividad() {
    var tabla = document.getElementById('tbl_actividades');
    var busqueda = document.getElementById('txt_filtro_actividad').value.toLowerCase();
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



mostrar_actividades();



// const input_filtro=document.querySelector('#txt_filtro');
// let lista_actividades=listar_actividades();
// mostrar_actividades2();// tiene que estar despues de la carga de la lista de los datos 
// input_filtro.addEventListener('keyup',mostrar_actividades2); //funciona para que cada ves que se suelta la tecla se ejecute la funcion 

// function mostrar_actividades2(){

//     // let lista_actividades=listar_actividades();
//     let tbody=document.querySelector('#tbl_actividades tbody');
//     let filtro=input_filtro.value;
//     tbody.innerHTML='';

//     for(let i=0; i<lista_actividades.length; i++){

//         if (lista_actividades[i]['nombre'].toLowerCase().includes(filtro.toLowerCase()) || lista_actividades[i]['fecha'].toLowerCase().includes(filtro.toLowerCase())|| lista_actividades[i]['hora'].toLowerCase().includes(filtro.toLowerCase()) || lista_actividades[i]['lugar'].toLowerCase().includes(filtro.toLowerCase()) || lista_actividades[i]['descripcion'].toLowerCase().includes(filtro.toLowerCase())
//         && actividades[i]['id_institucion']==id_institucion) {
//             let fila=tbody.insertRow();

//             let nombre=fila.insertCell();
//             let fecha=fila.insertCell();
//             let hora=fila.insertCell();
//             let lugar=fila.insertCell();
//             let descripcion=fila.insertCell();

//             nombre.innerHTML=lista_actividades[i]['nombre'];
//             fecha.innerHTML=lista_actividades[i]['fecha']
//             hora.innerHTML=lista_actividades[i]['hora'];
//             lugar.innerHTML=lista_actividades[i]['lugar'];
//             descripcion.innerHTML=lista_actividades[i]['descripcion'];

//         }

//     }

// };