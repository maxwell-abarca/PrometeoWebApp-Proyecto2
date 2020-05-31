'use strict';

let listar_utiles_mep=()=>{
    let listar_utiles_mep=[];
    let request=$.ajax({
        url:"http://localhost:4000/api/listar_utiles_mep",
        method: "GET",
        data:{

        },
        dataType:"json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function(res){
        listar_utiles_mep=res.lista_utiles_mep;
    });
    request.fail(function(jqXHR, textStatus){

    });

    return listar_utiles_mep;
};

let registrar_lista_utiles_mep=(pnombre_util,pcantidad,pdescripcion)=>{
    let request=$.ajax({
        url: "http://localhost:4000/api/registrar_lista_utiles_mep",
        method: "POST",
        data:{
            nombre_util: pnombre_util,
            cantidad: pcantidad,
            descripcion: pdescripcion,
            // id_institucion: pid_institucion
        },
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function(msg){
        swal.fire({
            type: 'success',
            title: '¡Útiles enviados de forma exitosa!',
            text: `Saludos estimado(a) usuario los útiles "${pnombre_util}" han sido registrados en el sistema.`
        });
    });
};

let buscar_lista_utiles_mep=(id_utiles_mep)=>{
    let lista_utiles_mep=[];

    let request=$.ajax({
        url: "http://localhost:4000/api/buscar_lista_utiles_mep/"+id_utiles_mep,
        method: "GET",
        data:{
        },
        dataType: "json",
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function(res){
        lista_utiles_mep=res.lista_utiles_mep;
    });

    request.fail(function(jqXHR, textStatus){

    });

    return lista_utiles_mep;
};

let actualizar_lista_utiles_mep=(pnombre_util,pcantidad,pdescripcion,pid)=>{

    let request=$.ajax({
        url: 'http://localhost:4000/api/actualizar_lista_utiles_mep',
        method: "POST",
        data: {
            nombre_util: pnombre_util,
            cantidad: pcantidad,
            descripcion: pdescripcion,
            id: pid
        },

        dataType: "json",
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
    });


    request.done(function(res){
        swal.fire({
            type: 'success',
            title: 'Actualización realizada con éxito.',
            text: res.msg,
            onClose: ()=>{
                window.location.href='listar_utiles_mep.html';
            }
        });
    });


    request.fail(function(res){
        swal.fire({
            type : 'error',
            title : 'Proceso no realizado',
            text : res.msg
        });

    });


}

let eliminar_lista_utiles_mep=(pnombre_util,pcantidad,pdescripcion,pid)=>{

    let request=$.ajax({
        url: 'http://localhost:4000/api/eliminar_lista_utiles_mep',
        method: "POST",
        data: {
            nombre_util: pnombre_util,
            cantidad: pcantidad,
            descripcion: pdescripcion,
            id: pid
        },
        dataType: "json",
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
    });

    request.done(function(res){
        swal.fire({
            type: 'success',
            title: 'Se ha eliminado la lista de útiles del MEP con éxito.',
            text: res.msg,
            onClose: ()=>{
                window.location.href='listar_utiles_mep.html';
            }
        });
    });


    request.fail(function(res){
        swal.fire({
            type : 'error',
            title : 'Proceso no realizado',
            text : res.msg
        });

    });
}


