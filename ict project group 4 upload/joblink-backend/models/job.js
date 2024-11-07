var mongoose = require('mongoose');
var jobSchema = mongoose.Schema({
   title : String,
   description: String,
   requirement: String,
   location: String,
   salary : Number,
    type : String,


})
const Job = mongoose.model('Job', jobSchema);

module.exports = Job;