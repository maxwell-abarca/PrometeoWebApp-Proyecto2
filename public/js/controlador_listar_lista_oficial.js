'use strict';

var lista;
var nivel;


function bindings(){
    lista = document.querySelector('#tbl_lista_oficial tbody');
    nivel = $('#slt_nivel');
    

    nivel.change(onLevelChange);

}

function onLevelChange(){
    let selected = nivel.val();
    listbylevel(selected);
}

// onSearchInput

function listbylevel(nivel) {
    let lista_oficial = listar_lista_oficial(nivel);

    if (lista_oficial.length == 0) {
        alert('No hay registros de ese nivel.');
    }
    mostrar_datos(lista_oficial);
}

function search(nivel, query) {
    let lista_oficial = buscar_lista_oficial(nivel, query);
    if (lista_oficial.length == 0) {
        alert('No hay registros.');
    }
    mostrar_datos(lista_oficial);
}

let mostrar_datos = (lista_oficial) => {
    
    lista.innerHTML = '';

    for (let i = 0; i < lista_oficial.length; i++) {
        let fila = lista.insertRow();
        fila.insertCell().innerHTML = lista_oficial[i]['util1'];
        fila.insertCell().innerHTML = lista_oficial[i]['descripcion1'];
        fila.insertCell().innerHTML = lista_oficial[i]['cantidad1'];
    };

    for (let i = 0; i < lista_oficial.length; i++) {
        let fila = lista.insertRow();
        fila.insertCell().innerHTML = lista_oficial[i]['util2'];
        fila.insertCell().innerHTML = lista_oficial[i]['descripcion2'];
        fila.insertCell().innerHTML = lista_oficial[i]['cantidad2'];
    };

    for (let i = 0; i < lista_oficial.length; i++) {
        let fila = lista.insertRow();
        fila.insertCell().innerHTML = lista_oficial[i]['util3'];
        fila.insertCell().innerHTML = lista_oficial[i]['descripcion3'];
        fila.insertCell().innerHTML = lista_oficial[i]['cantidad3'];
    };

    for (let i = 0; i < lista_oficial.length; i++) {
        let fila = lista.insertRow();
        fila.insertCell().innerHTML = lista_oficial[i]['util4'];
        fila.insertCell().innerHTML = lista_oficial[i]['descripcion4'];
        fila.insertCell().innerHTML = lista_oficial[i]['cantidad4'];


    };
    for (let i = 0; i < lista_oficial.length; i++) {
        let fila = lista.insertRow();
        fila.insertCell().innerHTML = lista_oficial[i]['util5'];
        fila.insertCell().innerHTML = lista_oficial[i]['descripcion5'];
        fila.insertCell().innerHTML = lista_oficial[i]['cantidad5'];
    };

    for (let i = 0; i < lista_oficial.length; i++) {
        let fila = lista.insertRow();
        fila.insertCell().innerHTML = lista_oficial[i]['util6'];
        fila.insertCell().innerHTML = lista_oficial[i]['descripcion6'];
        fila.insertCell().innerHTML = lista_oficial[i]['cantidad6'];
    };

    for (let i = 0; i < lista_oficial.length; i++) {
        let fila = lista.insertRow();
        fila.insertCell().innerHTML = lista_oficial[i]['util7'];
        fila.insertCell().innerHTML = lista_oficial[i]['descripcion7'];
        fila.insertCell().innerHTML = lista_oficial[i]['cantidad7'];
    };

    for (let i = 0; i < lista_oficial.length; i++) {
        let fila = lista.insertRow();
        fila.insertCell().innerHTML = lista_oficial[i]['util8'];
        fila.insertCell().innerHTML = lista_oficial[i]['descripcion8'];
        fila.insertCell().innerHTML = lista_oficial[i]['cantidad8'];
    };

    for (let i = 0; i < lista_oficial.length; i++) {
        let fila = lista.insertRow();
        fila.insertCell().innerHTML = lista_oficial[i]['util9'];
        fila.insertCell().innerHTML = lista_oficial[i]['descripcion9'];
        fila.insertCell().innerHTML = lista_oficial[i]['cantidad9'];
    };

    for (let i = 0; i < lista_oficial.length; i++) {
        let fila = lista.insertRow();
        fila.insertCell().innerHTML = lista_oficial[i]['util10'];
        fila.insertCell().innerHTML = lista_oficial[i]['descripcion10'];
        fila.insertCell().innerHTML = lista_oficial[i]['cantidad10'];
    };

};

bindings();
listbylevel('Preescolar');