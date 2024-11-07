// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// const Userbrowsejob = () => {
//    const[jobs,setJobs]=useState([])
//    const[loading,setLoading]=useState(true)
//    const[error,setError]=useState(null)
//    const[message,setMessage]=useState('')
//     useEffect(() => {
//       const fetchJobs = async () => {
//         try {
//           const response = await axios.get('http://localhost:3006/viewjob')
//           setJobs(response.data)
//           setLoading(false)
//           } catch (err) {
//             setError('ERROR ')
//             setLoading(false)
//          }
//         }
//          fetchJobs()
//          },[])


//   return (

//     <div className="job-management-container">
//     {message && <p>{message}</p>} {/* Display success or error message */}

//     <div className="job-cards-container">
//       {jobs.map(job => (
//         <div key={job.id} className="job-card">
//           <h3>{job.title}</h3>
//           <p><strong>Description:</strong> {job.description}</p>
//           <p><strong>Requirements:</strong> {job.requirement}</p>
//           <p><strong>Location:</strong> {job.location}</p>
//           <p><strong>Salary:</strong> ${job.salary}</p>
//           <p><strong>Job Type:</strong> {job.type}</p>
//           <button  className="edit-button">APPLY</button>
  
//         </div>
//       ))}
//       </div>
//       )
//       }

// export default Userbrowsejob
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Userbrowsejob = () => {
   const [jobs, setJobs] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [message, setMessage] = useState('');
   const userId = localStorage.getItem('userId');
   const [isApplied, setIsApplied] = useState(false);


   const handleApply = async (jobId)=>{
      try {
         const response = await axios.post('http://localhost:3006/apply/job', { jobId, userId });
         setJobs(prevJobs =>
            prevJobs.map(job =>
                job._id === jobId ? { ...job, isApplied: true } : job
            )
         )
         alert('Application submitted successfully!');
     } catch (error) {
         alert('Error: ' + (error.response?.data?.message || error.message));
     }
   }
   useEffect(() => {
      const fetchJobs = async () => {
          try {
              // Fetch all jobs with application status for the user
              const response = await axios.get(`http://localhost:3006/jobs-with-status/${userId}`);
              setJobs(response.data);
          } catch (error) {
              console.error("Error fetching jobs:", error);
          }
      };
      fetchJobs();
  }, [userId]);

   useEffect(() => {
      const fetchJobs = async () => {
         try {
            const response = await axios.get('http://localhost:3006/viewjob');
            setJobs(response.data);
            setLoading(false);
         } catch (err) {
            setError('ERROR');
            setLoading(false);
         }
      };
      fetchJobs();
   }, []);

   return (
      <div className="job-management-container">
         {message && <p>{message}</p>}
         {error && <p>{error}</p>}
         <div className="job-cards-container">
            {jobs.map((job) => (
               <div key={job._id} className="job-card">
                  <h3>{job.title}</h3>
                  <p><strong>Description:</strong> {job.description}</p>
                  <p><strong>Requirements:</strong> {job.requirement}</p>
                  <p><strong>Location:</strong> {job.location}</p>
                  <p><strong>Salary:</strong> ${job.salary}</p>
                  <p><strong>Job Type:</strong> {job.type}</p>
                           <button className="edit-button" onClick={() => handleApply(job._id)} disabled={job.isApplied}>{job.isApplied ? "Applied" : "Apply Job"}</button>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Userbrowsejob;
