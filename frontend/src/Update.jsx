import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./Update.css";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    grade: "",
    classz: "",
    gender: "",
    address: "",
    phoneNumber: "",
  });

  console.log("Fetching student with ID:", id);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/register" +id);
        

        setValues({
          name: res.data.name,
          grade: res.data.grade,
          classz: res.data.class,
          gender: res.data.gender,
          address: res.data.address,
          phoneNumber: res.data.phoneNumber,
        });
      } catch (err) {
        console.error("Error fetching student data:", err);
      }
    };

    fetchStudentData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(`http://localhost:5000/updateStudent/${id}`, values);
      alert("Student updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Update error:", error);
      alert("Failed to update the student");
    }
  };

  return (
    <div className="update-student">
      <h2>Update Student</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            required
          />
        </label>
        <label>
          Grade:
          <input
            type="text"
            value={values.grade}
            onChange={(e) => setValues({ ...values, grade: e.target.value })}
            required
          />
        </label>
        <label>
          Class:
          <input
            type="text"
            value={values.classz}
            onChange={(e) => setValues({ ...values, classz: e.target.value })}
            required
          />
        </label>
        <label>
          Gender:
          <select
            value={values.gender}
            onChange={(e) => setValues({ ...values, gender: e.target.value })}
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
            value={values.address}
            onChange={(e) => setValues({ ...values, address: e.target.value })}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            value={values.phoneNumber}
            onChange={(e) =>
              setValues({ ...values, phoneNumber: e.target.value })
            }
            required
          />
        </label>
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
};

export default Update;
