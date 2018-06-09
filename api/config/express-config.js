const express = require('express');
const consign = require('consign');

module.exports = () => {
	const app = express();

	app.all('*', function(req, res, next) {
	  res.header('Access-Control-Allow-Origin', '*');
	  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	  res.header('Access-Control-Allow-Headers', 'Content-Type');
	  next();
	});

	consign({cwd: 'app'})
		.then('routes')
		.include('db')
		.into(app);

	return app;
}