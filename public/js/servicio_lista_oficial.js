'use strict';
let listar_lista_oficial = (nivel) => {
    
    let listar_lista_oficial = [];
    
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_lista_oficial",
        method: "GET",
        data: {
            nivel
        },

        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        listar_lista_oficial = res.lista_oficial;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return listar_lista_oficial;
};

let buscar_lista_oficial = (nivel, query) => {

};
    

let registrar_lista_oficial = (putil1, putil2, putil3, putil4, putil5, putil6, putil7, putil8, putil9, putil10, pdescripcion1, pdescripcion2, pdescripcion3, pdescripcion4, pdescripcion5, pdescripcion6, pdescripcion7, pdescripcion8, pdescripcion9, pdescripcion10, pcantidad1, pcantidad2, pcantidad3, pcantidad4, pcantidad5, pcantidad6, pcantidad7, pcantidad8, pcantidad9, pcantidad10, pnivel) => {
    
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_lista_oficial",
        method: "POST",
        data: {
            util1: putil1,
            util2: putil2,
            util3: putil3,
            util4: putil4,
            util5: putil5,
            util6: putil6,
            util7: putil7,
            util8: putil8,
            util9: putil9,
            util10: putil10,
            descripcion1: pdescripcion1,
            descripcion2: pdescripcion2,
            descripcion3: pdescripcion3,
            descripcion4: pdescripcion4,
            descripcion5: pdescripcion5,
            descripcion6: pdescripcion6,
            descripcion7: pdescripcion7,
            descripcion8: pdescripcion8,
            descripcion9: pdescripcion9,
            descripcion10: pdescripcion10,
            cantidad1: pcantidad1,
            cantidad2: pcantidad2,
            cantidad3: pcantidad3,
            cantidad4: pcantidad4,
            cantidad5: pcantidad5,
            cantidad6: pcantidad6,
            cantidad7: pcantidad7,
            cantidad8: pcantidad8,
            cantidad9: pcantidad9,
            cantidad10: pcantidad10,
            nivel: pnivel
        },

        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    });

    request.done(function (res) {
        swal.fire(
            {
                type: 'success',
                title: '¡Lista oficial del MEP registrada exitosamente!'
            });
    });

    request.fail(function (jqXHR, textStatus, error) {
        console.log('error -> '+error);
    });
};