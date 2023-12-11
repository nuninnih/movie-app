const jwt = require('jsonwebtoken')

const signToken = (user) => {
    return jwt.sign(user, "iniNtarPindahKeENV")
}

const verifyToken = (token) => {
    return jwt.verify(token, "iniNtarPindahKeENV")
}

module.exports = { signToken, verifyToken}