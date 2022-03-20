//import controller files

const express = require("express");
const router = express.Router();
const {createEmployee, getEmployees, updateEmployee , deleteEmployee}  =require('../controllers/employee.js')

//create route

router.post('/add/employee',  createEmployee)

//read route

router.get('/employee',  getEmployees)

//update route
router.put('/employee/:id',  updateEmployee)

//delete route
router.delete('/employee/:id' , deleteEmployee)


module.exports = router;