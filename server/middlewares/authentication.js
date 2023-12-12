const { verifyToken } = require("../helpers/jwt")
const { User } = require('../models')

async function authentication(req, res, next){
    try {
        const {authorization} = req.headers
        if(!authorization){
            throw {name : "TOKEN_INVALID"}
        }

        const rawToken = authorization.split(' ')
        if(rawToken[0] !== 'Bearer'){
            throw {name : "TOKEN_INVALID"}
        }

        const decodedToken = verifyToken(rawToken[1], process.env.SECRETNYAJWT)

        const user = await User.findByPk(decodedToken.id)
        if(!user){
            throw {name : "TOKEN_INVALID"}
        }

        req.user = user
        
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = authentication