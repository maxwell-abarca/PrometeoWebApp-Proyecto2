'use strict';

let listar_actividades=()=>{
    let listar_actividades=[];
    let request=$.ajax({
        url: "http://localhost:4000/api/listar_actividades", //se usa el mismo nombre que se pone en el route
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function(res){
        listar_actividades=res.actividades;
    });

    request.fail(function(jqXHR, textStatus){

    });

    return listar_actividades;
};


let buscar_actividades=(id_institucion)=>{  //buscamos por un criterio en específico
    let actividades=[];

    let request=$.ajax({
        url: "http://localhost:4000/api/buscar_actividades/"+id_institucion,
        method: "GET",
        data:{
        },
        dataType: "json",
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
        async: false

    });

    request.done(function(res){

    actividades=res.actividades;

    });

    request.fail(function(jqXHR, textStatus){

    });

    return actividades;
};


let actualizar_actividades=(pnombre,pfecha,phora,plugar,pdescripcion, pimagen, pid)=>{

    let request=$.ajax({
        url: 'http://localhost:4000/api/actualizar_actividades',
        method: "POST",
        data: {
            nombre: pnombre,
            fecha: pfecha,
            hora: phora,
            lugar: plugar,
            descripcion : pdescripcion,
            imagen : pimagen,
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
                window.location.href='listar_actividades.html';
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



let registrar_actividades=(pnombre,pfecha,phora,plugar,pdescripcion, pid_institucion, pimagen)=>{
    let request= $.ajax({
        url: 'http://localhost:4000/api/registrar_actividades',
        method: "POST",
        data: {
            nombre: pnombre,
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
            title: '¡Actividad enviada de forma exitosa!',
            text: `Saludos estimado(a) usuario, la actividad "${pnombre}", con la descripción ${pdescripcion} en la fecha ${pfecha} a las ${phora}, en ${plugar} ha sido registrada en el sistema, gracias por su información.`
        });
    });
}

let eliminar_actividades=(pnombre,pfecha,phora,plugar,pdescripcion,pimagen, pid)=>{

    let request=$.ajax({
        url:'http://localhost:4000/api/eliminar_actividades',
        method: "POST",
        data: {
            nombre: pnombre,
            fecha: pfecha,
            hora: phora,
            lugar: plugar,
            descripcion : pdescripcion,
            imagen : pimagen,
            id: pid
           
        },
        dataType: "json",
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',

    }); 
    
    request.done(function(res){
        swal.fire({
            type: 'success',
            title: 'Se ha eliminado la actividad con éxito.',
            text: res.msg,
            onClose: ()=>{
                window.location.href='listar_actividades.html';
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




