'use strict';

let usuario = sessionStorage.getItem('tipo_usuario');

if(usuario=='Institucion'||usuario=='Padre'||usuario=='Admin'){

}else{
    window.location.replace("http://localhost:3000/public/acceso_denegado.html");

};