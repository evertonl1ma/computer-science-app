module.exports = (app) => {

	app.get('/scientists', (req, res, next) => {
		const knex = app.db.dbConfig();
		knex
			.select('*')
			.from('scientists')
			.then((response) => {
				res.json(response);
			})
			.catch((error) => {
				console.log(error);
			})
	});

	app.get('/scientist/:id', (req, res, next) => {
		const knex = app.db.dbConfig();
		const id = req.params.id;

		knex
			.select('*')
			.from('scientists')
			.where('id', id)
			.first()
			.then((response) => {
				res.json(response);
			})
			.catch((error) => {
				console.log(error);
			})
	})
}