// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Adminmanagejob = () => {
//   const [jobs, setJobs] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentJob, setCurrentJob] = useState(null);
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state
//   const [message, setMessage] = useState(''); // Feedback message

//   // Fetch jobs from the API
//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await axios.get('http://localhost:3006/viewjob');
        
//         setJobs(response.data); // Assuming the API response is an array of jobs
//         setLoading(false); // Data loaded
//       } catch (err) {
//         setError('Error fetching job data');
//         setLoading(false); // Stop loading if error
//       }
//     };

//     fetchJobs();
//   }, []);

//   // Handle editing a job (populate the form with selected job data)
//   const handleEdit = (job) => {
//     setCurrentJob(job);
//     setIsEditing(true);
//   };

//   // Handle form submission for editing (send data to edit API)
//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await axios.put(`http://localhost:3006/edit/${currentJob.id}`, currentJob, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       setMessage('Job updated successfully!');
      
//       // Update jobs list with edited job
//       const updatedJobs = jobs.map(job => (job.id === currentJob.id ? currentJob : job));
//       setJobs(updatedJobs);
//       setIsEditing(false);
//       setCurrentJob(null);
//     } catch (error) {
//       setMessage('Error updating job');
//     }
//   };

//   // Handle deleting a job (send request to delete API)
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3006/delete/${id}`, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       setJobs(jobs.filter(job => job.id !== id)); // Remove job from the list
//       setMessage('Job deleted successfully!');
//     } catch (error) {
//       setMessage('Error deleting job');
//     }
//   };

//   // Handle change in input fields during editing
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentJob({ ...currentJob, [name]: value });
//   };

//   if (loading) {
//     return <div>Loading jobs...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="job-management-container">
//       {message && <p>{message}</p>} {/* Display success or error message */}

//       <div className="job-cards-container">
//         {jobs.map(job => (
//           <div key={job.id} className="job-card">
//             <h3>{job.title}</h3>
//             <p><strong>Description:</strong> {job.description}</p>
//             <p><strong>Requirements:</strong> {job.requirement}</p>
//             <p><strong>Location:</strong> {job.location}</p>
//             <p><strong>Salary:</strong> ${job.salary}</p>
//             <p><strong>Job Type:</strong> {job.type}</p>
//             <button onClick={() => handleEdit(job)} className="edit-button">Edit</button>
//             <button onClick={() => handleDelete(job.id)} className="delete-button">Delete</button>
//           </div>
//         ))}
//       </div>

//       {isEditing && (
//         <div className="edit-form-container">
//           <h2>Edit Job</h2>
//           <form onSubmit={handleEditSubmit}>
//             <div className="form-field">
//               <input
//                 type="text"
//                 name="title"
//                 value={currentJob.title}
//                 onChange={handleChange}
//                 required
//                 placeholder="Job Title"
//               />
//             </div>
//             <div className="form-field">
//               <textarea
//                 name="description"
//                 value={currentJob.description}
//                 onChange={handleChange}
//                 required
//                 placeholder="Job Description"
//               />
//             </div>
//             <div className="form-field">
//               <input
//                 type="text"
//                 name="requirement"
//                 value={currentJob.requirement}
//                 onChange={handleChange}
//                 required
//                 placeholder="Requirements"
//               />
//             </div>
//             <div className="form-field">
//               <input
//                 type="text"
//                 name="location"
//                 value={currentJob.location}
//                 onChange={handleChange}
//                 required
//                 placeholder="Location"
//               />
//             </div>
//             <div className="form-field">
//               <input
//                 type="number"
//                 name="salary"
//                 value={currentJob.salary}
//                 onChange={handleChange}
//                 required
//                 placeholder="Salary"
//               />
//             </div>
//             <div className="form-field">
//               <select
//                 name="jobType"
//                 value={currentJob.jobType}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Job Type</option>
//                 <option value="full-time">Full-time</option>
//                 <option value="part-time">Part-time</option>
//                 <option value="contract">Contract</option>
//                 <option value="temporary">Temporary</option>
//               </select>
//             </div>
//             <button type="submit" className="submit-button">Update Job</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Adminmanagejob;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Adminmanagejob = () => {
  const [jobs, setJobs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentJob, setCurrentJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  // Fetch jobs from the API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:3006/viewjob');
        setJobs(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching job data:', err); // Debugging log
        setError('Error fetching job data');
        setLoading(false);
      }
    };

    fetchJobs();
  }, [jobs]);

  // Handle editing a job
  const handleEdit = (job) => {
    console.log('Editing job:', job); // Debugging log
    setCurrentJob(job);
    setIsEditing(true);
  };

  // Handle form submission for editing
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting edit for job:', currentJob); // Debugging log

    try {
      const response = await axios.put(`http://localhost:3006/edit/${currentJob._id}`, currentJob, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setMessage('Job updated successfully!');

      // Update jobs list with edited job
      const updatedJobs = jobs.map((job) => (job.id === currentJob.id ? currentJob : job));
      setJobs(updatedJobs);
      setIsEditing(false);
      setCurrentJob(null);
    } catch (err) {
      console.error('Error updating job:', err); // Debugging log
      setMessage('Error updating job');
    }
  };

  // Handle deleting a job
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3006/delete/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Job deleted successfully'); // Debugging log
      setJobs(jobs.filter((job) => job.id !== id));
      setMessage('Job deleted successfully!');
    } catch (err) {
      console.error('Error deleting job:', err); // Debugging log
      setMessage('Error deleting job');
    }
  };

  // Handle change in input fields during editing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentJob((prev) => ({ ...prev, [name]: value }));
  };

  if (loading) {
    return <div>Loading jobs...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="job-management-container">
      {message && <p>{message}</p>} {/* Display success or error message */}

      <div className="job-cards-container">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Description:</strong> {job.description}</p>
            <p><strong>Requirements:</strong> {job.requirement}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> ${job.salary}</p>
            <p><strong>Job Type:</strong> {job.type}</p>
            <button onClick={() => handleEdit(job)} className="edit-button">Edit</button>
            <button onClick={() => handleDelete(job._id)} className="delete-button">Delete</button>
          </div>
        ))}
      </div>

      {isEditing && (
        
        <div className="edit-form-container">
          <h2>Edit Job</h2>
          <form onSubmit={handleEditSubmit}>
            <div className="form-field">
              <input
                type="text"
                name="title"
                value={currentJob.title}
                onChange={handleChange}
                required
                placeholder="Job Title"
              />
            </div>
            <div className="form-field">
              <textarea
                name="description"
                value={currentJob.description}
                onChange={handleChange}
                required
                placeholder="Job Description"
              />
            </div>
            <div className="form-field">
              <input
                type="text"
                name="requirement"
                value={currentJob.requirement}
                onChange={handleChange}
                required
                placeholder="Requirements"
              />
            </div>
            <div className="form-field">
              <input
                type="text"
                name="location"
                value={currentJob.location}
                onChange={handleChange}
                required
                placeholder="Location"
              />
            </div>
            <div className="form-field">
              <input
                type="number"
                name="salary"
                value={currentJob.salary}
                onChange={handleChange}
                required
                placeholder="Salary"
              />
            </div>
            <div className="form-field">
              <select
                name="type"
                value={currentJob.type}
                onChange={handleChange}
                required
              >
                <option value="">Select Job Type</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="temporary">Temporary</option>
              </select>
            </div>
            <button type="submit" className="submit-button">Update Job</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Adminmanagejob;
