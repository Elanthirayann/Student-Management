const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
  clas: {
    type: String, 
    required: true,
  },
  gender : {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: Number,
});


const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
