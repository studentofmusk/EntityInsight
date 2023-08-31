class BadRequestError extends Error {
    constructor(message){
        super(message);
        this.statusCode = 400;
    }
}
class Conflict extends Error {
    constructor(message){
        super(message);
        this.statusCode = 409;
    }
}

class NotFoundError extends Error {
    constructor(message = "Resource not Found"){
        super(message);
        this.statusCode = 404;
    }
}

class InternalServerError extends Error {
    constructor(message = "Internal Server Error"){
        super(message);
        this.statusCode = 500;
    }
}
class AuthError extends Error {
    constructor(message = "Unauthorized "){
        super(message);
        this.statusCode = 401;
    }
}

module.exports = {
    BadRequestError,
    NotFoundError, 
    InternalServerError,
    AuthError,
    Conflict
}