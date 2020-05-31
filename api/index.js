'use strict';

/**
 * Exportamos todas las dependencias necesarias para establecer la conexión
 */
const express = require('express'),
  app = express(),
  path = require('path'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  mongoose = require('mongoose');

/**
 * Se definen las variables necesarias para la conexión con MongoDB
 */
let db = mongoose.connection,
  dburl =
    'mongodb://koeladmins:Grupokoel2019@proyecto-shard-00-00-xwswr.mongodb.net:27017,proyecto-shard-00-01-xwswr.mongodb.net:27017,proyecto-shard-00-02-xwswr.mongodb.net:27017/test?ssl=true&replicaSet=proyecto-shard-0&authSource=admin&retryWrites=true',
  port = 4000;

/**
 * Se le indica que cree un servidor extra dentro del puerto 4000 y escuche los cambios que se le hagan a esos archivos
 */
let server = app.listen(port, _server());

/**
 * Se define la conexión con Mongoose, enviándole como parámetro la url de la base de datos
 */
mongoose.connect(dburl, { useNewUrlParser: true });

/**
 * Si la conexión falla, imprime en consola el error
 */
db.on('error', console.error.bind(console, 'Error de conexión: con la base de datos '));

/**
 * Si la conexión es exitosa nos imprime en la consola que se ha establecido conexión con Mongo
 */
db.once('open', function () {
  console.log('Base de datos conectada correctamente');
});

/**
 * Le indicamos a express que envíe las respuestas a la carpeta "public"
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Le indicamos a la aplicación que el formato de los datos va a ser JSON
 */
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));
// sin esto no nos va a funcionar el servidor y no nos va atender lo que ocupamos 
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


const costos = require('./componentes/costos/registrar_costo.route');
app.use('/api', costos);

const utiles = require('./componentes/Utiles/registrar_util.route');

app.use('/api', utiles);

const preguntas = require('./componentes/Preguntas/registrar_seccion_preguntas.route');

app.use('/api', preguntas);

const actividades = require('./componentes/actividades/actividades.route');

app.use('/api', actividades);

const citas = require('./componentes/citas/citas.route');
app.use('/api', citas);

const registro_padre = require('./componentes/registro_padre/usuarios_padre.route');
app.use('/api', registro_padre);

const registro_institucion = require('./componentes/registro_institucion/usuarios_institucion.route');
app.use('/api', registro_institucion);


const ranking = require('./componentes/ranking_mep/ranking_mep.route')
app.use('./api', ranking);


const registrar_ranking = require('./componentes/ranking_mep/ranking_mep.route');
app.use('/api', registrar_ranking);

const registrar_etiqueta = require('./componentes/etiquetas/registrar_etiquetas.route');
app.use('/api', registrar_etiqueta);

const registrar_criterio = require('./componentes/criterios/registrar_criterios.route');
app.use('/api', registrar_criterio);

const registrar_noticias = require('./componentes/noticias/noticias.route');
app.use('/api', registrar_noticias);

const registrar_lista_utiles_mep = require('./componentes/lista_utiles_mep/lista_utiles_mep.route');
app.use('/api', registrar_lista_utiles_mep);

const registrar_informacion = require('./componentes/material_informativo/informacion.route')
app.use('/api', registrar_informacion);

const registrar_comentario = require('./componentes/comentarios/comentarios.route')
app.use('/api', registrar_comentario);

const registrar_idioma = require('./componentes/Idiomas/idiomas.route');
app.use('/api', registrar_idioma);

const becas = require('./componentes/becas/becas.route');
app.use('/api', becas);

const estrellas = require('./componentes/estrellas_institucion/estrellas_institucion.route');
app.use('/api', estrellas);

const instituciones_cercanas=require('./componentes/instituciones_cercanas/instituciones_cercanas.route');
app.use('/api', instituciones_cercanas);

const registrar_nivel=require('./componentes/niveles/niveles.route');
app.use('/api', registrar_nivel);

// Se guarda todo lo que se ha realizado
module.exports = app; /*lo que hace es exportarme el módulo*/

function _server() {
  console.log('Back-end corriendo en el puerto ' + port);
};