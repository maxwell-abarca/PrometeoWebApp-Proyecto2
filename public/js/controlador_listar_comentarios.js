'use strict'
const listar_de_comentarios = document.querySelector('#listar_comentarios');

let mostrar_comentarios = () =>{
    let hay_comentarios=false;
    listar_de_comentarios.innerHTML = '';
    let comentarios_registrados = listar_comentarios();

    let id_institucion;

    let tipo_usuario = sessionStorage.getItem('tipo_usuario');

    if (tipo_usuario == 'Institucion') {
        id_institucion = sessionStorage.getItem('id_usuario');
    }else{
        id_institucion = getUrl();
    }

    for (let k = 0; k < comentarios_registrados.length; k++) {
        
        if (comentarios_registrados[k]['id_institucion']==id_institucion) {

            hay_comentarios=true;

            let contenedor = document.createElement('div');
            contenedor.classList.add('comentario');

            let imagen = document.createElement('img');
            imagen.src =comentarios_registrados[k]['imagen']
            imagen.classList.add('padre_img');

            let nombre = document.createElement('h1');
            nombre.innerHTML = comentarios_registrados[k]['nombre'];

            let comentario = document.createElement('textarea');
            comentario.textContent = comentarios_registrados[k]['comentario'];
            comentario.classList.add('textarea_comentario');

            let estrellas = document.createElement('div');
            estrellas.classList.add('starrr');

            contenedor.appendChild(imagen);
            contenedor.appendChild(nombre);
            contenedor.appendChild(estrellas);
            contenedor.appendChild(comentario);
            listar_de_comentarios.appendChild(contenedor);

            switch (comentarios_registrados[k]['stars']) {
                case 1:
                $('#listar_comentarios .starrr').starrr({
                    rating: 1,
    
                });
                case 2:
                $('#listar_comentarios .starrr').starrr({
                    rating: 2,
    
                });
                case 3:
                $('#listar_comentarios .starrr').starrr({
                    rating: 3,
    
                });
                case 4:
                $('#listar_comentarios .starrr').starrr({
                    rating: 4,
    
                });
                case 5:
                $('#listar_comentarios .starrr').starrr({
                    rating: 5,
    
                });
                break;
            
            }

            

        }
    }
    if (hay_comentarios==false) {
                   let no_hay_comentarios = document.createElement('h1');
           no_hay_comentarios.classList.add('no_hay_comentarios');
           no_hay_comentarios.innerHTML = 'No hay comentarios registrados en el centro educativo'
           listar_de_comentarios.appendChild(no_hay_comentarios);
    }
}
mostrar_comentarios();