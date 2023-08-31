const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://entryinsight:farooqrahinisaijaskit@my-cluster.swuppno.mongodb.net/Students?retryWrites=true&w=majority")
mongoose.connect("mongodb://localhost:27017/Students")
.then(()=>console.log("DB connected"))
.catch((err)=>console.log("DB connection Failed Due to", err.message))