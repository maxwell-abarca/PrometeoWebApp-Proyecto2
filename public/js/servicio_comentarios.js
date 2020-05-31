'use strict'
let registrar_comentarios = (pid_institucion, pnombre, pimagen, pcomentario, pstars) =>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_comentarios",
        method: "POST",
        data: {
            id_institucion: pid_institucion,
            nombre : pnombre,
            imagen : pimagen,
            comentario : pcomentario,
            stars : pstars
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    });

    request.done(function (msg) {
        swal.fire(
          {
            type: 'success',
            title: 'Nuevo comentario registrado',
            text: 'Se envió el comentario correctamente.',
            showConfirmButton: false,
            timer: 3000
          }
        );
      });
      setTimeout(document.location.reload(),3500);
      request.fail(function (jqXHR, textStatus) {
    
      });
    
    
    
    
    };
let listar_comentarios=()=>{
      let listar_comentarios=[];
        let request=$.ajax({
            url: "http://localhost:4000/api/listar_comentarios", //se usa el mismo nombre que se pone en el route
            method: "GET",
            data: {
    
            },
            dataType: "json",
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            async: false
        });
    
        request.done(function(res){
            listar_comentarios=res.comentarios;
        });
    
        request.fail(function(jqXHR, textStatus){
        });
    
        return listar_comentarios;
  
  };
