import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import { Link } from "react-router-dom";

const Dash = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/register');
        setStudents(response.data);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/student/${id}`);
      const updatedStudents = students.filter((student) => student._id!== id);
      setStudents(updatedStudents);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  
  return (
    <div className="App">
      <button className="add-student-button">
        <Link to="/register" className="add-student-link">
          Add New Student
        </Link>
      </button>

      <div className="search-container">
        <input
          type="search"
          className="search-input"
          placeholder="Enter the ID"
        />
        <button className="search-button">Search</button>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Grade</th>
            <th>Class</th>
            <th>Gender</th>
            <th>More details</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student._id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.grade}</td>
              <td>{student.class}</td>
              <td>{student.gender}</td>
              <td>
                <button className="more-details">Details</button>
              </td>
              <td>
                <Link to={`/updateStudent/${student._id}`} className="add-student-link">
                  Edit
                </Link>
              </td>
              <td>
                <button
                  className="delete"
                  onClick={() => handleDelete(student._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dash;
