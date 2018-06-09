var express = require('../config/express-config')(); 
var request = require('supertest')(express); 

describe('#Cientistas', () => {
	it('#Listagem de cientistas', done => {
		request.get('/scientists')
		.set('Accept', 'application/json')
		.expect(200)
		.end(done);
	}),

	it('#Listagem de um único cientista', done => {
		request.get('/scientist/:id')
		.set('Accept', 'application/json')
		.expect(200)
		.end(done);
	}),

	it('#Verificando rotas inválidas', function(done) {
		request.get('/scientiss')
		.expect(404, done);
	})
});

