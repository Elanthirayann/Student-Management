const mongoose = require("mongoose");

// Define the schema for the student
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
  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone : Number,
});

// Create a model based on the schema
const Student = mongoose.model("Student", studentSchema);

// Export the model to be used in other parts of the application
module.exports = Student;
