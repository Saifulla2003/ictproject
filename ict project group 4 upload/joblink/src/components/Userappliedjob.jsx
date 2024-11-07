import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { colors } from '@mui/material';

function AppliedJobs() {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const userId = localStorage.getItem('userId');


    useEffect(() => {
        const fetchAppliedJobs = async () => {
            try {
                const response = await axios.get(`http://localhost:3006/applied-jobs/${userId}`);
                setAppliedJobs(response.data);
            } catch (error) {
                console.error("Error fetching applied jobs:", error);
            }
        };
        fetchAppliedJobs();
    }, [userId]);

    return (
        <div>
            <h2 style={{color:'#000000'}}>Applied Jobs</h2>
            <ul>
                {appliedJobs.map((job) => (
                    <div key={job._id} className="job-card" style={{color:'#000000'}}>
                    <h3>{job.title}</h3>
                    <p><strong>Description:</strong> {job.description}</p>
                    <p><strong>Requirements:</strong> {job.requirement}</p>
                    <p><strong>Location:</strong> {job.location}</p>
                    <p><strong>Salary:</strong> ${job.salary}</p>
                    <p><strong>Job Type:</strong> {job.type}</p>
                 </div>
                ))}
            </ul>
        </div>
    );
}

export default AppliedJobs;
