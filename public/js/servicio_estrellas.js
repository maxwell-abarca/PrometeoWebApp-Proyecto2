'use strict';

let registrar_estrellas = (pid_institucion,pnombre,pimagen,pcomentario,ppromedio,pstars) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/registrar_estrellas',
        method: "POST",
        data: {
            id_institucion: pid_institucion,
            promedio :ppromedio,
            estrellas : pstars,
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

}
let listar_estrellas=()=>{
    let listar_estrellas=[];
      let request=$.ajax({
          url: "http://localhost:4000/api/listar_estrellas", //se usa el mismo nombre que se pone en el route
          method: "GET",
          data: {
  
          },
          dataType: "json",
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          async: false
      });
  
      request.done(function(res){
          listar_estrellas=res.estrellas;
      });
  
      request.fail(function(jqXHR, textStatus){
        console.log('error');
      });
  
      return listar_estrellas;

};