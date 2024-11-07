var express = require("express")
require("./connection")
const Job = require("./models/job")
const User = require("./models/user")
const ApplyJob = require("./models/applyJob")
const cors = require('cors');
const applyJob = require("./models/applyJob")
var app = express()

app.use(express.json())
app.use(cors());

app.post('/signup', async(req,res)=>{
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({message : "Signup success"});
    } catch (error) {
        res.status(400).json({ message: err.message });
    }
})
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

  
    // Check if the email and password are provided
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }
  
    try {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Check if the password matches
      const isMatch = false;
      if (user.password == password){

          return res.status(400).json({ message: 'Invalid email or password' });
      }else{
        res.status(201).json({message : "Signup success", user : user});
      }
    } catch (error) {
        console.error(error);
        res.send({ message: "Error adding data" });
    }
})

app.post('/addjob', async (req, res) => {
    try {
        const newJob = new Job(req.body);
        await newJob.save();
        res.send({ message: "Data added successfully!" });
    } catch (error) {
        console.error(error);
        res.send({ message: "Error adding data" });
    }
})
app.post('/sign', async (req, res) => {
    try {
        const newUser = new user(req.body);
        await newUser.save();
        res.send({ message: "signined successfully!" });
    } catch (error) {
        console.error(error);
        res.send({ message: "Error adding data" });
    }
})    
app.get('/viewjob', async (req, res) => {
    try {
        var data = await Job.find()
        res.send(data)
    } catch (error) {
        console.log(error)

    }
})
app.get('/viewonejob/:jobId', async (req, res) => {
    try {
        var data = await Job.findById(req.params.jobId)
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})
    
    app.delete('/delete/:id',async (req, res) => {
        try {
            await Job.findByIdAndDelete(req.params.id)
            res.send({ message: "deleted" })
        } catch (error) {
            console.log(error)
        }
        })
        
        
        app.put('/edit/:id',async (req, res) => {
            try {
                await Job.findByIdAndUpdate(req.params.id, req.body);
                res.send({ message: 'updated' })
            } catch (error) {
                console.log(error)
            }
            })
app.post('/apply/job',async (req,res)=>{
    try {
        const application = new ApplyJob(req.body);
        await application.save();
        res.status(201).json(application);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})
// app.get('/apply/job/:userId/:jobId', async (req, res) => {
//     const { jobId, userId } = req.params;

//     try {
//         const applications = await ApplyJob.find({ userId , jobId});
//         res.status(200).json({ isApplied: Boolean(applications) });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

app.get('/jobs-with-status/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        // Fetch all jobs
        const jobs = await Job.find();

        // Fetch applications for the user
        const applications = await ApplyJob.find({ userId });
        const appliedJobIds = applications.map(app => app.jobId.toString());

        // Add `isApplied` status to each job
        const jobsWithStatus = jobs.map(job => ({
            ...job.toObject(),
            isApplied: appliedJobIds.includes(job._id.toString())
        }));

        res.status(200).json(jobsWithStatus);
    } catch (error) {
        console.error("Error fetching jobs with status:", error);
        res.status(500).json({ message: "Error fetching jobs with status." });
    }
});
// Applied Jobs Endpoint
app.get('/applied-jobs/:userId', async (req, res) => {
    const { userId } = req.params;
 
    try {
        // Step 1: Fetch application records for the user
        const applications = await ApplyJob.find({ userId });
        const jobIds = applications.map(app => app.jobId);
 
        // Step 2: Fetch job details for these job IDs
        const jobs = await Job.find({ _id: { $in: jobIds } });
 
        res.status(200).json(jobs);
    } catch (error) {
        console.error("Error fetching applied jobs:", error);
        res.status(500).json({ message: "Error fetching applied jobs." });
    }
 });
 
app.listen(3006, () => {
    console.log("port is running")

})