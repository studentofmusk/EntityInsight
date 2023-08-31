const Joi = require('joi');

const adminSignupSchema = Joi.object({
    name:Joi.string().required(),
    email:Joi.string().email().required(),
    phone:Joi.number().required(),
    password:Joi.string().required(),
    cpassword:Joi.string().required()
})
const adminLoginSchema = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required()
    
})

module.exports = {
    adminSignupSchema,
    adminLoginSchema
}