
import React, { useState } from 'react';
import './App.css';

function App() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    age: ''
  });

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    alert("Registration Successful!");

    console.log(formData);
  }

  return (
    <div className="container">

      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Department:</label>
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        >
          <option value="">Select Department</option>
          <option value="CSE">CSE</option>
          <option value="IT">IT</option>
          <option value="ECE">ECE</option>
        </select>

        <label>Age:</label>
        <input
          type="number"
          name="age"
          placeholder="Enter your age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>

      </form>

      <div className="output">
        <h3>Student Details</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Department: {formData.department}</p>
        <p>Age: {formData.age}</p>
      </div>

    </div>
  );
}

export default App;
