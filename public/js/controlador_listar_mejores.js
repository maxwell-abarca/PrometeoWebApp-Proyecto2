'use strict';

var tabla = document.getElementById('tbl_instituciones_m');
let mostrar_datos_tabla = () => {
    let etiquetas = listar_etiqueta();
    let institucion = listar_institucion();
    let estrellitas = [];
    let estrellas = listar_estrellas();
    let cantidad_estrellas=0;
    let star =[];
    for(let i = 0; i < institucion.length; i++){
        for (let u = 0; u < estrellas.length; u++) {

            /*--------------Preguntamos si hay estrellas registradas para el centro en concreto--------------*/
            if (estrellas[u]['id_institucion'] == institucion[i]['institucion_id']) {

            estrellitas = estrellitas + estrellas[u]['estrellas']
            cantidad_estrellas++;
            }

        }
        

        if (cantidad_estrellas > 0) {
        
    
            let cantidad = estrellitas / cantidad_estrellas;
    
        star = star + Math.round(cantidad);
            
        }
    }
    let numbers=[star]
    const numberSorter = (a, b) => b - a;
    numbers.sort(numberSorter);
    console.log(numbers);

    for(let i = 0; i < institucion.length; i++){

        
        
        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = institucion[i]['institucion_nombre'];
        
        let mostrar_estrellas = () => {
            let estrellas = listar_estrellas();
            let id_institucion = institucion[i]['institucion_id'];
            let promedio_estrellas = 0;
            let cantidad_estrellas = 0;
        
            /*--------------Preguntamos cuantos registros de estrellas hay--------------*/
            for (let u = 0; u < estrellas.length; u++) {
        
                /*--------------Preguntamos si hay estrellas registradas para el centro en concreto--------------*/
                if (estrellas[u]['id_institucion'] == id_institucion) {
        
                    /*--------------Se suman todas las estrellas que tenga el centro educativo y se cuenta cuantas calificaciones hubo--------------*/
                    promedio_estrellas = promedio_estrellas + estrellas[u]['estrellas'];
                    
        
                    cantidad_estrellas++;
        
                }
        
            }
            /*--------------Función que saca el promedio de las estrellas y redondea el numero--------------*/
            let star =0;
            if (cantidad_estrellas > 0) {
            
        
                let cantidad = promedio_estrellas / cantidad_estrellas;
        
                star = Math.round(cantidad);
            
            }
        
                return star;
        }
        
        if (mostrar_estrellas()==0) {
            fila.insertCell().innerHTML = 'No ha sido evaluado';
        }else{
            fila.insertCell().innerHTML = mostrar_estrellas();

        }

    if (i==9) {
        break;
         }
    };          
};


function Buscar() {
    var tabla = document.getElementById('tbl_instituciones_m');
    var busqueda = document.getElementById('txtBusqueda').value.toLowerCase();
    var cellsOfRow="";
    var found=false;
    var compareWith="";
    for (var i = 1; i < tabla.rows.length; i++) {
        cellsOfRow = tabla.rows[i].getElementsByTagName('td');
        found = false;
        for (var j = 0; j < cellsOfRow.length && !found; j++) { compareWith = cellsOfRow[j].innerHTML.toLowerCase(); if (busqueda.length == 0 || (compareWith.indexOf(busqueda) > -1))
            {
                found = true;
            }
        }
        if(found)
        {
            tabla.rows[i].style.display = '';
        } else {
            tabla.rows[i].style.display = 'none';
            // tabla.innerHTML = 'No se han encontrado'
        }
    }
};



mostrar_datos_tabla();

function sort_age() 
{
 var table=$('#tbl_instituciones');
 var tbody =$('#table1');

 tbody.find('tr').sort(function(a, b) 
 {
  if($('#age_order').val()=='asc') 
  {
   return $('td:last', a).text().localeCompare($('td:last', b).text());
  }
  else 
  {
   return $('td:last', b).text().localeCompare($('td:last', a).text());
  }
		
 }).appendTo(tbody);
	
 var sort_order=$('#age_order').val();
 if(sort_order=="asc")
 {
  document.getElementById("age_order").value="desc";
 }
 if(sort_order=="desc")
 {
  document.getElementById("age_order").value="asc";
 }
}