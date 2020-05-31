'use strict';

let registrar_instituciones_cercanas=(pinstitucion1,pinstitucion2,pinstitucion3,pinstitucion4,pinstitucion5,pinstitucion6,pinstitucion7,pinstitucion8,pinstitucion9,pinstitucion10,pid_padre)=>{
    let request = $.ajax ({
        url: "http://localhost:4000/api/registrar_instituciones_cercanas",
        method: "POST",
        data: {
            institucion1: pinstitucion1,
            institucion2: pinstitucion2,
            institucion3: pinstitucion3,
            institucion4: pinstitucion4,
            institucion5: pinstitucion5,
            institucion6: pinstitucion6,
            institucion7: pinstitucion7,
            institucion8: pinstitucion8,
            institucion9: pinstitucion9,
            institucion10: pinstitucion10,
            id_padre: pid_padre
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: '¡Centros educativos cerca registrados exitosamente!',
            text: `Saludos estimado(a) usuario, los centros educativos cercanos a su ubicación han sido registrados en el sistema.`
        });
    });

}

//listar