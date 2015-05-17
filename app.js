//server.js
var express        = require('express')
  , methodOverride = require('method-override')
  , logger         = require('morgan')
  , favicon        = require('static-favicon')
  , bodyParser     = require('body-parser')
  , http 					 = require('http')
  , path           = require('path')
  , routes 			 	 = require('./routes') // Para las funciones con la DB
  , config         = require('./config')
  , port 					 = config.port
  , app            = express();

app.set('port', process.env.PORT || port);
// Localización de los ficheros estáticos
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser());
app.use(methodOverride());

// Pagina de Inicio: http:localhost:PORT
app.get('/', routes.getInit);

// API
app.get('/domain', routes.getDomain);



// run server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


