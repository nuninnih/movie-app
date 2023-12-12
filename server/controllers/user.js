const { comparePassword } = require('../helpers/bcrypt');
const { signToken } = require('../helpers/jwt');
const { User } = require('../models');

class UserController{
    static async register(req, res, next){
        try {
            const {username, email, password, role, phoneNumber, address} = req.body

            let data = await User.create({username, email, password, role, phoneNumber, address})

            res.status(201).status(data)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async login(req, res, next){
        try {
            const {email, password} = req.body

            if(!email || !password){
                throw {name : "EMAIL_PASSWORD_REQUIRED"}
            }

            let emailAvailable = await User.findOne({where: {email}})
            if(!emailAvailable){
                throw {name : "EMAIL_PASSWORD_INVALID"}
            }

            let passwordValid = comparePassword(password, emailAvailable.password)
            if(!passwordValid){
                throw {name : "EMAIL_PASSWORD_INVALID"}
            }

            const access_token = signToken({id : emailAvailable.id})

            res.status(200).json({access_token : `Bearer ${access_token}`})
        } catch (error) {
            console.log(error);
            res.status(500).json({message : "Belum dihandle"})
        }
    }
}   

module.exports = {User : UserController}