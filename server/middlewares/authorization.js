const { User } = require('../models')

async function authorization(req, res, next){
    try {
        let id = req.user.id

        let user = await User.findByPk(id)
        if(user.role === 'admin'){
            next()
        }else{
            throw {name : "UNAUTHORIZED"}
        }
    } catch (error) {
        next(error)
    }
}

module.exports = authorization