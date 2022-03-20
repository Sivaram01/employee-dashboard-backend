const mongoose = require('mongoose');



const employeeSchema = new mongoose.Schema({
   name: {
     type: String,
     required: true,
     maxlength: 32,
     trim: true
   },
   email: {
     type: String,
     required: true,
     trim: true,
     unique: true
   },
   phoneNumber: {
     type: Number,
     required: true,
   },
   dateOfBirth: {
     type: Date,
     required: true,
   },
   jobTypes: {
     type: Array,
     required: true,
   },
   photo: {
    data: Buffer,
    contentType: String
   }
} , {timestamps: true}
)


module.exports = mongoose.model('Employee',employeeSchema);