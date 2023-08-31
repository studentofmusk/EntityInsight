//Imports
const express = require('express');
const user_routes = require('./routes/userRoutes.route');
const { errorHandlingMiddleware } = require('./Middleware/Error/middleware');
const dotenv = require('dotenv');

dotenv.config();

//ENV Variables
const PORT = process.env.PORT;

//Creating Server
const app = express();

//DB Connection
require('./DB/conn.db')

//Requirabilities
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//Client
app.use(express.static('public'))

//Sever Api
app.use('/api', user_routes)

//Invalid Pages
app.get('/*', (req, res)=>{
    res.send("Error 404")
})
app.use(errorHandlingMiddleware)

//Listening
app.listen(PORT, ()=>console.log(`Server is running at port ${PORT}`))

//http://localhost:8080/api/student-reg
