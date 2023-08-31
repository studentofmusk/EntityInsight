const Joi = require('joi');

const studentSignupSchema = Joi.object({
        name:Joi.string().min(3).max(30).required(),
        address:Joi.string().min(10).max(50).required(),
        email:Joi.string().email().min(6),
        phone:Joi.number().min(10).required(),
        reg_id:Joi.string().min(8).max(15).required()
    })
    

const studentLogInSchema = Joi.object({
        reg_id:Joi.string().min(8).max(15).required()
    })
    


module.exports = {
    studentSignupSchema,
    studentLogInSchema
}