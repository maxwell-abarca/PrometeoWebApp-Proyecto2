'use strict';
//Vamos a acceder al cuerpo de la tabla por esta razón agregamos el tbody

const tabla_becas = document.querySelector('#tbl_becas tbody');


let mostrar_becas = () => {

    let becas = listar_becas();
    // let id_institucion = sessionStorage.getItem('id_usuario');
    let id_institucion;
    let tipo_usuario=sessionStorage.getItem('tipo_usuario');

    if (tipo_usuario=='Institucion') {
        id_institucion=sessionStorage.getItem('id_usuario');
    }else{
        id_institucion=getUrl();
    }

    for (let i = 0; i < becas.length; i++) {

        //Para que sepa a cual institución debe de redireccionar la informacion de la actividad
        if (becas[i]['id_institucion'] == id_institucion) {  

            let fila = tabla_becas.insertRow();
            /* crear el elemento imagen */
            // let imagen = document.createElement('img');
            //fila es como el tr del html
            //innerHTML es el contenido que está adentro del elemento
            fila.insertCell().innerHTML = becas[i]['nombre'];
            fila.insertCell().innerHTML = becas[i]['tipo'];
            fila.insertCell().innerHTML = becas[i]['descripcion'];

            if (tipo_usuario=='Institucion') {


                let celda_configuración=fila.insertCell();
                //Creación del boton editar
                let boton_editar=document.createElement('a');
                //Para el estilo
                boton_editar.classList.add('boton_editar');
                boton_editar.textContent='Editar';//textContent lo que muestra en la tabla 'Editar'
                boton_editar.href=`actualizar_becas.html?id_institucion=${becas[i]['_id']}`;
    
                celda_configuración.appendChild(boton_editar);
    
            //    let celda_eliminar=fila.insertCell();
               let boton_eliminar=document.createElement('a');
                boton_eliminar.classList.add('boton_eliminar');
               boton_eliminar.textContent='Eliminar';
               celda_configuración.appendChild(boton_eliminar);
               boton_eliminar.href=`eliminar_becas.html?id_institucion=${becas[i]['_id']}`;
            }


//----------------------------------------------------
        //    $(boton_eliminar).on('click', '.boton_eliminar', function(e){
        //     e.preventDefault();
        //     url = $(this).attr("href");
        //     swal({
        //             title:"Esta seguro que desea eliminar este registro?",
        //             text: "Esta operacion es irreversible",
        //             type: "warning",
        //             showCancelButton: true,
        //             confirmButtonClass: 'btn btn-success',
        //             cancelButtonClass: 'btn btn-danger',
        //             buttonsStyling: false,
        //             confirmButtonText: "Eliminar",
        //             cancelButtonText: "Cancelar",
        //             closeOnConfirm: false,
        //             showLoaderOnConfirm: true,
        //         },
        //         function(isConfirm){
        //             if(isConfirm){
        //                 $.ajax({
        //                     url: url,
        //                     type: "POST",
        //                     success: function(resp){
        //                         window.location.href = base_url + resp;
        //                     }
        //                 });
        //                 }
        //             return false;
        //         });
        //     });
//----------------------------------------------------
        }
    };

};



function filtrar_beca() {
    var tabla = document.getElementById('tbl_becas');
    var busqueda = document.getElementById('txt_filtro_beca').value.toLowerCase();
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



mostrar_becas();


// function preguntar(id){
//     Swal.fire({
//         title: '¿Está seguro que desea eliminar la beca?',
//         function(){eliminar_datos(id)},
//         type: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Sí'
//       }).then((result) => {
//         if (result.value) {
//             eliminar_datos(nombre,tipo,descripcion,_id);
//         }
//       })

// };

 


// function eliminar_datos(id){
//     cadena= "id="+ id;

//     $.ajax({
//         type:"POST",
//         url: "http://localhost:4000/api/eliminar_datos",
//         data: cadena,
//         success: function(r){
//             if (r==1) {
//                 $('#tbl_becas').load('api/componentes/becas/becas.model.js');
//                 request.done(function(msg){
//                     swal.fire({
//                         type: 'success',
//                         title: '!La beca ha sido eliminada de forma exitosa!'
//                     });
//                 });
//             } else {
//                 request.fail(function(res){
//                     swal.fire({
//                         type : 'error',
//                         title : 'Proceso no realizado',
//                         text : res.msg
//                     });
            
//                 });
//             }
//         }
//     })


// }




// boton_eliminar.addEventListener('click',eliminar_datos);

// boton_eliminar.on('click',function(){
//     Swal.fire({
//         title: '¿Está seguro que desea actualizar la beca?',
//         type: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Sí'
//       }).then((result) => {
//         if (result.value) {
//             actualizar_becas(nombre,tipo,descripcion,_id);
//         }
//       })
// });