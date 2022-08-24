const express = require("express");
const path = require("path");
const knex = require("../db/knex");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get("/api/japanese", async (req, res) => {
	try {
		const japanese = await knex.select("*").from("japanese");
		res.send(japanese).status(200).end();
	} catch (err) {
		console.log(err);
		res.sendStatus(404).end();
	}
});

app.listen(PORT, async () => {
	try {
		knex.migrate.latest();
		console.log(`Server listening on port ${PORT}`);
	} catch (err) {
		console.log(`Server failed to start: ${err}`);
		process.exit(1);
	}
});
