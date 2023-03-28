var Emitter = require('./emit');

var emtr = new Emitter();

emtr.on('Mahmoud', function() {
	console.log('Saying Hi');
});

emtr.on('Mahmoud', function() {
	console.log('The same one is saying Hi');
});


emtr.emit('Mahmoud');




