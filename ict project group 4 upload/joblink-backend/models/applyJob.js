var mongoose = require('mongoose');
var applyJobSchema = mongoose.Schema({
   jobId: String,
    userId:String
})
const applyJob = mongoose.model('applyJob', applyJobSchema);

module.exports = applyJob;