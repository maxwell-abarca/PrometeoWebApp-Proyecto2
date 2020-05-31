'use strict';

let listar_citas=()=>{
    let listar_citas=[]; //Va a tener todo el listado de los comentarios(es decir las citas) que devuelve la base de datos 
    let request=$.ajax({
        url:'http://localhost:4000/api/listar_citas',
        method: "GET",
        data:{


        },
        dataType: "json",
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });
    
    request.done(function(res){
        listar_citas=res.citas;
    });

    request.fail(function(jqXHR, textStatus){

    });

    return listar_citas;
};

let registrar_citas=(pnombre_cita,pnombre_familiar,pfecha,phora,pdescripcion,pid_institucion)=>{
    let request=$.ajax({
        url: "http://localhost:4000/api/registrar_citas",
        method: "POST",
        data: {
            nombre_cita: pnombre_cita,
            nombre_familiar: pnombre_familiar,
            fecha: pfecha,
            hora: phora,
            descripcion: pdescripcion,
            id_institucion: pid_institucion
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function(msg){
        swal.fire({
            type: 'success',
            title: '!La cita ha sido enviada de forma exitosa!',
            text: `Saludos estimado(a) usuario su cita "${pnombre_cita}" ha sido registrada, le estaremos respondiendo, gracias.`
        });
    });
}