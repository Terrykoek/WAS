const express = require('express');
const Employee = require('../models/Employee');
const employeeRouter = express.Router();


//update employee
employeeRouter.put(
  '/:id',
  (async (req, res) => {
    console.log(req.body)
    try{
      //find by id the employee
    const employee = await Employee.findById(req.params.id);
    //if employee exist, update the employee to form updatedEmployee
    if (employee) {
      const updatedEmployee = await Employee.findByIdAndUpdate(
        //find the employee by id and edit the body info
        req.params.id,
        req.body,
      );
      res.status(200);
      //passing updated data as json
      res.json(updatedEmployee);
    } else {
      res.status(500);
      throw new Error('Update failed');
    }
  }catch(e){
      console.log(e)
      res.status(500);

    }
  })
);

//delete employee
employeeRouter.delete(
  '/:id',
  (async (req, res) => {
    try {
      //fnd employee by id to delete
      const employee = await Employee.findByIdAndDelete(req.params.id);
      res.status(200);
      res.send(employee);
    } catch (error) {
      res.json(error);
    }
  })
);


//Create employee
employeeRouter.post(
  '/',
  (async (req, res) => {
    //create employee body, define it as employee
    const employee = await Employee.create(req.body);

    if (employee) {
      res.status(200);
        res.json(employee);
      } else {
      res.status(500);
      throw new Error('Employee creating failed');
    }
  })
);

//fetch employee
employeeRouter.get(
  '/',
  (async (req, res) => {
    //find employee method, using {}} as we want to fetch all the employees in database
    const employee = await Employee.find({ });

    if (employee) {
      res.status(200);
      //fetch employee in json format
      res.json(employee);
    } else {
      res.status(500);
      throw new Error('There are no employees');
    }
  })
);


module.exports = employeeRouter;