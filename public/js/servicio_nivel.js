'use strict'

let registrar_nivel=(pid_institucion,pnombre,pdescripcion)=>{
    let request=$.ajax({
        url: 'http://localhost:4000/api/registrar_niveles',
        method: "POST",
        data: {
            id_institucion: pid_institucion,
            nombre: pnombre,
            descripcion: pdescripcion
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });
    request.done(function(msg){
        swal.fire({
            type: 'success',
            title: '!El nivel ha sido registrado de forma exitosa!',
            text: `Saludos estimado(a) el nivel ha sido registrado en su centro educativo.`
        });
    });
}

let listar_niveles=()=>{
    let listar_niveles=[];
    let request=$.ajax({
        url: "http://localhost:4000/api/listar_niveles", //se usa el mismo nombre que se pone en el route
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function(res){
        listar_niveles=res.niveles;
    });

    request.fail(function(jqXHR, textStatus){

    });
    
    return listar_niveles;
}