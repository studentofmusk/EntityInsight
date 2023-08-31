const { verifyJWT } = require("../Controllers/Tools/security");
const { AuthError, InternalServerError } = require("./Error/error");


const auth = async (req, res, next) =>{
    try {
        const authHeader = req.headers.authorization;

        if(!authHeader){
            throw new AuthError("No authorization header provided."); 
        }

        const token = authHeader.split(' ')[1];
        if (authHeader.split(' ')[0] !== 'EntryInsight') {
            throw new AuthError("Invalid authorization type");
        }

        const isVerified = verifyJWT(token);
        if(!isVerified) throw new AuthError("Token Expired or Invalid Token")
        next();
        
    } catch (error) {
        next(new InternalServerError(error.message));
    }
}

module.exports = auth;