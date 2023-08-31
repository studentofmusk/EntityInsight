const user_routes = require('express')();
const {registerStudent, studentLogIn} = require('../Controllers/userControllers.controller')

user_routes.post("/student-reg", registerStudent);
user_routes.post("/student-log", studentLogIn);
module.exports = user_routes;