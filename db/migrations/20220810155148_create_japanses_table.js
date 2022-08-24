/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("japanese", (table) => {
		table.increments("id").primary();
		table.string("name", 32).notNullable().index();
		table.string("image_path", 32).notNullable();
		table.string("category", 16).notNullable();
		table.string("main_ingredient", 16).notNullable();
		table.string("sub_ingredient", 16);
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("japanese");
};
