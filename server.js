require("dotenv").config();

require('./config/db.connection')
const { PORT, MONGODB_URI } = process.env;
const express = require("express");
const app = express();
	
	///////////////////////////////
	// ROUTES
	////////////////////////////////
	
	app.get("/", (req, res) => {
	    res.send("hello world");
	});


app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
