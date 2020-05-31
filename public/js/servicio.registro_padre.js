'use strict';

let listar_padre=()=>{
    let listar_padre=[];

    let request=$.ajax({
        url: "http://localhost:4000/api/listar_padre", //se usa el mismo nombre que se pone en el route
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function(res){
        listar_padre=res.padres;
    });

    request.fail(function(jqXHR, textStatus){

    });

    return listar_padre;
}


let buscar_padres=(id_padres)=>{
    let padres=[];

    let request=$.ajax({
        url: "http://localhost:4000/api/buscar_padres/"+id_padres,
        method: "GET",
        data:{
        },
        dataType: "json",
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
        async: false

    });


    request.done(function(res){

        padres=res.padres;
    
        });
    
        request.fail(function(jqXHR, textStatus){
    
        });
    
        return padres;
};


let actualizar_padres=(ppadre_nombre, ppadre_apellido, ppadre_correo_electronico, ppadre_hijos, ppadre_fecha, ppadre_direccion, ppadre_telefono, ppadre_nacionalidad, ppadre_cedula, ppadre_contrasena, ppadre_imagen, pidentificacion)=>{

    let request = $.ajax({
        url: 'http://localhost:4000/api/actualizar_padres',
        method: "POST",
        data: {
            padre_nombre : ppadre_nombre,
            padre_apellido : ppadre_apellido,
            padre_correo_electronico : ppadre_correo_electronico,
            padre_hijos : ppadre_hijos,
            padre_fecha : ppadre_fecha,
            padre_direccion : ppadre_direccion,
            padre_telefono : ppadre_telefono,
            padre_nacionalidad : ppadre_nacionalidad,
            padre_cedula : ppadre_cedula,
            padre_contrasena : ppadre_contrasena,
            padre_imagen : ppadre_imagen,
            id: pidentificacion
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
       
    });

    request.done(function(res){
            swal.fire({
                type: 'success',
                title: 'Actualización realizada con éxito.',
                text: res.msg,
                onClose: ()=>{
                    window.location.href='perfil_padre.html';
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



let registrar_padre = (ppadre_nombre, ppadre_apellido, ppadre_correo_electronico, ppadre_hijos, ppadre_fecha, ppadre_direccion, ppadre_telefono, ppadre_nacionalidad, ppadre_cedula, ppadre_contrasena, ppadre_imagen) => {
    let request = $.ajax({
        url:"http://localhost:4000/api/registrar_padre",
        method: "POST",
        data: {
            padre_nombre : ppadre_nombre,
            padre_apellido : ppadre_apellido,
            padre_correo_electronico : ppadre_correo_electronico,
            padre_hijos : ppadre_hijos,
            padre_fecha : ppadre_fecha,
            padre_direccion : ppadre_direccion,
            padre_telefono : ppadre_telefono,
            padre_nacionalidad : ppadre_nacionalidad,
            padre_cedula : ppadre_cedula,
            padre_contrasena : ppadre_contrasena,
            padre_imagen : ppadre_imagen
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function(msg){

        swal.fire({
            type: 'success',
            tittle: 'Usuario Registrado Correctamente.',
            text: `Saludos ${ppadre_nombre} se ha registrado exitosamente en el sistema, puede iniciar sesion con el correo que ingresó.`,
            showConfirmButton: false,
            timer: 4000
        });
       setTimeout("window.location.href = 'index.html';",4500);
        
    });

    request.fail(function(jqXHR,textStatus){

    });
};


let eliminar_padres=(ppadre_nombre, ppadre_apellido, ppadre_correo_electronico, ppadre_hijos, ppadre_fecha, ppadre_direccion, ppadre_telefono, ppadre_nacionalidad, ppadre_cedula, ppadre_contrasena, ppadre_imagen, pidentificacion)=>{

    let request = $.ajax({
        url: 'http://localhost:4000/api/eliminar_padres',
        method: "POST",
        data: {
            padre_nombre : ppadre_nombre,
            padre_apellido : ppadre_apellido,
            padre_correo_electronico : ppadre_correo_electronico,
            padre_hijos : ppadre_hijos,
            padre_fecha : ppadre_fecha,
            padre_direccion : ppadre_direccion,
            padre_telefono : ppadre_telefono,
            padre_nacionalidad : ppadre_nacionalidad,
            padre_cedula : ppadre_cedula,
            padre_contrasena : ppadre_contrasena,
            padre_imagen : ppadre_imagen,
            id: pidentificacion
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
       
    });

    request.done(function(res){
        swal.fire({
            type: 'success',
            title: 'Se ha eliminado el perfil correctamente.',
            text: res.msg,
            onClose: ()=>{
                window.location.href='index.html';
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


