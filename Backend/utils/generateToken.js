const jwt = require('jsonwebtoken') ;
const JWT_SECRET = 'Aniket123'

const generateToken=()=>{
    return jwt.sign({id} , JWT_SECRET , {
        expiresIn:"30d",
    });
}

module.exports = generateToken ;