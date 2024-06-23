const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Student = require('./models/student')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/studentDB');
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

app.post('/register',async(req,res)=>{
      try {
    await Student.create(req.body);
    res.status(201).send('User registered successfully');
  } catch (err) {
    res.status(400).send(err.message);
  }
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
