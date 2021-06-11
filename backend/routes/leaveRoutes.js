const express = require('express');
const Leave = require('../models/Leave');
const leaveRouter = express.Router();


//delete 
leaveRouter.delete(
  '/:id',
  (async (req, res) => {
    try {
      const leave = await Leave.findByIdAndDelete(req.params.id);
      res.status(200);
      res.send(leave);
    } catch (error) {
      res.json(error);
    }
  })
);


//Create 
leaveRouter.post(
  '/',
  (async (req, res) => {
    const leave = await Leave.create(req.body);

    if (leave) {
      res.status(200);
        res.json(leave);
      } else {
      res.status(500);
      throw new Error('Leave creating failed');
    }
  })
);

//fetch 
leaveRouter.get(
  '/',
  (async (req, res) => {
    const leave = await Leave.find({ });

    if (leaveRouter) {
      res.status(200);
      //fetch leave in json format
      res.json(leave);
    } else {
      res.status(500);
      throw new Error('There are no leaves');
    }
  })
);


module.exports = leaveRouter;
