//import employee model file 
const Employee = require('../models/employee');



//create employees
exports.createEmployee = (req , res) => {

  //create new empolyee data coming from the body and save it on DB
  const employee = new Employee(req.body);
  employee.save((err, employee) => {
    if(err){
      console.log(err)
      return res.status(400).json({
        error: "Not able to save data in DB"
      }) 
    }  else {
      res.json({
        name: employee.name,
        email: employee.email,
        phoneNumber: employee.phoneNumber,
        dateOfBirth: employee.dateOfBirth,
        jobTypes: employee.jobTypes
      });
    };
  });

}

//get employees

exports.getEmployees = (req, res) => {

  //if request coming with  Employee id show specifed data else display all the data 
  if(req.query.id){
     const id = req.query._id;
     Employee.findById(id)
     .then(data => {
       if(!data){
         console.log(err)
         return res.status(400).json({
           error: `Not found user with id : ${id}`
         })
       } else {
         res.json(data)
       }
     }).catch(err => console.log(err))

  } else {
    Employee.find().exec((err, employees) => {
      if(err){
         console.log(err)
        return res.status(400).json({
          error: "Cannot able to Find employees"
        })
      } else {
        res.json(employees)
      }
    })
  } 
}

//update employee 
exports.updateEmployee = (req , res) => {
  const id = req.params.id;
  Employee.findByIdAndUpdate(id, req.body, {new: true})
  .then(data => {
    if(!data){
      res.status(400).json({
        error: `cannot update employee with ${id}. may be data not found`
      })
    } else {
      res.json(data)
    }
  }).catch(err => console.log(err))

}

//delete employee
exports.deleteEmployee = (req, res) => {
  const id = req.params.id;
    
  Employee.findByIdAndDelete(id)
  .then(data => {
    if(!data){
      res.status(err).json({
        error: `cannot able to delete with ${id}. may be data not found`
      })
    } else {
      res.json("employee deleted successfully")
    }
  }).catch(err => console.log(err))
}