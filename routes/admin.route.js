const { adminRegister, adminLogin } = require('../Controllers/admin.controller');
const auth = require('../Middleware/auth');

const admin_routes = require('express')();

admin_routes.post("/register", adminRegister);
admin_routes.post("/login", adminLogin);
admin_routes.get("/hi",auth, (req, res)=>res.status(200).send("hi"));


module.exports = admin_routes;