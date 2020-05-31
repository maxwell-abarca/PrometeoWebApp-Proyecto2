'use strict';

const textarea_reglamento=document.querySelector('#txt_reglamento');
const textarea_proceso_matricula=document.querySelector('#txt_proceso_matricula');
const textarea_sistema_evaluacion=document.querySelector('#txt_sistema_evaluacion');
const textarea_recomendaciones=document.querySelector('#txt_recomendaciones')
const textarea_areas_informativas=document.querySelector('#txt_areas_informativas');
const textarea_seccion_ayuda=document.querySelector('#txt_seccion_ayuda');
const textarea_talleres_adicionales=document.querySelector('#txt_talleres_adicionales');
const textarea_deportes=document.querySelector('#txt_deportes');
const textarea_informacion_adicional=document.querySelector('#txt_informacion_adicional');
const boton_aceptar=document.querySelector('#btn_aceptar');
const id_usuario=sessionStorage.getItem('id_usuario');

let validacion=()=>{
    let error=false;

    if (textarea_reglamento.value=='') {
        error=true;
        textarea_reglamento.classList.add('error_input');
    } else {
        textarea_reglamento.classList.remove('error_input');
    }

    if (textarea_proceso_matricula.value=='') {
        error=true;
        textarea_proceso_matricula.classList.add('error_input');
    } else {
        textarea_proceso_matricula.classList.remove('error_input');
    }

    if (textarea_sistema_evaluacion.value=='') {
        error=true;
        textarea_sistema_evaluacion.classList.add('error_input');
    } else {
        textarea_sistema_evaluacion.classList.remove('error_input');
    }

    if (textarea_recomendaciones.value=='') {
        error=true;
        textarea_recomendaciones.classList.add('error_input');
    } else {
        textarea_recomendaciones.classList.remove('error_input');
    }

    if (textarea_areas_informativas.value=='') {
        error=true;
        textarea_areas_informativas.classList.add('error_input');
    } else {
        textarea_areas_informativas.classList.remove('error_input');
    }

    if (textarea_seccion_ayuda.value=='') {
        error=true;
        textarea_seccion_ayuda.classList.add('error_input');
    } else {
        textarea_seccion_ayuda.classList.remove('error_input');
    }

    if (textarea_talleres_adicionales.value=='') {
        error=true;
        textarea_talleres_adicionales.classList.add('error_input');
    } else {
        textarea_talleres_adicionales.classList.remove('error_input');
    }

    if (textarea_deportes.value=='') {
        error=true;
        textarea_deportes.classList.add('error_input');
    } else {
        textarea_deportes.classList.remove('error_input');
    }

    //información adicional no será validado porque no es obligado rellenar ese campo.

    return error;
};

let obtener_datos=()=>{
    if (validacion()==false) {
        let id_institucion=id_usuario;
        let reglamento=textarea_reglamento.value;
        let proceso_matricula=textarea_proceso_matricula.value;
        let evaluacion=textarea_sistema_evaluacion.value;
        let recomendaciones=textarea_recomendaciones.value;
        let areas=textarea_areas_informativas.value;
        let seccion_ayuda=textarea_seccion_ayuda.value;
        let talleres=textarea_talleres_adicionales.value;
        let deportes=textarea_deportes.value;
        let info_adicional=textarea_informacion_adicional.value;

        registrar_material_informativo(reglamento,proceso_matricula,evaluacion,recomendaciones,areas,seccion_ayuda,talleres,deportes,info_adicional,id_institucion)
    } else {
        swal.fire({
            type:'warning',
            title: 'El material informativo no fue registrado.',
            text: 'Por favor verifique los campos que están resaltados.'
        });
    }
};

boton_aceptar.addEventListener('click',obtener_datos);
$(boton_aceptar).on('click',function () {
    if (validacion()==true) {
        textarea_reglamento.value;
        textarea_proceso_matricula.value;
        textarea_sistema_evaluacion.value;
        textarea_recomendaciones.value;
        textarea_areas_informativas.value;
        textarea_seccion_ayuda.value;
        textarea_talleres_adicionales.value;
        textarea_deportes.value;
        textarea_informacion_adicional.value;
    }else{
        $(textarea_reglamento).val('');
        $(textarea_proceso_matricula).val('');
        $(textarea_sistema_evaluacion).val('');
        $(textarea_recomendaciones).val('');
        $(textarea_areas_informativas).val('');
        $(textarea_seccion_ayuda).val('');
        $(textarea_talleres_adicionales).val('');
        $(textarea_deportes).val('');
        $(textarea_informacion_adicional).val('');
    }
  });