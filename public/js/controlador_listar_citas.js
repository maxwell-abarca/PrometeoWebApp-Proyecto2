'use strict';
const tabla_citas=document.querySelector('#tbl_citas tbody');

let mostrar_citas=()=>{
let citas=listar_citas();
let id_institucion=sessionStorage.getItem('id_usuario');

for(let i=0; i< citas.length; i++){
    if (citas[i]['id_institucion']==id_institucion) {
    let fila=tabla_citas.insertRow();
    
    fila.insertCell().innerHTML=citas[i]['nombre_cita'];
    fila.insertCell().innerHTML=citas[i]['nombre_familiar'];
    fila.insertCell().innerHTML=citas[i]['fecha'];
    fila.insertCell().innerHTML=citas[i]['hora'];
    fila.insertCell().innerHTML=citas[i]['descripcion'];
    }
    };

};

function filtrar() {
    var tabla = document.getElementById('tbl_citas');
    var busqueda = document.getElementById('txt_filtro').value.toLowerCase();
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

mostrar_citas();

// const input_filtro=document.querySelector('#txt_filtro');
// //el listar_citas -> es el que llama el servicio y establece la petición
// let lista_citas=listar_citas();// se pone al aquí al inicio para que se ejecute desde el inicio a la hora de cargar la página
// mostrar_citas2();// tiene que estar despues de la carga de la lista de los datos 
// input_filtro.addEventListener('keyup',mostrar_citas2); //(keyup)->funciona para que cada ves que se suelta la tecla se ejecute la funcion, la de mostrar_citas2


// function mostrar_citas2(){

//     // let lista_actividades=listar_actividades();
//     let tbody=document.querySelector('#tbl_citas tbody');
//     let filtro=input_filtro.value;/*creo una variable que se llame filtro y le decimos que va a hacer igual a lo 
//     que el input del filtro tiene escrito como valor*/
//     tbody.innerHTML='';

// /*este ciclo es que hace que se agreguen cada uno de los datos de la tabla  */
//     for(let i=0; i<lista_citas.length; i++){
//         /*cuando la condición se cumpla se vayan a imprimir las filas */    
//         if (lista_citas[i]['nombre_cita'].toLowerCase().includes(filtro.toLowerCase()) || lista_citas[i]['nombre_familiar'].toLowerCase().includes(filtro.toLowerCase())|| lista_citas[i]['fecha'].toLowerCase().includes(filtro.toLowerCase()) || lista_citas[i]['hora'].toLowerCase().includes(filtro.toLowerCase()) || lista_citas[i]['descripcion'].toLowerCase().includes(filtro.toLowerCase())) {
//             let fila=tbody.insertRow();
//             //Lo que dice la condición es que si incluye un filtro, entonces que lo muestre.
//             /*Se le pone toLowerCase() para que me compare el nombre_cita en minúscula, por ende el filtro tambien hay
//             que asegurarse que también de que sea pasado a minúscula*/ 
//             //En conclusión esto es para que en la página en el campo del filtrar se pueda buscar la información allí, ya sea en mayúscula o en minúscula
            
//             let nombre_cita=fila.insertCell();
//             let nombre_familiar=fila.insertCell();
//             let fecha=fila.insertCell();
//             let hora=fila.insertCell();
//             let descripcion=fila.insertCell();
    
//             nombre_cita.innerHTML=lista_citas[i]['nombre_cita'];
//             nombre_familiar.innerHTML=lista_citas[i]['nombre_familiar']
//             fecha.innerHTML=lista_citas[i]['fecha'];
//             hora.innerHTML=lista_citas[i]['hora'];
//             descripcion.innerHTML=lista_citas[i]['descripcion'];

//         }
 
//     }

// };