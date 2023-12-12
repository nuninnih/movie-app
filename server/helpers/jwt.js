const jwt = require('jsonwebtoken')

const signToken = (user) => {
    return jwt.sign(user, process.env.SECRETNYAJWT)
}

const verifyToken = (token) => {
    return jwt.verify(token, process.env.SECRETNYAJWT)
}

module.exports = { signToken, verifyToken}