/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("japanese").del();
	await knex("japanese").insert([
		{
			id: 1,
			name: "tempura",
			image_path: "tempura.jpg",
			category: "fried",
			main_ingredient: "shrimp",
		},
		{
			id: 2,
			name: "sushi",
			image_path: "sushi.jpg",
			category: "raw",
			main_ingredient: "rice",
			sub_ingredient: "seafood",
		},
		{
			id: 3,
			name: "soba",
			image_path: "soba.jpg",
			category: "noodle",
			main_ingredient: "buckwheat",
		},
		{
			id: 4,
			name: "ramen",
			image_path: "ramen.jpg",
			category: "noodle",
			main_ingredient: "noodle",
			sub_ingredient: "meat",
		},
		{
			id: 5,
			name: "okonomiyaki",
			image_path: "okonomiyaki.jpg",
			category: "savory",
			main_ingredient: "vegetable",
			sub_ingredient: "meat",
		},
	]);
};
