var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://saifullacm2003:saifu1122@cluster0.drw0d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to MongoDB");
    
    })
    .catch((err) => {
        console.log(err);
    })