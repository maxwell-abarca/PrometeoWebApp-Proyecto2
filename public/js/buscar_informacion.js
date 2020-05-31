'use strict';

// const lista = document.querySelector('#lista_instituciones');
// const boton_perfil = document.getElementsByClassName('link');
// let mostrar_datos = () => {
    
//     let institucion = listar_institucion();
//     sessionStorage.removeItem('id_perfil');
//     for (let i = 0; i < institucion.length; i++) {
//         var nombre = document.createElement('h2');
//         nombre.innerHTML = institucion[i]['institucion_nombre'];
//         lista.appendChild(nombre);
//         const perfil = document.createElement('a');
//         perfil.classList.add('link');
//         const linkText = document.createTextNode("Visitar");
//         perfil.appendChild(linkText);
//         perfil.title = institucion[i]['institucion_nombre'];
//         perfil.href = 'http://localhost:3000/public/perfil.html?/'+institucion[i]['institucion_id'];
//         lista.appendChild(perfil);
//     }

 
// };


var tabla = document.getElementById('tbl_instituciones');
let mostrar_datos = () => {
    // let etiquetas = listar_etiqueta();
    let institucion = listar_institucion();

    for(let i = 0; i < institucion.length; i++){
        
        let fila = tabla.insertRow();

        let imagen = fila.insertCell();

        let imagen_perfil = document.createElement('img');

        // let etiqueta_row = tabla.insertRow();

        imagen_perfil.src = institucion[i]['institucion_imagen'];
        
        imagen_perfil.classList.add('imagen_buscar');

        imagen.appendChild(imagen_perfil);
       
        fila.insertCell().innerHTML = institucion[i]['institucion_nombre'];
        
        fila.insertCell().innerHTML = institucion[i]['institucion_provincia'];

        fila.insertCell().innerHTML = institucion[i]['institucion_tipo'];

        // for (let u = 0; u < etiquetas.length; u++) {
            
        //     if (etiquetas[u]['id_institucion'] == institucion[i]['institucion_id']) {

        //         etiqueta_row.textContent =etiquetas[0]['etiqueta']+',';
                
        //     }else{
        //         fila.insertCell().innerHTML = 'No hay etiquetas';
        //     }
            
        // }
        let mostrar_estrellas = () => {
            let estrellas = listar_estrellas();
            let id_institucion = institucion[i]['institucion_id'];
            let promedio_estrellas = 0;
            let cantidad_estrellas = 0;
        
            /*--------------Preguntamos cuantos registros de estrellas hay--------------*/
            for (let u = 0; u < estrellas.length; u++) {
        
                /*--------------Preguntamos si hay estrellas registradas para el centro en concreto--------------*/
                if (estrellas[u]['id_institucion'] == id_institucion) {
        
                    /*--------------Se suman todas las estrellas que tenga el centro educativo y se cuenta cuantas calificaciones hubo--------------*/
                    promedio_estrellas = promedio_estrellas + estrellas[u]['estrellas'];
                    
        
                    cantidad_estrellas++;
        
                }
        
            }
            /*--------------Función que saca el promedio de las estrellas y redondea el numero--------------*/
            let star =0;
            if (cantidad_estrellas > 0) {
            
        
                let cantidad = promedio_estrellas / cantidad_estrellas;
        
                star = Math.round(cantidad);
            
            }
        
                return star;
        }
        
        if (mostrar_estrellas()==0) {
            fila.insertCell().innerHTML = 'No ha sido evaluado';
        }else{
            fila.insertCell().innerHTML = mostrar_estrellas();

        }

        

        let link_perfil =fila.insertCell();

        let boton_perfil = document.createElement('a');
        
        boton_perfil.classList.add('link');
        
        boton_perfil.textContent = 'Visitar';

        boton_perfil.href ='http://localhost:3000/public/perfil.html?/'+institucion[i]['institucion_id'];
        
        link_perfil.appendChild(boton_perfil);

        if (tipo_usuario == 'Admin') {
            let celda_eliminar = fila.insertCell();

            let boton_eliminar = document.createElement('a');
            
            boton_eliminar.textContent = 'Eliminar';
            boton_eliminar.href=`eliminar_colegio.html?id_institucion=${institucion[i]['_id']}`;
            boton_eliminar.classList.add('eliminar');
            celda_eliminar.appendChild(boton_eliminar);
        }

    };          
};


function Buscar() {
    var tabla = document.getElementById('tbl_instituciones');
    var busqueda = document.getElementById('txtBusqueda').value.toLowerCase();
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
            // tabla.innerHTML = 'No se han encontrado'
        }
    }
};
// function Buscar() {

//     // var section = document.getElementById('#lista_instituciones');

//     let section = listar_institucion();

//     var busqueda = document.getElementById('txtBusqueda').value.toLowerCase();

//     var celdas="";

//     var encontrado=false;

//     var comparar="";

//     /**obtiene la cantidad de celdas que hay */
//     for (var i = 1; i < section.length; i++) {

//         /**Se le asigna el elemento que haya en el td al arreglo celdas*/
//         celdas = section[i].getElementsByTagName('td');
//         /**Variable que no encontró coincidencias */
//         encontrado = false;
        
//         for (var j = 0; j < celdas.length && !encontrado; j++) { comparar = celdas[j].innerHTML.toLowerCase(); if (busqueda.length == 0 || (comparar.indexOf(busqueda) > -1))
//             {
//                 encontrado = true;
//             }
//         }
//         if(encontrado)
//         {
//             section[i].style.display = '';
//         } else {
//             section[i].style.display = 'none';
//         }
//     }
// }
let numbers=[5,3,4,5,5,8,9,10]
const numberSorter = (a, b) => b - a;
numbers.sort(numberSorter);
console.log(numbers);
mostrar_datos();