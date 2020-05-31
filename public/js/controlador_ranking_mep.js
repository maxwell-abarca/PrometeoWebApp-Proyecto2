'use strict';

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

//  const slt_puesto1 = document.querySelector('#institucion_1');
//  const slt_puesto2 = document.querySelector('#institucion_2');
//  const slt_puesto3 = document.querySelector('#institucion_3');
//  const slt_puesto4 = document.querySelector('#institucion_4');
//  const slt_puesto5 = document.querySelector('#institucion_5');
//  const slt_puesto6 = document.querySelector('#institucion_6');
//  const slt_puesto7 = document.querySelector('#institucion_7');
//  const slt_puesto8 = document.querySelector('#institucion_8');
    //  const slt_puesto9 = document.querySelector('#institucion_9');
    //  const slt_puesto10 = document.querySelector('#institucion_10');
    const boton_registrar = document.querySelector('#btn_registrar');
    
    function posicion_1(){
        let posicion_1 = $( "#institucion_1 option:selected" ).text();
        console.log(posicion_1);
        return posicion_1
    }
    function posicion_2(){
        let posicion_2 = $( "#institucion_2 option:selected" ).text();
        console.log(posicion_2);
        return posicion_2
    }
    function posicion_3(){
        let posicion_3 = $( "#institucion_3 option:selected" ).text();
        return posicion_3
    }
    function posicion_4(){
        let posicion_4 = $( "#institucion_4 option:selected" ).text();
        return posicion_4
    }
    function posicion_5(){
        let posicion_5 = $( "#institucion_5 option:selected" ).text();
        return posicion_5
    }
    function posicion_6(){
        let posicion_6 = $( "#institucion_6 option:selected" ).text();
        return posicion_6
    }
    function posicion_7(){
        let posicion_7 = $( "#institucion_7 option:selected" ).text();
        return posicion_7
    }
    function posicion_8(){
        let posicion_8 = $( "#institucion_8 option:selected" ).text();
        console.log(posicion_8);
        return posicion_8
    }
    function posicion_9(){
        let posicion_9 = $( "#institucion_9 option:selected" ).text();
        return posicion_9
    }
    function posicion_10(){
        let posicion_10 = $( "#institucion_10 option:selected" ).text();
        return posicion_10
    }
//  let validacion = () => {
//      let error = false;
//      if (slt_puesto1.value == '') {
//          error = true;
//          slt_puesto1.classList.add('error_input');
//      } else {
//          slt_puesto1.classList.remove('error_input');
//      }

//      if (slt_puesto2.value == '') {
//          error = true;
//          slt_puesto2.classList.add('error_input');
//      } else {
//          slt_puesto2.classList.remove('error_input');
//      }

//      if (slt_puesto3.value == '') {
//          error = true;
//          slt_puesto3.classList.add('error_input');
//      } else {
//          slt_puesto3.classList.remove('error_input');
//      }

//      if (slt_puesto4.value == '') {
//          error = true;
//          slt_puesto4.classList.add('error_input');
//      } else {
//          slt_puesto4.classList.remove('error_input');
//      }

//      if (slt_puesto5.value == '') {
//          error = true;
//          slt_puesto5.classList.add('error_input');
//      } else {
//          slt_puesto5.classList.remove('error_input');
//      }

//      if (slt_puesto6.value == '') {
//          error = true;
//          slt_puesto6.classList.add('error_input');
//      } else {
//          slt_puesto6.classList.remove('error_input');
//      }

//      if (slt_puesto7.value == '') {
//          error = true;
//          slt_puesto7.classList.add('error_input');
//      } else {
//          slt_puesto7.classList.remove('error_input');
//      }

//      if (slt_puesto8.value == '') {
//          error = true;
//          slt_puesto8.classList.add('error_input');
//      } else {
//          slt_puesto8.classList.remove('error_input');
//      }

//      if (slt_puesto9.value == '') {
//          error = true;
//          slt_puesto9.classList.add('error_input');
//      } else {
//          slt_puesto9.classList.remove('error_input');
//      }

//      if (slt_puesto10.value == '') {
//          error = true;
//          slt_puesto10.classList.add('error_input');
//      } else {
//          slt_puesto10.classList.remove('error_input');
//      }

//      return error;
//  };

 let obtener_datos = () => {

       let puesto1 = posicion_1();
       let puesto2 = posicion_2();
       let puesto3 = posicion_3();
       let puesto4 = posicion_4();
       let puesto5 = posicion_5();
       let puesto6 = posicion_6();
       let puesto7 = posicion_7();
       let puesto8 = posicion_8();
       let puesto9 = posicion_9();
       let puesto10 = posicion_10();

       registrar_ranking_mep(puesto1, puesto2, puesto3, puesto4, puesto5, puesto6, puesto7, puesto8, puesto9, puesto10);


 };



boton_registrar.addEventListener('click',obtener_datos);