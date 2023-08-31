const bcryptjs = require('bcryptjs');
const { InternalServerError } = require('../../Middleware/Error/error');
const JWT = require('jsonwebtoken');


const hash = async(password)=>{
    try {
        const salt = await bcryptjs.genSalt(10);
        const hash = await bcryptjs.hash(password, salt);
        return hash
    } catch (error) {
        throw new InternalServerError(error.message);
    }
}
const comparePassword = async(password, hashPassword)=>{
    try {
        return await bcryptjs.compare(password, hashPassword)
        
    } catch (error) {
        throw new InternalServerError(error.message);
    }
}

const generateJWT = (email)=>{
    return JWT.sign({email}, process.env.SECRETKEY, {expiresIn:'20h'});
}
const verifyJWT = (token)=>{
    try{
        JWT.verify(token, process.env.SECRETKEY);
        return true;
    }
    catch(error){
        return false;
    }
}

module.exports = {
    hash,
    comparePassword,
    generateJWT,
    verifyJWT
}