'use strict';
//Vamos a acceder al cuerpo de la tabla por esta razón agregamos tbody
const tabla_ranking_mep = document.querySelector('#tbl_ranking_mep tbody');

let mostrar_ranking_mep = () => {

    
    let ranking = listar_ranking_mep();
    
    for (let i = 0; i < ranking.length; i++) {
        let fila = tabla_ranking_mep.insertRow();
        fila.insertCell().innerHTML = ranking[i]['puesto1'];
        fila.insertCell().innerHTML = 'Puesto #1'
    };

    for (let i = 0; i < ranking.length; i++) {
        let fila = tabla_ranking_mep.insertRow();
        
        fila.insertCell().innerHTML = ranking[i]['puesto2'];
        fila.insertCell().innerHTML = 'Puesto #2'
    };

    for (let i = 0; i < ranking.length; i++) {
        let fila = tabla_ranking_mep.insertRow();
        
        fila.insertCell().innerHTML = ranking[i]['puesto3'];
        fila.insertCell().innerHTML = 'Puesto #3'
    };

    for (let i = 0; i < ranking.length; i++) {
        let fila = tabla_ranking_mep.insertRow();
        
        fila.insertCell().innerHTML = ranking[i]['puesto4'];
        fila.insertCell().innerHTML = 'Puesto #4'
    };

    for (let i = 0; i < ranking.length; i++) {
        let fila = tabla_ranking_mep.insertRow();
        
        fila.insertCell().innerHTML = ranking[i]['puesto5'];
        fila.insertCell().innerHTML = 'Puesto #5'
    };

    for (let i = 0; i < ranking.length; i++) {
        let fila = tabla_ranking_mep.insertRow();
        
        fila.insertCell().innerHTML = ranking[i]['puesto6'];
        fila.insertCell().innerHTML = 'Puesto #6'
    };

    for (let i = 0; i < ranking.length; i++) {
        let fila = tabla_ranking_mep.insertRow();
        
        fila.insertCell().innerHTML = ranking[i]['puesto7'];
        fila.insertCell().innerHTML = 'Puesto #7'
    };

    for (let i = 0; i < ranking.length; i++) {
        let fila = tabla_ranking_mep.insertRow();
        
        fila.insertCell().innerHTML = ranking[i]['puesto8'];
        fila.insertCell().innerHTML = 'Puesto #8'
    };

    for (let i = 0; i < ranking.length; i++) {
        let fila = tabla_ranking_mep.insertRow();
        
        fila.insertCell().innerHTML = ranking[i]['puesto9'];
        fila.insertCell().innerHTML = 'Puesto #9'
    };

    for (let i = 0; i < ranking.length; i++) {
        let fila = tabla_ranking_mep.insertRow();
        
        fila.insertCell().innerHTML = ranking[i]['puesto10'];
        fila.insertCell().innerHTML = 'Puesto #10'
    };

};

mostrar_ranking_mep();