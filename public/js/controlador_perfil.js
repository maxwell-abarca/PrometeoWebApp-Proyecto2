    'use strict'
    $(document).ready(function () {

        $('ul.tabs li').click(function () {
            var tab_id = $(this).attr('data-tab');
    
            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');
    
            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        })
    
    });
    
    const section_usuario = document.querySelector('#sct_usuario');

    function getUrl() {
        //Se obtiene el valor de la URL desde el navegador
        let actual = window.location + '';
        //Se realiza la división de la URL
        let split = actual.split("/");
        //Se obtiene el ultimo valor de la URL
        let id = split[split.length - 1];
        return id;
    
    };
    let top_top_info = document.querySelector('#top_top_info');

    let estrellas_calificadas = mostrar_estrellas();

    let info = listar_institucion();

    let tipo_cliente = sessionStorage.getItem('tipo_usuario');

    let id = sessionStorage.getItem('id_usuario');

    let Imagen = document.querySelector('#img_centro');
    let Nombre = document.querySelector('#nombre_institucion');
    let Provincia = document.querySelector('#provincia_institucion');
    let Canton = document.querySelector('#canton_institucion');
    let Distrito = document.querySelector('#distrito_institucion');
    let Direccion = document.querySelector('#direccion_institucion');
    let Nombre_inscrito = document.querySelector('#nombre_inscrito');
    let Fundacion = document.querySelector('#fundacion');
    let Generos = document.querySelector('#generos');
    let Idiomas = document.querySelector('#idiomas');
    let Tipo = document.querySelector('#tipo');
    let Cedula = document.querySelector('#cedula_juridica');
    let Ideologia = document.querySelector('#ideologia');
    let Referencia = document.querySelector('#referencia');
    // Contacto
    let Numero = document.querySelector('#telefono_institucion');
    let Fax = document.querySelector('#fax_institucion');
    let Web = document.querySelector('#web_institucion');
    let modificar_perfil;
    let contenedor_estrellas = document.querySelector('#estrellas_calificas');
    let estrellas_calificadas_1;
    let estrellas_calificadas_2;
    let estrellas_calificadas_3;
    let estrellas_calificadas_4;
    let estrellas_calificadas_5;
    switch(tipo_cliente){
        
        case 'Institucion':
        
        for (let i = 0; i < info.length; i++) {
            if (info[i]['institucion_id'] == id) {
                Imagen.src = info[i]['institucion_imagen'];
                Nombre.innerHTML = info[i]['institucion_nombre'];
                Provincia.innerHTML = 'Provincia: ' + info[i]['institucion_provincia'];
                Canton.innerHTML = 'Cantón: ' + info[i]['institucion_canton'];
                Distrito.innerHTML = 'Distrito: ' + info[i]['institucion_distrito'];
                Direccion.innerHTML = 'Dirección exacta: ' + info[i]['institucion_direccion'];
                Nombre_inscrito.innerHTML = 'Nombre inscrito: ' + info[i]['institucion_nombre_inscrito'];
                Fundacion.innerHTML = 'Año de fundación: ' + info[i]['institucion_fundacion'];
                Generos.innerHTML = 'Distribución de géneros: ' + info[i]['institucion_generos'];
                Tipo.innerHTML = 'Tipo de centro educativo: ' + info[i]['institucion_tipo'];
                Cedula.innerHTML = 'Cédula jurídica del centro educativo: ' + info[i]['institucion_cedula'];
                Ideologia.innerHTML = 'Ideología del centro educativo: ' + info[i]['institucion_ideologia'];
                Referencia.innerHTML = 'Referencia histórica del centro educativo: ' + info[i]['institucion_referencia'];
                Numero.innerHTML = 'Número: ' + info[i]['institucion_telefono'];
                Fax.innerHTML = 'Fax: ' + info[i]['institucion_fax'];
                Web.innerHTML = 'Página web: ' + info[i]['institucion_sitio_web'];
                modificar_perfil = document.createElement('a');
                modificar_perfil.classList.add('#modificar_perfil');
                modificar_perfil.href=`actualizar_centro_educativo.html?id_institucion=`+info[i]['_id'];
                switch (estrellas_calificadas) {

                    case 0:
                    estrellas_calificadas_1 = document.createElement('i');
                    estrellas_calificadas_1.style = 'color:#3498db;font-size:45px;';
                    // estrellas_calificadas_1.style = 'font-size:20px';
                    estrellas_calificadas_1.innerHTML = '<i class="fa fa-star-o"></i>';
    
                    estrellas_calificadas_2 = document.createElement('i');
                    estrellas_calificadas_2.style = 'color:#3498db;font-size:45px;';
                    // estrellas_calificadas_2.style = 'font-size:20px';
                    estrellas_calificadas_2.innerHTML = '<i class="fa fa-star-o"></i>';
    
                    estrellas_calificadas_3 = document.createElement('i');
                    estrellas_calificadas_3.style = 'color:#3498db;font-size:45px;';
                    // estrellas_calificadas_3.style = 'font-size:20px';
                    estrellas_calificadas_3.innerHTML = '<i class="fa fa-star-o"></i>';
    
                    estrellas_calificadas_4 = document.createElement('i');
                    estrellas_calificadas_4.style = 'color:#3498db;font-size:45px;';
                    // estrellas_calificadas_4.style = 'font-size:20px';
                    estrellas_calificadas_4.innerHTML = '<i class="fa fa-star-o"></i>';
    
                    estrellas_calificadas_5 = document.createElement('i');
                    estrellas_calificadas_5.style = 'color:#3498db;font-size:45px;';
                    // estrellas_calificadas_5.style = 'font-size:20px';
                    estrellas_calificadas_5.innerHTML = '<i class="fa fa-star-o"></i>';
                    break;
    


                    case 1:
                        estrellas_calificadas_1 = document.createElement('i');
                        estrellas_calificadas_1.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_1.style = 'font-size:20px';
                        estrellas_calificadas_1.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_2 = document.createElement('i');
                        estrellas_calificadas_2.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_2.style = 'font-size:20px';
                        estrellas_calificadas_2.innerHTML = '<i class="fa fa-star-o"></i>';
        
                        estrellas_calificadas_3 = document.createElement('i');
                        estrellas_calificadas_3.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_3.style = 'font-size:20px';
                        estrellas_calificadas_3.innerHTML = '<i class="fa fa-star-o"></i>';
        
                        estrellas_calificadas_4 = document.createElement('i');
                        estrellas_calificadas_4.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_4.style = 'font-size:20px';
                        estrellas_calificadas_4.innerHTML = '<i class="fa fa-star-o"></i>';
        
                        estrellas_calificadas_5 = document.createElement('i');
                        estrellas_calificadas_5.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_5.style = 'font-size:20px';
                        estrellas_calificadas_5.innerHTML = '<i class="fa fa-star-o"></i>';
                        break;
        
                    case 2:
                        estrellas_calificadas_1 = document.createElement('i');
                        estrellas_calificadas_1.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_1.style = 'font-size:20px';
                        estrellas_calificadas_1.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_2 = document.createElement('i');
                        estrellas_calificadas_2.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_2.style = 'font-size:20px';
                        estrellas_calificadas_2.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_3 = document.createElement('i');
                        estrellas_calificadas_3.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_3.style = 'font-size:20px';
                        estrellas_calificadas_3.innerHTML = '<i class="fa fa-star-o"></i>';
        
                        estrellas_calificadas_4 = document.createElement('i');
                        estrellas_calificadas_4.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_4.style = 'font-size:20px';
                        estrellas_calificadas_4.innerHTML = '<i class="fa fa-star-o"></i>';
        
                        estrellas_calificadas_5 = document.createElement('i');
                        estrellas_calificadas_5.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_5.style = 'font-size:20px';
                        estrellas_calificadas_5.innerHTML = '<i class="fa fa-star-o"></i>';
                        break;
        
                    case 3:
                        estrellas_calificadas_1 = document.createElement('i');
                        estrellas_calificadas_1.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_1.style = 'font-size:20px';
                        estrellas_calificadas_1.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_2 = document.createElement('i');
                        estrellas_calificadas_2.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_2.style = 'font-size:20px';
                        estrellas_calificadas_2.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_3 = document.createElement('i');
                        estrellas_calificadas_3.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_3.style = 'font-size:20px';
                        estrellas_calificadas_3.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_4 = document.createElement('i');
                        estrellas_calificadas_4.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_4.style = 'font-size:20px';
                        estrellas_calificadas_4.innerHTML = '<i class="fa fa-star-o"></i>';
        
                        estrellas_calificadas_5 = document.createElement('i');
                        estrellas_calificadas_5.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_5.style = 'font-size:20px';
                        estrellas_calificadas_5.innerHTML = '<i class="fa fa-star-o"></i>';
                        break;
        
                    case 4:
                        estrellas_calificadas_1 = document.createElement('i');
                        estrellas_calificadas_1.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_1.style = 'font-size:20px';
                        estrellas_calificadas_1.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_2 = document.createElement('i');
                        estrellas_calificadas_2.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_2.style = 'font-size:20px';
                        estrellas_calificadas_2.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_3 = document.createElement('i');
                        estrellas_calificadas_3.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_3.style = 'font-size:20px';
                        estrellas_calificadas_3.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_4 = document.createElement('i');
                        estrellas_calificadas_4.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_4.style = 'font-size:20px';
                        estrellas_calificadas_4.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_5 = document.createElement('i');
                        estrellas_calificadas_5.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_5.style = 'font-size:20px';
                        estrellas_calificadas_5.innerHTML = '<i class="fa fa-star-o"></i>';
                        break;
        
                    case 5:
                        estrellas_calificadas_1 = document.createElement('i');
                        estrellas_calificadas_1.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_1.style = 'font-size:20px';
                        estrellas_calificadas_1.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_2 = document.createElement('i');
                        estrellas_calificadas_2.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_2.style = 'font-size:20px';
                        estrellas_calificadas_2.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_3 = document.createElement('i');
                        estrellas_calificadas_3.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_3.style = 'font-size:20px';
                        estrellas_calificadas_3.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_4 = document.createElement('i');
                        estrellas_calificadas_4.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_4.style = 'font-size:20px';
                        estrellas_calificadas_4.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_5 = document.createElement('i');
                        estrellas_calificadas_5.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_5.style = 'font-size:20px';
                        estrellas_calificadas_5.innerHTML = '<i class="fas fa-star"></i>';
                        break;
        
                    default:
                        break;
                }
            }

        };

        case 'Padre':
        let id_perfil = getUrl();
        for (let i = 0; i < info.length; i++) {
            if (info[i]['institucion_id'] == id_perfil) {
                Imagen.src = info[i]['institucion_imagen'];
                Nombre.innerHTML = info[i]['institucion_nombre'];
                Provincia.innerHTML = 'Provincia: ' + info[i]['institucion_provincia'];
                Canton.innerHTML = 'Cantón: ' + info[i]['institucion_canton'];
                Distrito.innerHTML = 'Distrito: ' + info[i]['institucion_distrito'];
                Direccion.innerHTML = 'Dirección exacta: ' + info[i]['institucion_direccion'];
                Nombre_inscrito.innerHTML = 'Nombre inscrito: ' + info[i]['institucion_nombre_inscrito'];
                Fundacion.innerHTML = 'Año de fundación: ' + info[i]['institucion_fundacion'];
                Generos.innerHTML = 'Distribución de géneros: ' + info[i]['institucion_generos'];
                Tipo.innerHTML = 'Tipo de centro educativo: ' + info[i]['institucion_tipo'];
                Cedula.innerHTML = 'Cédula jurídica del centro educativo: ' + info[i]['institucion_cedula'];
                Ideologia.innerHTML = 'Ideología del centro educativo: ' + info[i]['institucion_ideologia'];
                Referencia.innerHTML = 'Referencia histórica del centro educativo: ' + info[i]['institucion_referencia'];
                Numero.innerHTML = 'Número: ' + info[i]['institucion_telefono'];
                Fax.innerHTML = 'Fax: ' + info[i]['institucion_fax'];
                Web.innerHTML = 'Página web: ' + info[i]['institucion_sitio_web'];
                switch (estrellas_calificadas) {

                    case 0:
                    estrellas_calificadas_1 = document.createElement('i');
                    estrellas_calificadas_1.style = 'color:#3498db;font-size:45px;';
                    // estrellas_calificadas_1.style = 'font-size:20px';
                    estrellas_calificadas_1.innerHTML = '<i class="fa fa-star-o"></i>';
    
                    estrellas_calificadas_2 = document.createElement('i');
                    estrellas_calificadas_2.style = 'color:#3498db;font-size:45px;';
                    // estrellas_calificadas_2.style = 'font-size:20px';
                    estrellas_calificadas_2.innerHTML = '<i class="fa fa-star-o"></i>';
    
                    estrellas_calificadas_3 = document.createElement('i');
                    estrellas_calificadas_3.style = 'color:#3498db;font-size:45px;';
                    // estrellas_calificadas_3.style = 'font-size:20px';
                    estrellas_calificadas_3.innerHTML = '<i class="fa fa-star-o"></i>';
    
                    estrellas_calificadas_4 = document.createElement('i');
                    estrellas_calificadas_4.style = 'color:#3498db;font-size:45px;';
                    // estrellas_calificadas_4.style = 'font-size:20px';
                    estrellas_calificadas_4.innerHTML = '<i class="fa fa-star-o"></i>';
    
                    estrellas_calificadas_5 = document.createElement('i');
                    estrellas_calificadas_5.style = 'color:#3498db;font-size:45px;';
                    // estrellas_calificadas_5.style = 'font-size:20px';
                    estrellas_calificadas_5.innerHTML = '<i class="fa fa-star-o"></i>';
                    break;
    


                    case 1:
                        estrellas_calificadas_1 = document.createElement('i');
                        estrellas_calificadas_1.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_1.style = 'font-size:20px';
                        estrellas_calificadas_1.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_2 = document.createElement('i');
                        estrellas_calificadas_2.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_2.style = 'font-size:20px';
                        estrellas_calificadas_2.innerHTML = '<i class="fa fa-star-o"></i>';
        
                        estrellas_calificadas_3 = document.createElement('i');
                        estrellas_calificadas_3.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_3.style = 'font-size:20px';
                        estrellas_calificadas_3.innerHTML = '<i class="fa fa-star-o"></i>';
        
                        estrellas_calificadas_4 = document.createElement('i');
                        estrellas_calificadas_4.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_4.style = 'font-size:20px';
                        estrellas_calificadas_4.innerHTML = '<i class="fa fa-star-o"></i>';
        
                        estrellas_calificadas_5 = document.createElement('i');
                        estrellas_calificadas_5.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_5.style = 'font-size:20px';
                        estrellas_calificadas_5.innerHTML = '<i class="fa fa-star-o"></i>';
                        break;
        
                    case 2:
                        estrellas_calificadas_1 = document.createElement('i');
                        estrellas_calificadas_1.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_1.style = 'font-size:20px';
                        estrellas_calificadas_1.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_2 = document.createElement('i');
                        estrellas_calificadas_2.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_2.style = 'font-size:20px';
                        estrellas_calificadas_2.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_3 = document.createElement('i');
                        estrellas_calificadas_3.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_3.style = 'font-size:20px';
                        estrellas_calificadas_3.innerHTML = '<i class="fa fa-star-o"></i>';
        
                        estrellas_calificadas_4 = document.createElement('i');
                        estrellas_calificadas_4.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_4.style = 'font-size:20px';
                        estrellas_calificadas_4.innerHTML = '<i class="fa fa-star-o"></i>';
        
                        estrellas_calificadas_5 = document.createElement('i');
                        estrellas_calificadas_5.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_5.style = 'font-size:20px';
                        estrellas_calificadas_5.innerHTML = '<i class="fa fa-star-o"></i>';
                        break;
        
                    case 3:
                        estrellas_calificadas_1 = document.createElement('i');
                        estrellas_calificadas_1.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_1.style = 'font-size:20px';
                        estrellas_calificadas_1.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_2 = document.createElement('i');
                        estrellas_calificadas_2.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_2.style = 'font-size:20px';
                        estrellas_calificadas_2.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_3 = document.createElement('i');
                        estrellas_calificadas_3.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_3.style = 'font-size:20px';
                        estrellas_calificadas_3.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_4 = document.createElement('i');
                        estrellas_calificadas_4.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_4.style = 'font-size:20px';
                        estrellas_calificadas_4.innerHTML = '<i class="fa fa-star-o"></i>';
        
                        estrellas_calificadas_5 = document.createElement('i');
                        estrellas_calificadas_5.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_5.style = 'font-size:20px';
                        estrellas_calificadas_5.innerHTML = '<i class="fa fa-star-o"></i>';
                        break;
        
                    case 4:
                        estrellas_calificadas_1 = document.createElement('i');
                        estrellas_calificadas_1.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_1.style = 'font-size:20px';
                        estrellas_calificadas_1.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_2 = document.createElement('i');
                        estrellas_calificadas_2.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_2.style = 'font-size:20px';
                        estrellas_calificadas_2.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_3 = document.createElement('i');
                        estrellas_calificadas_3.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_3.style = 'font-size:20px';
                        estrellas_calificadas_3.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_4 = document.createElement('i');
                        estrellas_calificadas_4.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_4.style = 'font-size:20px';
                        estrellas_calificadas_4.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_5 = document.createElement('i');
                        estrellas_calificadas_5.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_5.style = 'font-size:20px';
                        estrellas_calificadas_5.innerHTML = '<i class="fa fa-star-o"></i>';
                        break;
        
                    case 5:
                        estrellas_calificadas_1 = document.createElement('i');
                        estrellas_calificadas_1.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_1.style = 'font-size:20px';
                        estrellas_calificadas_1.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_2 = document.createElement('i');
                        estrellas_calificadas_2.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_2.style = 'font-size:20px';
                        estrellas_calificadas_2.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_3 = document.createElement('i');
                        estrellas_calificadas_3.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_3.style = 'font-size:20px';
                        estrellas_calificadas_3.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_4 = document.createElement('i');
                        estrellas_calificadas_4.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_4.style = 'font-size:20px';
                        estrellas_calificadas_4.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_5 = document.createElement('i');
                        estrellas_calificadas_5.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_5.style = 'font-size:20px';
                        estrellas_calificadas_5.innerHTML = '<i class="fas fa-star"></i>';
                        break;
        
                    default:
                        break;
                }
            }

            
        };
        
        case 'Admin':
        
        for (let i = 0; i < info.length; i++) {
            let id_perfil = getUrl();
            if (info[i]['institucion_id'] == id_perfil) {
                Imagen.src = info[i]['institucion_imagen'];
                Nombre.innerHTML = info[i]['institucion_nombre'];
                Provincia.innerHTML = 'Provincia: ' + info[i]['institucion_provincia'];
                Canton.innerHTML = 'Cantón: ' + info[i]['institucion_canton'];
                Distrito.innerHTML = 'Distrito: ' + info[i]['institucion_distrito'];
                Direccion.innerHTML = 'Dirección exacta: ' + info[i]['institucion_direccion'];
                Nombre_inscrito.innerHTML = 'Nombre inscrito: ' + info[i]['institucion_nombre_inscrito'];
                Fundacion.innerHTML = 'Año de fundación: ' + info[i]['institucion_fundacion'];
                Generos.innerHTML = 'Distribución de géneros: ' + info[i]['institucion_generos'];
                Tipo.innerHTML = 'Tipo de centro educativo: ' + info[i]['institucion_tipo'];
                Cedula.innerHTML = 'Cédula jurídica del centro educativo: ' + info[i]['institucion_cedula'];
                Ideologia.innerHTML = 'Ideología del centro educativo: ' + info[i]['institucion_ideologia'];
                Referencia.innerHTML = 'Referencia histórica del centro educativo: ' + info[i]['institucion_referencia'];
                Numero.innerHTML = 'Número: ' + info[i]['institucion_telefono'];
                Fax.innerHTML = 'Fax: ' + info[i]['institucion_fax'];
                Web.innerHTML = 'Página web: ' + info[i]['institucion_sitio_web'];
                modificar_perfil.href=`actualizar_centro_educativo.html?id_institucion=`+info[i]['_id'];
                switch (estrellas_calificadas) {

                    case 0:
                    estrellas_calificadas_1 = document.createElement('i');
                    estrellas_calificadas_1.style = 'color:#3498db;font-size:45px;';
                    // estrellas_calificadas_1.style = 'font-size:20px';
                    estrellas_calificadas_1.innerHTML = '<i class="fa fa-star-o"></i>';
    
                    estrellas_calificadas_2 = document.createElement('i');
                    estrellas_calificadas_2.style = 'color:#3498db;font-size:45px;';
                    // estrellas_calificadas_2.style = 'font-size:20px';
                    estrellas_calificadas_2.innerHTML = '<i class="fa fa-star-o"></i>';
    
                    estrellas_calificadas_3 = document.createElement('i');
                    estrellas_calificadas_3.style = 'color:#3498db;font-size:45px;';
                    // estrellas_calificadas_3.style = 'font-size:20px';
                    estrellas_calificadas_3.innerHTML = '<i class="fa fa-star-o"></i>';
    
                    estrellas_calificadas_4 = document.createElement('i');
                    estrellas_calificadas_4.style = 'color:#3498db;font-size:45px;';
                    // estrellas_calificadas_4.style = 'font-size:20px';
                    estrellas_calificadas_4.innerHTML = '<i class="fa fa-star-o"></i>';
    
                    estrellas_calificadas_5 = document.createElement('i');
                    estrellas_calificadas_5.style = 'color:#3498db;font-size:45px;';
                    // estrellas_calificadas_5.style = 'font-size:20px';
                    estrellas_calificadas_5.innerHTML = '<i class="fa fa-star-o"></i>';
                    break;
    


                    case 1:
                        estrellas_calificadas_1 = document.createElement('i');
                        estrellas_calificadas_1.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_1.style = 'font-size:20px';
                        estrellas_calificadas_1.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_2 = document.createElement('i');
                        estrellas_calificadas_2.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_2.style = 'font-size:20px';
                        estrellas_calificadas_2.innerHTML = '<i class="fa fa-star-o"></i>';
        
                        estrellas_calificadas_3 = document.createElement('i');
                        estrellas_calificadas_3.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_3.style = 'font-size:20px';
                        estrellas_calificadas_3.innerHTML = '<i class="fa fa-star-o"></i>';
        
                        estrellas_calificadas_4 = document.createElement('i');
                        estrellas_calificadas_4.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_4.style = 'font-size:20px';
                        estrellas_calificadas_4.innerHTML = '<i class="fa fa-star-o"></i>';
        
                        estrellas_calificadas_5 = document.createElement('i');
                        estrellas_calificadas_5.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_5.style = 'font-size:20px';
                        estrellas_calificadas_5.innerHTML = '<i class="fa fa-star-o"></i>';
                        break;
        
                    case 2:
                        estrellas_calificadas_1 = document.createElement('i');
                        estrellas_calificadas_1.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_1.style = 'font-size:20px';
                        estrellas_calificadas_1.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_2 = document.createElement('i');
                        estrellas_calificadas_2.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_2.style = 'font-size:20px';
                        estrellas_calificadas_2.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_3 = document.createElement('i');
                        estrellas_calificadas_3.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_3.style = 'font-size:20px';
                        estrellas_calificadas_3.innerHTML = '<i class="fa fa-star-o"></i>';
        
                        estrellas_calificadas_4 = document.createElement('i');
                        estrellas_calificadas_4.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_4.style = 'font-size:20px';
                        estrellas_calificadas_4.innerHTML = '<i class="fa fa-star-o"></i>';
        
                        estrellas_calificadas_5 = document.createElement('i');
                        estrellas_calificadas_5.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_5.style = 'font-size:20px';
                        estrellas_calificadas_5.innerHTML = '<i class="fa fa-star-o"></i>';
                        break;
        
                    case 3:
                        estrellas_calificadas_1 = document.createElement('i');
                        estrellas_calificadas_1.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_1.style = 'font-size:20px';
                        estrellas_calificadas_1.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_2 = document.createElement('i');
                        estrellas_calificadas_2.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_2.style = 'font-size:20px';
                        estrellas_calificadas_2.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_3 = document.createElement('i');
                        estrellas_calificadas_3.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_3.style = 'font-size:20px';
                        estrellas_calificadas_3.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_4 = document.createElement('i');
                        estrellas_calificadas_4.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_4.style = 'font-size:20px';
                        estrellas_calificadas_4.innerHTML = '<i class="fa fa-star-o"></i>';
        
                        estrellas_calificadas_5 = document.createElement('i');
                        estrellas_calificadas_5.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_5.style = 'font-size:20px';
                        estrellas_calificadas_5.innerHTML = '<i class="fa fa-star-o"></i>';
                        break;
        
                    case 4:
                        estrellas_calificadas_1 = document.createElement('i');
                        estrellas_calificadas_1.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_1.style = 'font-size:20px';
                        estrellas_calificadas_1.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_2 = document.createElement('i');
                        estrellas_calificadas_2.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_2.style = 'font-size:20px';
                        estrellas_calificadas_2.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_3 = document.createElement('i');
                        estrellas_calificadas_3.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_3.style = 'font-size:20px';
                        estrellas_calificadas_3.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_4 = document.createElement('i');
                        estrellas_calificadas_4.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_4.style = 'font-size:20px';
                        estrellas_calificadas_4.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_5 = document.createElement('i');
                        estrellas_calificadas_5.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_5.style = 'font-size:20px';
                        estrellas_calificadas_5.innerHTML = '<i class="fa fa-star-o"></i>';
                        break;
        
                    case 5:
                        estrellas_calificadas_1 = document.createElement('i');
                        estrellas_calificadas_1.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_1.style = 'font-size:20px';
                        estrellas_calificadas_1.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_2 = document.createElement('i');
                        estrellas_calificadas_2.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_2.style = 'font-size:20px';
                        estrellas_calificadas_2.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_3 = document.createElement('i');
                        estrellas_calificadas_3.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_3.style = 'font-size:20px';
                        estrellas_calificadas_3.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_4 = document.createElement('i');
                        estrellas_calificadas_4.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_4.style = 'font-size:20px';
                        estrellas_calificadas_4.innerHTML = '<i class="fas fa-star"></i>';
        
                        estrellas_calificadas_5 = document.createElement('i');
                        estrellas_calificadas_5.style = 'color:#3498db;font-size:45px;';
                        // estrellas_calificadas_5.style = 'font-size:20px';
                        estrellas_calificadas_5.innerHTML = '<i class="fas fa-star"></i>';
                        break;
        
                    default:
                        break;
                }
            }

        };
        top_top_info.appendChild(modificar_perfil);
        contenedor_estrellas.appendChild(estrellas_calificadas_1);
        contenedor_estrellas.appendChild(estrellas_calificadas_2);
        contenedor_estrellas.appendChild(estrellas_calificadas_3);
        contenedor_estrellas.appendChild(estrellas_calificadas_4);
        contenedor_estrellas.appendChild(estrellas_calificadas_5);
    }






// let mostrar_datos = () => {

//    /*   let padres = listar_padre();*/

//     
//     let id = sessionStorage.getItem('id_usuario');
//     let id_perfil_institucion = getUrl();
//     const botones = document.querySelectorAll('#listas_de_institucion button');

//     switch (tipo_usuario) {
//         case "Padre":
//         for (let i = 0; i < instituciones.length; i++) {

//             if(instituciones[i]['institucion_id'] == id_perfil_institucion){

//                 section_usuario.innerHTML = '';

//                 let contenido = document.createElement('div');
//                 contenido.classList.add('contenido');

//                     /*Imagen de la institucion*/
//                     /**Parte Superior    */
//                     let institucion_nombre = document.createElement('h1');
//                     institucion_nombre.innerHTML = instituciones[i]['institucion_nombre'];
//                     institucion_nombre.classList.add('institucion_nombre');

//                     let institucion_nombre_inscrito = document.createElement('h3');
//                     institucion_nombre_inscrito.innerHTML = instituciones[i]['institucion_nombre_inscrito'];

//                     let info_div = document.createElement('div');
//                     info_div.classList.add('info_div_container');

//                     let institucion_imagen_div = document.createElement('div');
//                     institucion_imagen_div.classList.add('institucion_imagen_div');

//                     let institucion_imagen = document.createElement('img');
//                     institucion_imagen.src = instituciones[i]['institucion_imagen'];

//                     let info_div_tipo = document.createElement('div');
//                     info_div_tipo.classList.add('info_div_tipo');

//                     let info_div_idioma = document.createElement('div');
//                     info_div_idioma.classList.add('info_div_idioma');

//                     let info_div_genero = document.createElement('div');
//                     info_div_genero.classList.add('info_div_genero');

//                     let info_div_provincia = document.createElement('div');
//                     info_div_provincia.classList.add('info_div_provincia');


//                     /**Divs con las imagenes */

//                     let institucion_tipo = document.createElement('h2');
//                     institucion_tipo.innerHTML = instituciones[i]['institucion_tipo'];
//                     institucion_tipo.classList.add('info_div');

//                     let institucion_idiomas = document.createElement('h2');
//                     institucion_idiomas.innerHTML = instituciones[i]['institucion_idiomas'];
//                     institucion_idiomas.classList.add('info_div');

//                     let institucion_generos = document.createElement('h2');
//                     institucion_generos.innerHTML = instituciones[i]['institucion_generos'];
//                     institucion_generos.classList.add('info_div');

//                     let institucion_provincia = document.createElement('h2');
//                     institucion_provincia.innerHTML = instituciones[i]['institucion_provincia'];
//                     institucion_provincia.classList.add('info_div');

//                     let div_info_izquierda = document.createElement('div');
//                     div_info_izquierda.classList.add('div_info_izquierda');

//                     let div_info_derecha = document.createElement('div');
//                     div_info_derecha.classList.add('div_info_derecha');



//                     let Niveles = document.createElement('h3');
//                     Niveles.innerHTML = "Niveles"
//                     Niveles.classList.add('label')

//                     let Bachillerato = document.createElement('h3');
//                     Bachillerato.innerHTML = "Bachillerato Internacional"
//                     Bachillerato.classList.add('label')

//                     let Ideologia = document.createElement('h3');
//                     Ideologia.innerHTML = "Ideología"
//                     Ideologia.classList.add('label')

//                     let fundacion = document.createElement('h3');
//                     fundacion.innerHTML = "Fundación"
//                     fundacion.classList.add('label')

//                     let referencia = document.createElement('h3');
//                     referencia.innerHTML = "Referencia"
//                     referencia.classList.add('label')

//                     /***** */

//                     let Canton = document.createElement('h3');
//                     Canton.innerHTML = "Cantón"
//                     Canton.classList.add('label')

//                     let Distrito = document.createElement('h3');
//                     Distrito.innerHTML = "Distrito"
//                     Distrito.classList.add('label')

//                     let Direccion = document.createElement('h3');
//                     Direccion.innerHTML = "Dirección"
//                     Direccion.classList.add('label')

//                     let Sitio_web = document.createElement('h3');
//                     Sitio_web.innerHTML = "Sitio web"
//                     Sitio_web.classList.add('label')

//                     let Fax = document.createElement('h3');
//                     Fax.innerHTML = "Fax"
//                     Fax.classList.add('label')



//                     let institucion_niveles = document.createElement('h3');
//                     institucion_niveles.innerHTML = instituciones[i]['institucion_niveles'];
//                     institucion_niveles.classList.add('info')

//                     let institucion_bachillerato_internacional = document.createElement('h3');
//                     institucion_bachillerato_internacional.innerHTML = instituciones[i]['institucion_bachillerato_internacional'];
//                     institucion_bachillerato_internacional.classList.add('info')

//                     let institucion_ideologia = document.createElement('h3');
//                     institucion_ideologia.innerHTML = instituciones[i]['institucion_ideologia'];
//                     institucion_ideologia.classList.add('info')

//                     let institucion_fundacion = document.createElement('h3');
//                     institucion_fundacion.innerHTML = instituciones[i]['institucion_fundacion'];
//                     institucion_fundacion.classList.add('info')

//                     let institucion_referencia = document.createElement('h3');
//                     institucion_referencia.innerHTML = instituciones[i]['institucion_referencia'];
//                     institucion_referencia.classList.add('info_referencia')


//                     let institucion_canton = document.createElement('h3');
//                     institucion_canton.innerHTML = instituciones[i]['institucion_canton'];
//                     institucion_canton.classList.add('info')

//                     let institucion_distrito = document.createElement('h3');
//                     institucion_distrito.innerHTML = instituciones[i]['institucion_distrito'];
//                     institucion_distrito.classList.add('info')

//                     let institucion_direccion = document.createElement('h3');
//                     institucion_direccion.innerHTML = instituciones[i]['institucion_direccion'];
//                     institucion_direccion.classList.add('info_direccion')


//                     let institucion_sitio_web = document.createElement('h3');
//                     institucion_sitio_web.innerHTML = instituciones[i]['institucion_sitio_web'];
//                     institucion_sitio_web.classList.add('info_direccion_web')

//                     let institucion_fax = document.createElement('h3');
//                     institucion_fax.innerHTML = instituciones[i]['institucion_fax'];
//                     institucion_fax.classList.add('info')

//                     contenido.appendChild(institucion_imagen_div);
//                     institucion_imagen_div.appendChild(institucion_imagen);
//                     contenido.appendChild(institucion_nombre);
//                     contenido.appendChild(info_div);
//                     info_div.appendChild(info_div_tipo);
//                     info_div.appendChild(info_div_idioma);
//                     info_div.appendChild(info_div_genero);
//                     info_div.appendChild(info_div_provincia);
//                     info_div.appendChild(institucion_tipo);
//                     info_div.appendChild(institucion_idiomas);
//                     info_div.appendChild(institucion_generos);
//                     info_div.appendChild(institucion_provincia);
//                     div_info_izquierda.appendChild(Niveles);
//                     div_info_izquierda.appendChild(institucion_niveles);
//                     div_info_izquierda.appendChild(Bachillerato);
//                     div_info_izquierda.appendChild(institucion_bachillerato_internacional);
//                     div_info_izquierda.appendChild(Ideologia);
//                     div_info_izquierda.appendChild(institucion_ideologia);
//                     div_info_izquierda.appendChild(fundacion);
//                     div_info_izquierda.appendChild(institucion_fundacion);
//                     div_info_izquierda.appendChild(referencia);
//                     div_info_izquierda.appendChild(institucion_referencia);
//                     div_info_derecha.appendChild(div_info_izquierda);
//                     div_info_derecha.appendChild(Canton);
//                     div_info_derecha.appendChild(institucion_canton);
//                     div_info_derecha.appendChild(Distrito);
//                     div_info_derecha.appendChild(institucion_distrito);
//                     div_info_derecha.appendChild(Direccion);
//                     div_info_derecha.appendChild(institucion_direccion);
//                     div_info_derecha.appendChild(Sitio_web);
//                     div_info_derecha.appendChild(institucion_sitio_web);
//                     div_info_derecha.appendChild(Fax);
//                     div_info_derecha.appendChild(institucion_fax);
//                     contenido.appendChild(div_info_izquierda);
//                     contenido.appendChild(div_info_derecha);
//                     section_usuario.appendChild(contenido);
//                     break;
//             }else{
//             }
//             }
//         break;
//         case "Institucion":
//             for (let i = 0; i < instituciones.length; i++) {

//             if(instituciones[i]['institucion_id'] == id){

//                 section_usuario.innerHTML = '';

//                 let contenido = document.createElement('div');
//                 contenido.classList.add('contenido');

//                     /*Imagen de la institucion*/
//                     /**Parte Superior    */
//                     let institucion_nombre = document.createElement('h1');
//                     institucion_nombre.innerHTML = instituciones[i]['institucion_nombre'];
//                     institucion_nombre.classList.add('institucion_nombre');

//                     let institucion_nombre_inscrito = document.createElement('h3');
//                     institucion_nombre_inscrito.innerHTML = instituciones[i]['institucion_nombre_inscrito'];

//                     let info_div = document.createElement('div');
//                     info_div.classList.add('info_div_container');

//                     let institucion_imagen_div = document.createElement('div');
//                     institucion_imagen_div.classList.add('institucion_imagen_div');

//                     let institucion_imagen = document.createElement('img');
//                     institucion_imagen.src = instituciones[i]['institucion_imagen'];

//                     let info_div_tipo = document.createElement('div');
//                     info_div_tipo.classList.add('info_div_tipo');

//                     let info_div_idioma = document.createElement('div');
//                     info_div_idioma.classList.add('info_div_idioma');

//                     let info_div_genero = document.createElement('div');
//                     info_div_genero.classList.add('info_div_genero');

//                     let info_div_provincia = document.createElement('div');
//                     info_div_provincia.classList.add('info_div_provincia');


//                     /**Divs con las imagenes */

//                     let institucion_tipo = document.createElement('h2');
//                     institucion_tipo.innerHTML = instituciones[i]['institucion_tipo'];
//                     institucion_tipo.classList.add('info_div');

//                     let institucion_idiomas = document.createElement('h2');
//                     institucion_idiomas.innerHTML = instituciones[i]['institucion_idiomas'];
//                     institucion_idiomas.classList.add('info_div');

//                     let institucion_generos = document.createElement('h2');
//                     institucion_generos.innerHTML = instituciones[i]['institucion_generos'];
//                     institucion_generos.classList.add('info_div');

//                     let institucion_provincia = document.createElement('h2');
//                     institucion_provincia.innerHTML = instituciones[i]['institucion_provincia'];
//                     institucion_provincia.classList.add('info_div');

//                     let div_info_izquierda = document.createElement('div');
//                     div_info_izquierda.classList.add('div_info_izquierda');

//                     let div_info_derecha = document.createElement('div');
//                     div_info_derecha.classList.add('div_info_derecha');



//                     let Niveles = document.createElement('h3');
//                     Niveles.innerHTML = "Niveles"
//                     Niveles.classList.add('label')

//                     let Bachillerato = document.createElement('h3');
//                     Bachillerato.innerHTML = "Bachillerato Internacional"
//                     Bachillerato.classList.add('label')

//                     let Ideologia = document.createElement('h3');
//                     Ideologia.innerHTML = "Ideología"
//                     Ideologia.classList.add('label')

//                     let fundacion = document.createElement('h3');
//                     fundacion.innerHTML = "Fundación"
//                     fundacion.classList.add('label')

//                     let referencia = document.createElement('h3');
//                     referencia.innerHTML = "Referencia"
//                     referencia.classList.add('label')

//                     /***** */

//                     let Canton = document.createElement('h3');
//                     Canton.innerHTML = "Cantón"
//                     Canton.classList.add('label')

//                     let Distrito = document.createElement('h3');
//                     Distrito.innerHTML = "Distrito"
//                     Distrito.classList.add('label')

//                     let Direccion = document.createElement('h3');
//                     Direccion.innerHTML = "Dirección"
//                     Direccion.classList.add('label')

//                     let Sitio_web = document.createElement('h3');
//                     Sitio_web.innerHTML = "Sitio web"
//                     Sitio_web.classList.add('label')

//                     let Fax = document.createElement('h3');
//                     Fax.innerHTML = "Fax"
//                     Fax.classList.add('label')



//                     let institucion_niveles = document.createElement('h3');
//                     institucion_niveles.innerHTML = instituciones[i]['institucion_niveles'];
//                     institucion_niveles.classList.add('info')

//                     let institucion_bachillerato_internacional = document.createElement('h3');
//                     institucion_bachillerato_internacional.innerHTML = instituciones[i]['institucion_bachillerato_internacional'];
//                     institucion_bachillerato_internacional.classList.add('info')

//                     let institucion_ideologia = document.createElement('h3');
//                     institucion_ideologia.innerHTML = instituciones[i]['institucion_ideologia'];
//                     institucion_ideologia.classList.add('info')

//                     let institucion_fundacion = document.createElement('h3');
//                     institucion_fundacion.innerHTML = instituciones[i]['institucion_fundacion'];
//                     institucion_fundacion.classList.add('info')

//                     let institucion_referencia = document.createElement('h3');
//                     institucion_referencia.innerHTML = instituciones[i]['institucion_referencia'];
//                     institucion_referencia.classList.add('info_referencia')


//                     let institucion_canton = document.createElement('h3');
//                     institucion_canton.innerHTML = instituciones[i]['institucion_canton'];
//                     institucion_canton.classList.add('info')

//                     let institucion_distrito = document.createElement('h3');
//                     institucion_distrito.innerHTML = instituciones[i]['institucion_distrito'];
//                     institucion_distrito.classList.add('info')

//                     let institucion_direccion = document.createElement('h3');
//                     institucion_direccion.innerHTML = instituciones[i]['institucion_direccion'];
//                     institucion_direccion.classList.add('info_direccion')


//                     let institucion_sitio_web = document.createElement('h3');
//                     institucion_sitio_web.innerHTML = instituciones[i]['institucion_sitio_web'];
//                     institucion_sitio_web.classList.add('info_direccion_web')

//                     let institucion_fax = document.createElement('h3');
//                     institucion_fax.innerHTML = instituciones[i]['institucion_fax'];
//                     institucion_fax.classList.add('info')

//                     contenido.appendChild(institucion_imagen_div);
//                     institucion_imagen_div.appendChild(institucion_imagen);
//                     contenido.appendChild(institucion_nombre);
//                     contenido.appendChild(info_div);
//                     info_div.appendChild(info_div_tipo);
//                     info_div.appendChild(info_div_idioma);
//                     info_div.appendChild(info_div_genero);
//                     info_div.appendChild(info_div_provincia);
//                     info_div.appendChild(institucion_tipo);
//                     info_div.appendChild(institucion_idiomas);
//                     info_div.appendChild(institucion_generos);
//                     info_div.appendChild(institucion_provincia);
//                     div_info_izquierda.appendChild(Niveles);
//                     div_info_izquierda.appendChild(institucion_niveles);
//                     div_info_izquierda.appendChild(Bachillerato);
//                     div_info_izquierda.appendChild(institucion_bachillerato_internacional);
//                     div_info_izquierda.appendChild(Ideologia);
//                     div_info_izquierda.appendChild(institucion_ideologia);
//                     div_info_izquierda.appendChild(fundacion);
//                     div_info_izquierda.appendChild(institucion_fundacion);
//                     div_info_izquierda.appendChild(referencia);
//                     div_info_izquierda.appendChild(institucion_referencia);
//                     div_info_derecha.appendChild(div_info_izquierda);
//                     div_info_derecha.appendChild(Canton);
//                     div_info_derecha.appendChild(institucion_canton);
//                     div_info_derecha.appendChild(Distrito);
//                     div_info_derecha.appendChild(institucion_distrito);
//                     div_info_derecha.appendChild(Direccion);
//                     div_info_derecha.appendChild(institucion_direccion);
//                     div_info_derecha.appendChild(Sitio_web);
//                     div_info_derecha.appendChild(institucion_sitio_web);
//                     div_info_derecha.appendChild(Fax);
//                     div_info_derecha.appendChild(institucion_fax);
//                     contenido.appendChild(div_info_izquierda);
//                     contenido.appendChild(div_info_derecha);
//                     section_usuario.appendChild(contenido);



//                     break;
//             }else{
//             }
//             }
//         break;

//     }

//     switch(tipo_usuario){
//         case 'Padre':
//         botones[0].classList.add('ocultar');/**Registrar Lista Utiles */
//         botones[1].classList.add('mostrar');/**Visualizar Lista Utiles */
//         botones[2].classList.add('ocultar');/**Registrar Preguntas*/
//         botones[3].classList.add('mostrar');/**Listar Preguntas*/
//         botones[4].classList.add('ocultar');/**Registrar Actividades*/
//         botones[5].classList.add('mostrar');/**Listar Actividades*/
//         break;

//         case 'Institucion':
//         botones[0].classList.add('mostrar');/**Registrar Lista Utiles */
//         botones[1].classList.add('mostrar');/**Visualizar Lista Utiles */
//         botones[2].classList.add('mostrar');/**Registrar Preguntas*/
//         botones[3].classList.add('mostrar');/**Listar Preguntas*/
//         botones[4].classList.add('mostrar');/**Registrar Actividades*/
//         botones[5].classList.add('mostrar');/**Listar Actividades*/
//         break;
//     }

// };


// mostrar_datos();