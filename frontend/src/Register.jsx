import React from "react";
import "./Reg.css";
import { useState } from "react";


const Register = () => {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [clas, setClas] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="register-student">
      <h2>Add New Student</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            required
            value={name}
            onchange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Grade:
          <input
            type="text"
            required
            value={grade}
            onchange={(e) => setGrade(e.target.value)}
          />
        </label>
        <label>
          Class:
          <input
            type="text"
            required
            value={clas}
            onchange={(e) => setClas(e.target.value)}
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
            onchange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label>
          Phone Number:
          <input type="text" required 
          value={phone}
          onchange={(e) => setPhone(e.target.value)}
          />
        </label>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default Register;
