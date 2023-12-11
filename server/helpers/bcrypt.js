const bcrypt = require('bcryptjs');

let hashPassword = (password) => { return bcrypt.hashSync(password)}
let comparePassword = (password, hash) => { return bcrypt.compare(password, hash)}

module.exports = {hashPassword, comparePassword}