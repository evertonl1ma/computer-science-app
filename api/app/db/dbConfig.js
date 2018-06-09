const knex = require('knex');

function dbConfig() {
	const db = knex({
		client: 'mysql',
		connection: {
			host: '127.0.0.1',
			user: 'root',
			password: '',
			database: 'computer-science-app'
		}
	})

	return db;
}

module.exports = () => {
	return dbConfig;
}