var tape = require('tape');
var rule = require('../index.js');
tape('Detects root login correctly', function(t) {
var rootLoginEvent = require('./fixtures/rootLoginEvent.json');
rule.fn(rootLoginEvent, function(err, message){
t.equal(message.subject, 'Root user logged in to the Console', 'Detected root user login');
t.end();
});
});

// segundo test 
tape('Detects not root login correctly', function(t) {

var notRootLoginEvent = require('./fixtures/notRootLoginEvent.json');
rule.fn(notRootLoginEvent, function(err, message){
t.equal(message, 'Other user different of root logged in to the Console', 'Other user logged');
t.end();
});

});


/*
incluir el modulo que hicimos en index.js
es buena practica insertar los require en primera linea
cat
creamos una regla
*/
// se tiene acceso a 
// fn y a config//
//escribir test
// el message es el que crea el mensjae y lo envia
// llamar a la funcion definida
// cargar el evento que esta en fixtures 
// llamar a la funcion