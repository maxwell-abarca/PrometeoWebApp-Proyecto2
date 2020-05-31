'use strict';

let listar_noticias=()=>{
    let listar_noticias=[];
    let request=$.ajax({
        url: "http://localhost:4000/api/listar_noticias",
        method: "GET",
        data: {
            
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function(res){
        listar_noticias=res.noticias;
    });
    request.fail(function(jqXHR, textStatus){

    });

    return listar_noticias;
};

let registrar_noticias=(ptitulo,pfecha,phora,plugar,pdescripcion, pid_institucion, pimagen)=>{
    let request=$.ajax({
        url: "http://localhost:4000/api/registrar_noticias",
        method: "POST",
        data:{
            titulo: ptitulo,
            fecha: pfecha,
            hora: phora,
            lugar: plugar,
            descripcion : pdescripcion,
            id_institucion: pid_institucion,
            imagen : pimagen
        },
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function(msg){
        swal.fire({
            type: 'success',
            title: '¡Noticia enviada de forma exitosa!',
            text: `Saludos estimado(a) usuario la noticia "${ptitulo}" ha sido registrada en el sistema.`
        });
    });
}


let buscar_noticias=(id_noticias_id)=>{
    let noticias=[];
    
    let request=$.ajax({
        url: "http://localhost:4000/api/buscar_noticias/"+id_noticias_id,
        method: "GET",
        data:{
        },
        dataType: "json",
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function(res){
        noticias=res.noticias;
    });

    request.fail(function(jqXHR, textStatus){

    });

    return noticias;

};

let actualizar_noticias=(ptitulo,pfecha,phora,plugar,pdescripcion,pimagen, pid)=>{

    let request=$.ajax({
        url: 'http://localhost:4000/api/actualizar_noticias',
        method: "POST",
        data: {
            titulo: ptitulo,
            fecha: pfecha,
            hora: phora,
            lugar: plugar,
            descripcion: pdescripcion,
            imagen: pimagen,
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
                window.location.href='listar_noticias.html';
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

let eliminar_noticias=(ptitulo,pfecha,phora,plugar,pdescripcion,pimagen, pid)=>{

    let request=$.ajax({
        url: 'http://localhost:4000/api/eliminar_noticias',
        method: "POST",
        data: {
            titulo: ptitulo,
            fecha: pfecha,
            hora: phora,
            lugar: plugar,
            descripcion: pdescripcion,
            imagen: pimagen,
            id: pid
        },
        dataType: "json",
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
    });

    request.done(function(res){
        swal.fire({
            type: 'success',
            title: 'Se ha eliminado la noticia con éxito.',
            text: res.msg,
            onClose: ()=>{
                window.location.href='listar_noticias.html';
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