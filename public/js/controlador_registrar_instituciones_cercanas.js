'use strict';

 const  slt_institucion1= document.querySelector('#institucion_1');
 const slt_institucion2 = document.querySelector('#institucion_2');
 const slt_institucion3 = document.querySelector('#institucion_3');
 const slt_institucion4 = document.querySelector('#institucion_4');
 const slt_institucion5 = document.querySelector('#institucion_5');
 const slt_institucion6 = document.querySelector('#institucion_6');
 const slt_institucion7 = document.querySelector('#institucion_7');
 const slt_institucion8 = document.querySelector('#institucion_8');
const slt_institucion9 = document.querySelector('#institucion_9');
const slt_institucion10 = document.querySelector('#institucion_10');
const id_usuario=sessionStorage.getItem('id_usuario');


 let validacion = () => {
     let error = false;
     if (slt_institucion1.value == '') {
         error = true;
         slt_institucion1.classList.add('error_input');
     } else {
         slt_institucion1.classList.remove('error_input');
     }

     if (slt_institucion2.value == '') {
         error = true;
         slt_institucion2.classList.add('error_input');
     } else {
         slt_institucion2.classList.remove('error_input');
     }

     if (slt_institucion3.value == '') {
         error = true;
         slt_institucion3.classList.add('error_input');
     } else {
         slt_institucion3.classList.remove('error_input');
     }

     if (slt_institucion4.value == '') {
         error = true;
         slt_institucion4.classList.add('error_input');
     } else {
         slt_institucion4.classList.remove('error_input');
     }

     if (slt_institucion5.value == '') {
         error = true;
         slt_institucion5.classList.add('error_input');
     } else {
         slt_institucion5.classList.remove('error_input');
     }

     if (slt_institucion6.value == '') {
         error = true;
         slt_institucion6.classList.add('error_input');
     } else {
         slt_institucion6.classList.remove('error_input');
     }

     if (slt_institucion7.value == '') {
         error = true;
         slt_institucion7.classList.add('error_input');
     } else {
         slt_institucion7.classList.remove('error_input');
     }

     if (slt_institucion8.value == '') {
         error = true;
         slt_institucion8.classList.add('error_input');
     } else {
         slt_institucion8.classList.remove('error_input');
     }

     if (slt_institucion9.value == '') {
         error = true;
         slt_institucion9.classList.add('error_input');
     } else {
         slt_institucion9.classList.remove('error_input');
     }

     if (slt_institucion10.value == '') {
         error = true;
         slt_institucion10.classList.add('error_input');
     } else {
         slt_institucion10.classList.remove('error_input');
     }

     return error;
 };


function cargar_instituciones()
{
    let institucion = listar_institucion();
    let array = []

    for (let i = 0; i < institucion.length; i++) {

        array[i] = institucion[i]['institucion_nombre'];
    }
    for(let i in array)
    { 
        document.getElementById("institucion_1").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>";
        document.getElementById("institucion_2").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 
        document.getElementById("institucion_3").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 
        document.getElementById("institucion_4").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 
        document.getElementById("institucion_5").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 
        document.getElementById("institucion_6").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 
        document.getElementById("institucion_7").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 
        document.getElementById("institucion_8").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 
        document.getElementById("institucion_9").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 
        document.getElementById("institucion_10").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>";  

    }
};

    const boton_registrar = document.querySelector('#btn_registrar');
    
    function institucion_1(){
        let institucion_1 = $( "#institucion_1 option:selected" ).text();
        console.log(institucion_1);
        return institucion_1
    }
    function institucion_2(){
        let institucion_2 = $( "#institucion_2 option:selected" ).text();
        console.log(institucion_2);
        return institucion_2
    }
    function institucion_3(){
        let institucion_3 = $( "#institucion_3 option:selected" ).text();
        return institucion_3
    }
    function institucion_4(){
        let institucion_4 = $( "#institucion_4 option:selected" ).text();
        return institucion_4
    }
    function institucion_5(){
        let institucion_5 = $( "#institucion_5 option:selected" ).text();
        return institucion_5
    }
    function institucion_6(){
        let institucion_6 = $( "#institucion_6 option:selected" ).text();
        return institucion_6
    }
    function institucion_7(){
        let institucion_7 = $( "#institucion_7 option:selected" ).text();
        return institucion_7
    }
    function institucion_8(){
        let institucion_8 = $( "#institucion_8 option:selected" ).text();
        console.log(institucion_8);
        return institucion_8
    }
    function institucion_9(){
        let institucion_9 = $( "#institucion_9 option:selected" ).text();
        return institucion_9
    }
    function institucion_10(){
        let institucion_10 = $( "#institucion_10 option:selected" ).text();
        return institucion_10
    }


 let obtener_datos = () => {
    if (validacion()==false) {
        let id_padre=id_usuario;
       let lugar_cercano1 = institucion_1();
       let lugar_cercano2 = institucion_2();
       let lugar_cercano3 = institucion_3();
       let lugar_cercano4 = institucion_4();
       let lugar_cercano5 = institucion_5();
       let lugar_cercano6 = institucion_6();
       let lugar_cercano7 = institucion_7();
       let lugar_cercano8 = institucion_8();
       let lugar_cercano9 = institucion_9();
       let lugar_cercano10 = institucion_10();

       registrar_instituciones_cercanas(lugar_cercano1, lugar_cercano2, lugar_cercano3, lugar_cercano4, lugar_cercano5, lugar_cercano6, lugar_cercano7, lugar_cercano8, lugar_cercano9, lugar_cercano10, id_padre);

    } else {
        swal.fire({
            type:'warning',
            title: 'Los centros educativos no fueron registrados.',
            text: 'Por favor verifique los campos que están resaltados.'
        });
    }
 };


boton_registrar.addEventListener('click',obtener_datos);
$(boton_registrar).on('click',function () {
    if (validacion()==true) {
        slt_institucion1.value;
         slt_institucion2.value;
         slt_institucion3.value; 
         slt_institucion4.value; 
         slt_institucion5.value; 
         slt_institucion6.value;
         slt_institucion7.value; 
         slt_institucion8.value;
        slt_institucion9.value; 
        slt_institucion10.value; 
        
    }else{
        $(slt_institucion1).val('');
        $(slt_institucion2).val('');
        $(slt_institucion3).val('');
        $(slt_institucion4).val('');
        $(slt_institucion5).val('');
        $(slt_institucion6).val('');
        $(slt_institucion7).val('');
        $(slt_institucion8).val('');
        $(slt_institucion9).val('');
        $(slt_institucion10).val('');
       
    }
  });