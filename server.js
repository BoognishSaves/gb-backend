require("dotenv").config();

require('./config/db.connection')
const PORT = process.env.PORT || 4000
const express = require("express");
const app = express();
const inspectionController = require('./controllers/inspection-controller')
const cors = require("cors")
const morgan = require("morgan")

///////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


///////////////////////////////
// ROUTES
////////////////////////////////

app.use('/inspections', inspectionController)

	
app.get("/", (req, res) => {
	res.send("hello world");
});


app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
