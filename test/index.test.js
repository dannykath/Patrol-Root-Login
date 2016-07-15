var tape = require('tape');
var rule = require('../index.js');

tape('Detects root login correctly', function(t) {
var rootLoginEvent = require('./fixtures/rootLoginEvent.json');
	rule.fn(rootLoginEvent, function(err, message){
		t.equal(message.subject, 'Other user was logged to user root', 'Detected root user login');
		t.end();
	});
});

// segundo test 
tape('Detects not root login correctly', function(t) {

var notRootLoginEvent = require('./fixtures/notRootLoginEvent.json');
	rule.fn(notRootLoginEvent, function(err, message){
		t.equal(message, 'no enviar mensaje', 'Other user logged');
		t.end();
	});

});

// tercer test 

tape('Detects login root user and ip correctly ', function(t) {

var RootwithIPLoginEvent = require('./fixtures/RootwithIPLoginEvent.json');
	rule.fn(RootwithIPLoginEvent, function(err, message){
		t.equal(message, 'no enviar mensaje', 'any person logged with root user');
		t.end();
	});

});