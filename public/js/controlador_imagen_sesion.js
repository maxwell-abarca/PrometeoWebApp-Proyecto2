$(document).ready(
    function user_img(){
        let user_img = document.querySelector('.user_img');
        let tipo_cliente = sessionStorage.getItem('tipo_usuario');
        let id_cliente = sessionStorage.getItem('id_usuario');
        switch(tipo_cliente){
        case 'Institucion':
    
        let img_src = listar_institucion();
    
            
        for (let x = 0; x < img_src.length; x++) {
    
            if (img_src[x]['institucion_id']==id_cliente) {
                user_img.src = img_src[x]['institucion_imagen'];
                user_img.classList.add('estilo_imagen');   
                break;
            }
            
        }
        
    } 
           
    });