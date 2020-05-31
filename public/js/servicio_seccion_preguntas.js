'use strict'
let listar_pregunta = () => {
    let listar_pregunta = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_pregunta",
        method: "GET",
        data: {



        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false

    });

    request.done(function (res) {
        listar_pregunta = res.pregunta;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return listar_pregunta;




};

let registrar_pregunta = (ppregunta, prespuesta, pid_institucion) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_pregunta",
        method: "POST",
        data: {
            pregunta: ppregunta,
            respuesta: prespuesta,
            id_institucion: pid_institucion



        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',

    });

    request.done(function (msg) {
        swal.fire(
            {
                type: 'success',
                title: 'pregunta enviada de manera correcta'
            });
    });

    request.fail(function (jqXHR, textStatus) {

    });

};

let buscar_pregunta=(id_mod_pregunta)=>{  //buscamos por un criterio en específico
    let pregunta=[];

    let request=$.ajax({
        url: "http://localhost:4000/api/buscar_pregunta/"+id_mod_pregunta,
        method: "GET",
        data:{
        },
        dataType: "json",
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
        async: false

    });

    request.done(function(res){

    pregunta=res.pregunta;

    });

    request.fail(function(jqXHR, textStatus){

    });

    return pregunta;
};

let actualizar_pregunta=(ppregunta,prespuesta,pid)=>{

    let request=$.ajax({
        url: 'http://localhost:4000/api/actualizar_pregunta',
        method: "POST",
        data: {
            pregunta: ppregunta,
            respuesta: prespuesta,
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
                window.location.href='listar_preguntas.html';
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

let eliminar_pregunta=(ppregunta,prespuesta,pid)=>{
    let request=$.ajax({
        url:'http://localhost:4000/api/eliminar_pregunta',
        method: "POST",
        data: {
            pregunta: ppregunta,
            respuesta: prespuesta,
            id: pid

        },
        dataType: "json",
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
        
    });

    request.done(function(res){
        swal.fire({
            type: 'success',
            title: 'Se ha eliminado la pregunta con éxito.',
            text: res.msg,
            onClose: ()=>{
                window.location.href='listar_preguntas.html';
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