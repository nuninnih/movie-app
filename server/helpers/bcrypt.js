const bcrypt = require('bcryptjs');

let hashPassword = (password) => { return bcrypt.hashSync(password)}
let comparePassword = (password, hashedPassword) => { return bcrypt.compare(password, hashedPassword)}

module.exports = {hashPassword, comparePassword}