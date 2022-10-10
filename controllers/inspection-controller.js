// ./controllers/inspection-controller.js

const express = require('express')
const router = express.Router()
const {Inspections} = require('../models')

///////////////////////////////
// ROUTES
////////////////////////////////

// Inspection INDEX ROUTE
router.get("/", async (req, res) => {
	try {
    // get all inspections
    res.json(await Inspections.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// Inspection CREATE ROUTE
router.post("/", async (req, res) => {
  try {
    // create new inspection
    res.json(await Inspections.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// Inspections SHOW ROUTE
router.get("/:id", async (req, res) => {
    try {
        // send one person
        res.json(await Inspections.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
});

// Inspection DELETE ROUTE
router.delete("/:id", async (req, res) => {
	res.status(200).json({message: "Inspection delete route: " + req.params.id })
});

// Inspection UPDATE ROUTE
router.put("/:id", async (req, res) => {
	console.log(req.body)
	res.status(200).json({message: "Inspection update route: " + req.params.id })
});

module.exports = router
