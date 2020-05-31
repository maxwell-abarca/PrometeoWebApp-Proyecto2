'use strict'

const enlaces = document.querySelectorAll('.barra_navegacion a');
let conectado = sessionStorage.getItem('conectado');
let tipo_usuario = sessionStorage.getItem('tipo_usuario');
const boton_cerrar_sesion = document.querySelector('#btn_cerrar_sesion');


if(conectado){


    switch(tipo_usuario){
        case 'Padre':
            enlaces[0].classList.add('ocultar');/**Registro Padre */
            enlaces[1].classList.add('ocultar');/**Registro Institución*/
            enlaces[2].classList.add('ocultar');/**Iniciar Sesión */
            enlaces[3].classList.add('ocultar');/**Perfil */
            enlaces[4].classList.add('mostrar');/**Perfil Padre */
            enlaces[5].classList.add('mostrar');/**Buscar Centro Educativo */
            enlaces[6].classList.add('mostrar');/**Cerrar Sesion */
        break;

        case 'Institucion':
            enlaces[0].classList.add('ocultar');/**Registro Padre */
            enlaces[1].classList.add('ocultar');/**Registro Institución*/
            enlaces[2].classList.add('ocultar');/**Iniciar Sesión */
            enlaces[3].classList.add('mostrar');/**Perfil */
            enlaces[4].classList.add('ocultar');/**Perfil Padre */
            enlaces[5].classList.add('ocultar');/**Buscar Centro Educativo */
            enlaces[6].classList.add('mostrar');/**Cerrar Sesion */
        break;
        
        case 'Admin':
            enlaces[0].classList.add('ocultar');/**Registro Padre */
            enlaces[1].classList.add('ocultar');/**Registro Institución*/
            enlaces[2].classList.add('ocultar');/**Iniciar Sesión */
            enlaces[3].classList.add('ocultar');/**Perfil */
            enlaces[4].classList.add('ocultar');/**Perfil Padre */
            enlaces[5].classList.add('mostrar');/**Buscar Centro Educativo */
            enlaces[6].classList.add('mostrar');/**Cerrar Sesion */
    }
}else{
    enlaces[0].classList.add('mostrar');/**Registro Padre */
    enlaces[1].classList.add('mostrar');/**Registro Institución*/
    enlaces[2].classList.add('mostrar');/**Iniciar Sesión */
    enlaces[3].classList.add('ocultar');/**Perfil */
    enlaces[4].classList.add('ocultar');/**Perfil Padre */
    enlaces[5].classList.add('ocultar');/**Buscar Centro Educativo */
    enlaces[6].classList.add('ocultar');/**Cerrar Sesion */
}  
