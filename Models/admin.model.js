const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {InternalServerError} = require('../Middleware/Error/error');
const { hash } = require('../Controllers/Tools/security');

const adminSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    } 

})

adminSchema.pre('save',  async function(next){
    try {
        if(this.isModified('password')){
            this.password = await hash(this.password);
        }
    } catch (error) {
        next(new InternalServerError(error.message));
    }
})


const Admin = mongoose.model("Admin", adminSchema)

module.exports = Admin;