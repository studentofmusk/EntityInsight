const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    reg_id:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required: true
        
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String
    }
})



const StudentModel = mongoose.model("Student", StudentSchema)

module.exports = StudentModel;