'use strict';

let registrar_ranking_mep = (ppuesto1, ppuesto2, ppuesto3, ppuesto4, ppuesto5, ppuesto6, ppuesto7, ppuesto8, ppuesto9, ppuesto10) => {
    let request = $.ajax ({
        url: "http://localhost:4000/api/registrar_ranking",
        method: "POST",
        data: {
            puesto1: ppuesto1,
            puesto2: ppuesto2,
            puesto3: ppuesto3,
            puesto4: ppuesto4,
            puesto5: ppuesto5,
            puesto6: ppuesto6,
            puesto7: ppuesto7,
            puesto8: ppuesto8,
            puesto9: ppuesto9,
            puesto10: ppuesto10,
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false,
    });

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: '¡Ranking del MEP registrado exitosamente!',
            text: `Saludos estimado(a) usuario, el ranking del MEP ha sido registrado en el sistema.`
        });
    });
    request.fail(function( jqXHR, textStatus){

    });
}

let listar_ranking_mep = () => {
   
    let lista_ranking_mep = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_ranking", //se usa el mismo nombre que se puse en el route
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false,
    });

    request.done(function (res) {
        lista_ranking_mep = res.ranking;
       
    });

    request.fail(function (jqXHR, textStatus) {
       
    });

    return lista_ranking_mep;
};
