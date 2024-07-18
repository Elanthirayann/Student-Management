const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Student = require("./models/Student"); // Assuming you have a Student model defined

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/studentDB");
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
});

// Create a new student
app.post("/register", async (req, res) => {
  try {
    await Student.create(req.body);
    res.status(201).send("Student registered successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Get all students
app.get("/register", async (req, res) => {
  try {
    const studentList = await Student.find({});
    res.status(200).json(studentList);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Update a student by ID
app.patch("/updateStudent/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedStudent = await Student.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updatedStudent) {
      return res.status(404).json({ message: "No student found with this ID" });
    }
    res.json(updatedStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a student by ID
app.delete("/student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Student.deleteOne({_id: id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "No student found with this ID" });
    }
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = app; // Export the Express app for testing or deployment
