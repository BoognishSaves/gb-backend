// ./controllers/inspection-controller.js

const express = require('express')
const router = express.Router()
const Inspections = require('../models/Inspections')

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
    console.log(req.body)
    res.json(await Inspections.create(req.body));
    
  } catch (error) {
    //send error
    res.status(400).json(error);
    console.log(error)
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
    // Comment UPDATE ROUTE
    router.put("/:id/comment", async (req, res) => {
        try {
          const oldData= await Inspections.findById(req.params.id);
          const data = { comment: [...oldData.comment, req.body]}
          console.log(req.body)
          res.json(
            await Inspections.findByIdAndUpdate(req.params.id, data, {new:true})
          );
          
          
        } catch (error) {
          //send error
          res.status(400).json(error);
          console.log(error)
        }
      });
    
// Inspection UPDATE ROUTE
router.put("/:id", async (req, res) => {
    try {
      // update inspection by ID
      res.json(
        await Inspections.findByIdAndUpdate(req.params.id, req.body, {new:true})
      );
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });

  
  // Inspection DELETE ROUTE
  router.delete("/:id", async (req, res) => {
    try {
      // delete people by ID
      res.json(await Inspections.findByIdAndRemove(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });

module.exports = router
