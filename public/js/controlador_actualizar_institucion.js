'use strict'

const tab_1 = document.querySelector('#li_tab-1');
const tab_2 = document.querySelector('#li_tab-2');
const tab_3 = document.querySelector('#li_tab-3');
const tab_4 = document.querySelector('#li_tab-4');
const tab_5 = document.querySelector('#li_tab-5');
const input_institucion_nombre_encargado = document.querySelector('#txt_institucion_nombre_encargado');
const input_institucion_apellido_encargado = document.querySelector('#txt_institucion_apellido_encargado');
const input_institucion_departamento_encargado = document.querySelector('#txt_institucion_departamento_encargado');
const input_institucion_telefono = document.querySelector('#txt_institucion_telefono');
const input_institucion_correo_electronico = document.querySelector('#txt_institucion_correo_electronico');
const input_institucion_nombre_inscrito = document.querySelector('#txt_institucion_nombre_inscrito');
const input_institucion_nombre = document.querySelector('#txt_institucion_nombre');
const fieldset_institucion_bachillerato_internacional = document.querySelector('#rbt_institucion_bachillerato_internacional');
const select_institucion_tipo = document.querySelector('#slt');
const select_institucion_provincia = document.querySelector('#slt_institucion_provincia');
const select_institucion_canton = document.querySelector('#slt_institucion_canton');
const select_institucion_distrito = document.querySelector('#slt_institucion_distrito');
const select_institucion_generos = document.querySelector('#slt_institucion_generos');
const input_institucion_ideologia = document.querySelector('#txt_institucion_ideologia');
const input_institucion_fundacion = document.querySelector('#txt_institucion_fundacion');
const input_institucion_referencia = document.querySelector('#txt_institucion_referencia');
const input_institucion_cedula = document.querySelector('#txt_institucion_cedula');
const input_institucion_direccion = document.querySelector('#txt_institucion_direccion');
const input_institucion_sitio_web = document.querySelector('#txt_institucion_sitio_web');
const input_institucion_fax = document.querySelector('#txt_institucion_fax');
const imagen_institucion = document.querySelector('#image_preview');
const input_institucion_facebook = document.querySelector('#txt_institucion_facebook');
const input_institucion_twitter = document.querySelector('#txt_institucion_twitter');
const input_institucion_cedula_encargado = document.querySelector('#txt_institucion_cedula_encargado');
const input_institucion_correo_electronico_encargado = document.querySelector('#txt_institucion_correo_electronico_encargado');
const boton_actualizar = document.querySelector('#btn_actualizar');
const image_holder = document.querySelector('.image_holder');



$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})

let get_param = (param) => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);

    return id;
};

let _id = get_param('id_institucion');

let institucion = buscar_institucion(_id);

let mostrar_datos = () =>{

    input_institucion_nombre.value = institucion[0]['institucion_nombre'];
    input_institucion_nombre_encargado.value = institucion[0]['institucion_nombre_encargado'];
    input_institucion_apellido_encargado.value = institucion[0]['institucion_apellido_encargado'];
    input_institucion_departamento_encargado.value = institucion[0]['institucion_departamento_encargado'];
    input_institucion_telefono.value = institucion[0]['institucion_telefono'];
    input_institucion_correo_electronico.value = institucion[0]['institucion_correo_electronico'];
    input_institucion_nombre_inscrito.value = institucion[0]['institucion_nombre_inscrito']; 
    input_institucion_ideologia.value = institucion[0]['institucion_ideologia'];
    input_institucion_fundacion.value = institucion[0]['institucion_fundacion'];
    input_institucion_referencia.value = institucion[0]['institucion_referencia'];
    input_institucion_cedula.value = institucion[0]['institucion_cedula'];

    let opciones_provincias = document.querySelectorAll('#slt_institucion_provincia option');

    for (let i = 0; i < opciones_provincias.length; i++) {
        if (opciones_provincias[i].textContent == institucion[0]['institucion_provincia']) {
            opciones_provincias[i].selected = true;
            llenar_cantones();
        }
        
    }

    let opciones_cantones = document.querySelectorAll('#slt_institucion_canton option');

    for (let i = 0; i < opciones_cantones.length; i++) {
        if (opciones_cantones[i].textContent == institucion[0]['institucion_canton']) {
            opciones_cantones[i].selected = true;
            llenar_distritos();
        }
        
    }

    let opciones_distritos = document.querySelectorAll('#slt_institucion_distrito option');

    for (let i = 0; i < opciones_distritos.length; i++) {
        if (opciones_distritos[i].textContent == institucion[0]['institucion_distrito']) {
            opciones_distritos[i].selected = true;

        }
        
    }

    let opciones_generos = document.querySelectorAll('#slt_institucion_generos option');

    for (let i = 0; i < opciones_generos.length; i++) {
        if (opciones_generos[i].textContent == institucion[0]['institucion_generos']) {
            opciones_generos[i].selected = true;

        }
        
    }

    let opciones_tipos = document.querySelectorAll('#slt option');

    for (let i = 0; i < opciones_tipos.length; i++) {
        if (opciones_tipos[i].textContent == institucion[0]['institucion_tipo']) {
            opciones_tipos[i].selected = true;

        }
        
    }

    switch (institucion[0]['institucion_bachillerato_internacional']) {
        case 'Sí':
        $(".rbt_si").prop("checked", true);  
            break;
    
        case 'No':
        $(".rbt_no").prop("checked", true);  
        break;
    }



    input_institucion_direccion.value = institucion[0]['institucion_direccion'];
    input_institucion_sitio_web.value = institucion[0]['institucion_sitio_web'];
    input_institucion_fax.value = institucion[0]['institucion_fax'];
    imagen_institucion.src = institucion[0]['institucion_imagen'];
    input_institucion_facebook.value = institucion[0]['institucion_facebook'];
    input_institucion_twitter.value = institucion[0]['institucion_twitter'];
    input_institucion_cedula_encargado.value = institucion[0]['institucion_cedula_encargado'];
    input_institucion_correo_electronico_encargado.value = institucion[0]['institucion_correo_electronico_encargado'];


}
if (institucion) {
    mostrar_datos();
}

let obtener_datos = ()=>{
    let institucion_nombre_encargado = input_institucion_nombre_encargado.value;
    let institucion_apellido_encargado = input_institucion_apellido_encargado.value;
    let institucion_departamento_encargado = input_institucion_departamento_encargado.value;
    let institucion_telefono = input_institucion_telefono.value;
    let institucion_correo_electronico = input_institucion_correo_electronico.value;
    let institucion_nombre_inscrito = input_institucion_nombre_inscrito.value;
    let institucion_nombre = input_institucion_nombre.value;
    let institucion_bachillerato_internacional = document.querySelector('#rbt_institucion_bachillerato_internacional input[type=radio]:checked').value;
    let institucion_tipo = select_institucion_tipo.selectedOptions[0].textContent;
    // let institucion_idiomas = idiomas;
    let institucion_generos = select_institucion_generos.selectedOptions[0].textContent;
    let institucion_ideologia = input_institucion_ideologia.value;
    let institucion_fundacion = input_institucion_fundacion.value;
    let institucion_referencia = input_institucion_referencia.value;
    let institucion_cedula = input_institucion_cedula.value;
    let institucion_provincia = select_institucion_provincia.selectedOptions[0].textContent;
    let institucion_canton = select_institucion_canton.selectedOptions[0].textContent;
    let institucion_distrito = select_institucion_distrito.selectedOptions[0].textContent;
    let institucion_direccion = input_institucion_direccion.value;
    let institucion_sitio_web = input_institucion_sitio_web.value;
    let institucion_facebook = input_institucion_facebook.value;
    let institucion_twitter = input_institucion_twitter.value;
    let institucion_correo_electronico_encargado = input_institucion_correo_electronico_encargado.value;
    let institucion_cedula_encargado = input_institucion_cedula_encargado.value;
    let institucion_fax = input_institucion_fax.value;
    let institucion_imagen = imagen_institucion.src;

    actualizar_institucion(_id,institucion_nombre_encargado, institucion_apellido_encargado ,institucion_departamento_encargado, institucion_telefono, institucion_correo_electronico, institucion_nombre_inscrito, institucion_nombre, institucion_bachillerato_internacional, institucion_tipo,/*institucion_idiomas,*/ institucion_generos, institucion_ideologia, institucion_fundacion, institucion_referencia, institucion_cedula, institucion_provincia, institucion_canton, institucion_distrito, institucion_direccion, institucion_sitio_web, institucion_fax,institucion_imagen, institucion_facebook, institucion_twitter, institucion_cedula_encargado, institucion_correo_electronico_encargado);
}

boton_actualizar.addEventListener('click',obtener_datos);