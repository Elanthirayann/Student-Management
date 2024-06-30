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
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student._id}</td>
              <td>{student.name}</td>
              <td>{student.grade}</td>
              <td>{student.class}</td>
              <td>{student.gender}</td>
              <td>
                <button className="more-details">Details</button>
              </td>
              <td>
                <button className="edit">Edit</button>
              </td>
              <td>
                <button className="delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dash;
