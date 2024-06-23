const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Student = require('./models/Student');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
  const{name, grade, clas, gender, address, phone} = req.body;
  Student.create(name, grade, clas, gender, address, phone);
  try{
  res.status(201).json({
    message: 'Student added successfully'
  });
  }catch(err){
    res.status(500).json({
      message: err.message
    });
  }
})


mongoose.connect('mongodb://127.0.0.1:27017/studentDB');

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
