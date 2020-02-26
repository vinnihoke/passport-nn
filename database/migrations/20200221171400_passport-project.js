
exports.up = function (knex) {
	return knex.schema
		.createTable('users', col => {
			col.increments();
			col.string('auth_id')
			col.string('auth_provider')
			col.string('firstname')
			col.string('lastname')
			col.string('username')
			col.string('picture')
			col.string('email')
			col.string('email_verified')
		})
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('users')
};
