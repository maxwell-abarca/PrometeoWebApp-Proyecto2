'use strict'
let mostrar_estrellas = () => {

    let estrellas = listar_estrellas();
    let id_institucion;
    let tipo_usuario = sessionStorage.getItem('tipo_usuario');
    if (tipo_usuario == 'Institucion') {
        id_institucion = sessionStorage.getItem('id_usuario')
    } else {
        id_institucion = getUrl();
    }
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
