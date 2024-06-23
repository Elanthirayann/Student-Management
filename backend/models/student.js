const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  grade: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum:['Male', 'Female', 'Other'],
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phonenumber: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /\d{10}/.test(v); // simple validation for 10 digit phone number
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
