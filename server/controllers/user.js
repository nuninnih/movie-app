const { comparePassword } = require('../helpers/bcrypt');
const { signToken } = require('../helpers/jwt');
const { User } = require('../models');

class UserController{
    static async register(req, res){
        try {
            const {username, email, password, role, phoneNumber, address} = req.body

            let data = await User.create({username, email, password, role, phoneNumber, address})

            res.status(201).status(data)
        } catch (error) {
            console.log(error);
            res.status(500).json({message : "Belum dihandle"})
        }
    }

    static async login(req, res){
        try {
            const {email, password} = req.body

            if(!email || !password){
                return res.status(400).json({message : "Email & Password required!"})
            }

            let emailAvailable = await User.findOne({where: {email}})
            if(!emailAvailable){
                return res.status(400).json({message : "Email / Password Not Valid"})
            }

            let passwordValid = comparePassword(password, emailAvailable.password)
            if(!passwordValid){
                return res.status(400).json({message : "Email / Password Not Valid"})
            }

            const access_token = signToken({id : emailAvailable.id})

            res.status(200).json({access_token})
        } catch (error) {
            console.log(error);
            res.status(500).json({message : "Belum dihandle"})
        }
    }
}   

module.exports = {User : UserController}