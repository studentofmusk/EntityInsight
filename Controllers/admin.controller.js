const { BadRequestError, InternalServerError, Conflict, NotFoundError, AuthError } = require("../Middleware/Error/error");
const Admin = require("../Models/admin.model");
const { adminSignupSchema } = require("./Schema/admin.schema");
const { comparePassword, generateJWT } = require("./Tools/security");


const adminRegister = async (req, res, next)=>{
    try {
        const {error} = adminSignupSchema.validate(req.body);

        if(error){
            throw new BadRequestError(error.details[0].message);
        }
        
        const {name, email, phone, password} = req.body;

        const isExist = await Admin.findOne({email});
        if(isExist){
            throw new Conflict("Admin Already Exist")
        }

        const newAdmin = new Admin({name, phone, email, password})
        await newAdmin.save();
        res.status(201).send({success:true, message:"Admin Added Successful!"})

    } catch (error) {
        next(new InternalServerError(error.message));
    }
}

const adminLogin = async (req, res, next)=>{
    try {
        const {error} = await adminSignupSchema.validate(req.body);
        
        if(error) throw new BadRequestError(error.details[1].message)

        const {email, password} = req.body;

        const isExist = await Admin.findOne({email})

        if (!isExist) throw new NotFoundError("Invalid Admin ID"); 

        if(!comparePassword(password, isExist.password)) throw new AuthError("Incorrect Email or Password"); 
        const token = generateJWT(email);
        // res.cookie("EntryInsight", token, {httpOnly:true})
        res.status(200).send({success:true, message:"Login Successful", token});

    } catch (error) {
        next(new InternalServerError(error.message));
    }
}



module.exports = {
    adminRegister,
    adminLogin
}