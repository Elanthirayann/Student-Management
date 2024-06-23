import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Dash() {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", grade: "A", class: "10A", gender: "Male" },
    { id: 2, name: "Jane Smith", grade: "B", class: "9B", gender: "Female" },
    { id: 3, name: "Jane Doe", grade: "C", class: "8C", gender: "Female" },
    { id: 4, name: "John Smith", grade: "D", class: "7D", gender: "Male" },
    { id: 5, name: "Jane Doe", grade: "E", class: "6E", gender: "Female" },
  ]);

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
            <tr key={student.id}>
              <td>{student.id}</td>
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
}

export default Dash;
