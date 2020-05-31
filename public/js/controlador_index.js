'use strict'
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
 

$(document).ready(function(){
	
	$('ul.tabs_admin li').click(function(){
		var tab_id = $(this).attr('data-tab_admin');

		$('ul.tabs_admin li').removeClass('actual');
		$('.contenido_tab').removeClass('actual');

		$(this).addClass('actual');
		$("#"+tab_id).addClass('actual');
	})

})
 
function herramientas(){

let usuario = sessionStorage.getItem('tipo_usuario');
let listas_de_institucion = document.querySelector('#listas_de_institucion');
let herramientas_admin = document.querySelector('#herramientas_admin');
let ranking_mep = document.querySelector('.ranking_mep');
let info = document.querySelector('#info');
let ranking_usuarios = document.querySelector('.mejores_instituciones');
    
    switch (usuario) {
        case 'Institucion':
        herramientas_admin.style.display = 'none'; 
        listas_de_institucion.style.display = 'block';
        ranking_mep.style.display = 'none'; 
        info.style.display = 'none';
        ranking_usuarios.display = 'none'
            break;
    
        case 'Padre':
        herramientas_admin.style.display = 'none'; 
        listas_de_institucion.style.display = 'none'; 
        info.style.display = 'block';
        ranking_usuarios.display = 'block'
            break;
        case 'Admin':
        info.style.display = 'none'; 
        herramientas_admin.style.display = 'block'; 
        listas_de_institucion.style.display = 'none'; 
        ranking_usuarios.display = 'block'
        break;

        default:
        herramientas_admin.style.display = 'none'; 
        listas_de_institucion.style.display = 'none'; 
        // info.style.display = 'block'; 
        ranking_usuarios.display = 'none'
    }


};



