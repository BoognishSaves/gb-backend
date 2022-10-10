// ./controllers/inspection-controller.js

const express = require('express')
const router = express.Router()

///////////////////////////////
// ROUTES
////////////////////////////////

// Inspection INDEX ROUTE
router.get("/", async (req, res) => {
	res.status(200).json({message: "inspection index route"})
});

// Inspection CREATE ROUTE
router.post("/", async (req, res) =>  {
	res.status(201).json({message: "inspection create route"})
});

module.exports = router
