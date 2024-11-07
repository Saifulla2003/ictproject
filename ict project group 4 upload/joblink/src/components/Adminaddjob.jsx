import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Adminaddjob = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    requirement: '',
    location: '',
    salary: '',
    jobType: '',
  });

  const [message, setMessage] = useState(''); // For feedback messages
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post('http://localhost:3006/addjob', formData, {
        headers: {
          'Content-Type': 'application/json', 
        },
      });

      setMessage('Job added successfully!'); // Display success message
      
      // Navigate to Adminmanagejob page after successful submission
      navigate('/AM');
      
    } catch (error) {
      setMessage('Error submitting the form'); 
    }

    console.log(formData);
  };

  return (
    <div className="add-job-form-container">
      <h2>Add New Job</h2>
      {message && <p>{message}</p>} {/* Show success or error message */}
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Job Title"
            className="input-field"
          />
        </div>
        <div className="form-field">
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Job Description"
            className="input-field"
          />
        </div>
        <div className="form-field">
          <input
            type="text"
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            required
            placeholder="Requirements"
            className="input-field"
          />
        </div>
        <div className="form-field">
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="Location"
            className="input-field"
          />
        </div>
        <div className="form-field">
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
            placeholder="Salary"
            className="input-field"
          />
        </div>
        <div className="form-field">
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="select-field"
          >
            <option value="">Select Job Type</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="temporary">Temporary</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Add Job</button>
      </form>
    </div>
  );
};

export default Adminaddjob;
