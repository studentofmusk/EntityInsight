const {BadRequestError, NotFoundError, InternalServerError, AuthError, Conflict} = require('./error');

const errorHandlingMiddleware = (err, req, res, next)=>{
    if(err instanceof BadRequestError){
        return res.status(err.statusCode).send({success:false, message: err.message});
    }
    if(err instanceof NotFoundError){
        return res.status(err.statusCode).send({success:false, message:err.message});
    }
    if(err instanceof InternalServerError){
        return res.status(err.statusCode).send({success:false, message:err.message});
    }
    if(err instanceof AuthError){
        return res.status(err.statusCode).send({success:false, message:err.message});
    }
    if(err instanceof Conflict){
        return res.status(err.statusCode).send({success:false, message:err.message});
    }

    // If it's not one of the known errors, treat it as a 500 Internal Server Error
    console.error(err); // Logging the unexpected error
    res.status(500).send({ success:false, message: 'Internal server error' });
}

module.exports = {
    errorHandlingMiddleware
}