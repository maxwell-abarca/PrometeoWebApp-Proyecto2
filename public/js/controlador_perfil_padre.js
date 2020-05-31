'use strict'

const id_padre = sessionStorage.getItem('id_usuario');
/*const tipo_usuario = sessionStorage.getItem('tipo_usuario');*/
const perfil_padre = document.querySelector('#perfil_padre');
let padre = listar_padre();

if (tipo_usuario == 'Padre') {
    
    for (let i = 0; i < padre.length; i++) {

        if (padre[i]['padre_id'] == id_padre) {

            let titulo_nombre = document.querySelector('#nombre_titulo');
                titulo_nombre.innerHTML= 'Perfil de '+ padre[i]['padre_nombre'];

            let imagen_usuario = document.querySelector('#imagen_usuario');
            imagen_usuario.src = padre[i]['padre_imagen'];
                
            let nombre_usuario = document.querySelector('#nombre_usuario');
                nombre_usuario.innerHTML= padre[i]['padre_nombre'] +' '+ padre[i]['padre_apellido'];

            let correo_electronico = document.querySelector('#padre_correo_electronico');
            correo_electronico.innerHTML = 'Correo electrónico: '+ padre[i]['padre_correo_electronico'];

            let hijos = document.querySelector('#padre_hijos');
            hijos.innerHTML ='Cantidad de hijos: '+ padre[i]['padre_hijos'];
            
            let fechas = document.querySelector('#fecha');
            fechas.innerHTML = 'Fecha de nacimiento: '+ new Date(padre[i]['padre_fecha']).toLocaleDateString();

            let telefono = document.querySelector('#telefono');
            telefono.innerHTML = 'Numero Telefónico: '+ padre[i]['padre_telefono'];

            let nacionalidad = document.querySelector('#nacionalidad');
            nacionalidad.innerHTML = 'Nacionalidad: '+padre[i]['padre_nacionalidad'];

            let cedula = document.querySelector('#cedula');
            cedula.innerHTML = 'Cedula: '+ padre[i]['padre_cedula'];

             let boton_editar = document.querySelector('#boton_editar');
                boton_editar.href=`actualizar_perfil_padre.html?id_padres=${padre[i]['_id']}`;
                
             let boton_eliminar = document.querySelector('#boton_eliminar');
            boton_eliminar.href=`eliminar_padres.html?id_padres=${padre[i]['_id']}`;



        //     perfil_padre.innerHTML = ''

        //     // let fila = perfil_padre.insertRow();

        //     let contenedor_perfil = document.createElement('div');
        //     contenedor_perfil.classList.add('contenedor_perfil');
        
        //     let imagen = document.createElement('img');
        //     imagen.classList.add('imagen_padre');
        //     imagen.src = padre[i]['padre_imagen'];



        //     let nombre = document.createElement('h1');
        //     nombre.classList.add('info_nombre')
        //     nombre.innerHTML = padre[i]['padre_nombre'];
        //     /**Label */
        //     let label_nombre = document.createElement('h1');
        //     label_nombre.innerHTML = "Nombre";
        //     label_nombre.classList.add('label')

        //     let apellido = document.createElement('h1');
        //     apellido.classList.add('info_apellido');
        //     apellido.innerHTML = padre[i]['padre_apellido'];
        //     /**Label */
        //     // let label_apellido = document.createElement('h1');
        //     // label_apellido.innerHTML = "Apellido";
        //     // label_apellido.classList.add('label');

          
        //     let label_contacto = document.createElement('h1');
        //     label_contacto.innerHTML = "Mis contactos:";
        //     label_contacto.classList.add('label_contacto_ubicacion');

        //     let label_informacion = document.createElement('h1');
        //     label_informacion.innerHTML = "Sobre mí:";
        //     label_informacion.classList.add('label_informacion');

        //     let label_ubicacion = document.createElement('h1');
        //     label_ubicacion.innerHTML = "Mí ubicación:";
        //     label_ubicacion.classList.add('label_contacto_ubicacion');


        //     let correo = document.createElement('h2');
        //     correo.classList.add('info');
        //     correo.innerHTML = padre[i]['padre_correo_electronico'];
        //     /**Label */
        //     let label_correo = document.createElement('h1');
        //     label_correo.innerHTML = "Correo";
        //     label_correo.classList.add('label');

        //     let hijos = document.createElement('h2');
        //     hijos.classList.add('info');
        //     hijos.innerHTML = padre[i]['padre_hijos'];
        //     /**Label */
        //     let label_hijos = document.createElement('h1');
        //     label_hijos.innerHTML = "Cantidad de hijos";
        //     label_hijos.classList.add('label');

        //     let fecha = document.createElement('h2');
        //     fecha.classList.add('info');
        //     fecha.innerHTML = padre[i]['padre_fecha']
        //     /**Label */
        //     let label_fecha = document.createElement('h1');
        //     label_fecha.innerHTML = "Fecha de nacimiento";
        //     label_fecha.classList.add('label');

        //     let direccion = document.createElement('h2');
        //     direccion.classList.add('info');
        //     direccion.innerHTML = padre[i]['padre_direccion'];
        //     /**Label */
        //     let label_direccion = document.createElement('h1');
        //     label_direccion.innerHTML = "Dirección de residencia";
        //     label_direccion.classList.add('label');

        //     let telefono = document.createElement('h2');
        //     telefono.classList.add('info');
        //     telefono.innerHTML = padre[i]['padre_telefono'];
        //     /**Label */
        //     let label_telefono = document.createElement('h1');
        //     label_telefono.innerHTML = "Número Telefónico";
        //     label_telefono.classList.add('label');

        //     let nacionalidad = document.createElement('h2');
        //     nacionalidad.classList.add('info');
        //     nacionalidad.innerHTML = padre[i]['padre_nacionalidad'];
        //     /**Label */
        //     let label_nacionalidad = document.createElement('h1');
        //     label_nacionalidad.innerHTML = "Nacionalidad";
        //     label_nacionalidad.classList.add('label');

        //     let cedula = document.createElement('h2');
        //     cedula.classList.add('info');
        //     cedula.innerHTML = padre[i]['padre_cedula'];
        //     /**Label */
        //     let label_cedula = document.createElement('h1');
        //     label_cedula.innerHTML = "Cédula";
        //     label_cedula.classList.add('label');



        //     contenedor_perfil.appendChild(imagen);
        //     // contenedor_perfil.appendChild(label_nombre);
        //     contenedor_perfil.appendChild(nombre);
        //     // contenedor_perfil.appendChild(label_apellido);
        //     contenedor_perfil.appendChild(apellido);

        //     contenedor_perfil.appendChild(label_contacto);
        //     contenedor_perfil.appendChild(label_correo);
        //     contenedor_perfil.appendChild(correo);
        //     contenedor_perfil.appendChild(label_telefono);
        //     contenedor_perfil.appendChild(telefono); 

        //     contenedor_perfil.appendChild(label_ubicacion);
        //     contenedor_perfil.appendChild(label_direccion);
        //     contenedor_perfil.appendChild(direccion);
            
        //     contenedor_perfil.appendChild(label_informacion);
        //     contenedor_perfil.appendChild(label_hijos);
        //     contenedor_perfil.appendChild(hijos);
        //     contenedor_perfil.appendChild(label_fecha);
        //     contenedor_perfil.appendChild(fecha);
        //     contenedor_perfil.appendChild(label_nacionalidad);
        //     contenedor_perfil.appendChild(nacionalidad);
        //     contenedor_perfil.appendChild(label_cedula);
        //     contenedor_perfil.appendChild(cedula);
        //     perfil_padre.appendChild(contenedor_perfil);

          
            //Para el estilo
           

           

        }else{


        }


      
    

        
    }

   


}else{


    window.location.href('http://localhost:3000/public/index.html');
};