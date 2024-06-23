import React from "react";
import "./Reg.css";
import { useState } from "react";
import axios from "axios";


const Register = () => {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [clas, setClas] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  async function  HandleSubmit(e){
    e.preventDefault();
    axios.post("http://localhost:5000/register", {
        name: name,
        grade: grade,
        class: clas,
        gender: gender,
        address: address,
        phone: phone,
      })
     .then(function (response) {
        console.log(response);
      })
     .catch(function (error) {
        console.log(error);
      });
  }


  return (
    <div className="register-student">
      <h2>Add New Student</h2>
      <form onSubmit={HandleSubmit}>
        <label>
          Name:
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Grade:
          <input
            type="text"
            required
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </label>
        <label>
          Class:
          <input
            type="text"
            required
            value={clas}
            onChange={(e) => setClas(e.target.value)}
          />
        </label>
        <label>
          Gender:
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <label>
          Address:
          <input
            type="text"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label>
          Phone Number:
          <input type="text" required 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default Register;
