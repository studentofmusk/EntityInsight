const Student = require("../Models/userModels.model");
const { studentSignupSchema, studentLogInSchema } = require("./Schema/user.schema");
const {BadRequestError, NotFoundError, InternalServerError} = require('../Middleware/Error/error');


//Student Register
const registerStudent = async (req, res, next)=>{
    try {

        //checking Requirement
        const {error} = studentSignupSchema.validate(req.body);
        
        const { reg_id, name, phone, address, email} = req.body;
        
        if(error){
            throw new BadRequestError("Student Already Exist")
        }
        
        //If Student Exist
        const isExist = await Student.findOne({reg_id});
        
        if(isExist){
            throw new BadRequestError(error.details[0].message);
        }

        //If not Exist Create new Student Account
        //Getting requirement and create account
        const student = new Student({name, reg_id, phone, address, email })
        await student.save();
        res.status(201).send({success:true});  
        
    } catch (error) {
        next( new InternalServerError(error.message))
        
    }
}

//Daily Check In
const studentLogIn = async (req, res)=>{
    try {
        const {error} = studentLogInSchema.validate(req.body);
        const {reg_id} = req.body;
        
        if(error){
            throw new BadRequestError(error.details[0].message);
        }
        
        const isExist = await Student.findOne({reg_id});
        
        if (isExist){
            throw new NotFoundError("Invalid Student ID");
        }
        
        res.send({success:true, message:"Login Successful"})
        
        
    } catch (error) {
        next(new InternalServerError(error.message));
    }
}

module.exports = {
    registerStudent,
    studentLogIn
}