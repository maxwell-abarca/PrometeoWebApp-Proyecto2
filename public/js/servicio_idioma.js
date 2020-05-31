'use strict'
let registrar_idioma = (pid_institucion, pidiomas, pdescripcion) =>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_idioma",
        method: "POST",
        data: {
            id_institucion: pid_institucion,
            idiomas : pidiomas,
            descripcion : pdescripcion
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    });

    request.done(function (msg) {
        swal.fire(
          {
            type: 'success',
            title: 'Nuevo idioma registrado',
            text: 'Se envió la información del o los idiomas correctamente.'
          }
        );
      });
    
      request.fail(function (jqXHR, textStatus) {
    
      });
    
    
    
    
    };

let listar_idioma=()=>{
      let listar_idioma=[];
        let request=$.ajax({
            url: "http://localhost:4000/api/listar_idioma", //se usa el mismo nombre que se pone en el route
            method: "GET",
            data: {
    
            },
            dataType: "json",
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            async: false
        });
    
        request.done(function(res){
            listar_idioma=res.idiomas;
        });
    
        request.fail(function(jqXHR, textStatus){
          console.log('error');
        });
    
        return listar_idioma;
  
  };

  let buscar_idioma=(id_institucion)=>{
    let idioma=[];
    let request=$.ajax({
        url: "http://localhost:4000/api/buscar_idioma/" + id_institucion, //se usa el mismo nombre que se pone en el route
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function(res){
      idioma=res.idioma;
    });

    request.fail(function(jqXHR, textStatus){

    });

    return idioma;

};

let actualizar_idioma = (pidiomas, pdescripcion,pid ) => {
    let request = $.ajax({
      url: "http://localhost:4000/api/actualizar_idioma",
      method: "POST",
      data: {
          idiomas : pidiomas,
          descripcion : pdescripcion,
          id : pid
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
  });

  request.done(function (msg) {
      swal.fire(
        {
          type: 'success',
          title: 'Idioma actualizado correctamente',
          text: 'Se envió la información del idioma correctamente.',
          showConfirmButton: false,
          timer: 4000
        }
      );
      setTimeout("window.location.href = 'listar_idioma.html';",4500);
    });

    request.fail(function (jqXHR, textStatus) {

    });

}


let eliminar_idioma=(pidiomas, pdescripcion,pid)=> {
  let request=$.ajax({
    url:'http://localhost:4000/api/eliminar_idioma',
    method: "POST",
    data: {
      idiomas : pidiomas,
      descripcion : pdescripcion,
      id : pid
    },

    dataType: "json",
        contentType:'application/x-www-form-urlencoded; charset=UTF-8',
});

request.done(function(res){
  swal.fire({
      type: 'success',
      title: 'Se ha eliminado el idioma con éxito.',
      text: res.msg,
      onClose: ()=>{
          window.location.href='listar_idioma.html';
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