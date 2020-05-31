'use strict';

let registrar_util = (pnivel, putil, pdescripcion, pcantidad, pid_intitucion) => {

  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_util",
    method: "POST",
    data: {
      nivel: pnivel,
      util: putil,
      descripcion: pdescripcion,
      cantidad: pcantidad,
      id_institucion: pid_intitucion


    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=utf-8'

  });

  request.done(function (msg) {
    swal.fire(
      {
        type: 'success',
        title: 'Información de los útiles enviada correctamente.',
        text: 'Se envió la informacion de los útiles correctamente.',
        onClose: () => {
          window.location.href = 'listar_utiles.html';
        }
      }
    );
  });

  request.fail(function (jqXHR, textStatus) {

  });




};
let listar_util = () => {
  let listar_util = [];
  let request = $.ajax({
    url: "http://localhost:4000/api/listar_utiles",
    method: "GET",
    data: {

    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    async: false
  });

  request.done(function (res) {
    listar_util = res.util;
  });

  request.fail(function (jqXHR, textStatus) {

  });

  return listar_util;




};
let buscar_util = (id_util) => {
  let utiles = [];
  let request = $.ajax({
    url: "http://localhost:4000/api/buscar_util/" + id_util,
    method: "GET",
    data: {

    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    async: false
  });

  request.done(function (res) {
    utiles = res.util;
  });

  request.fail(function (jqXHR, textStatus) {

  });

  return utiles;
}
let actualizar_util = (pid, pnivel, putil, pdescripcion, pcantidad) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/actualizar_util",
    method: "POST",
    data: {
      id: pid,
      nivel: pnivel,
      util: putil,
      descripcion: pdescripcion,
      cantidad: pcantidad
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=utf-8'
  });

  request.done(function (res) {
    swal.fire(
      {
        type: 'success',
        title: 'Se ha actualizado correctamente el util y su descripción.',
        text: 'Informacion del util actualizada correctamente.',

        onClose: () => {
          window.location.href = 'listar_utiles.html'
        }
      }
    );
  }
  );

  request.fail(function (jqXHR, textStatus) {

  });

}
let eliminar_util = (pid, pnivel, putil, pdescripcion, pcantidad) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/eliminar_util",
    method: "POST",
    data: {
      id: pid,
      nivel: pnivel,
      util: putil,
      descripcion: pdescripcion,
      cantidad: pcantidad
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=utf-8'
  });

  request.done(function (res) {
    swal.fire(
      {
        type: 'success',
        title: 'Se ha eliminado correctamente el útil.',
        text: 'Informacion del util eliminada correctamente.',
        onClose: () => {
          window.location.href = 'listar_utiles.html';
        }

      }
    );
  }
  );

  request.fail(function (jqXHR, textStatus) {

  });


}