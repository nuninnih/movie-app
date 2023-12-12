module.exports = function errorHandler(err, req, res, next){
    switch (err.name) {
        case "TOKEN_INVALID":
            res.status(401).json({message : "Invalid Token! Login Needed!"})
            break;
        case "UNAUTHORIZED":
            res.status(403).json({message: "Unauthorized!"})
            break;
        case "EMAIL_PASSWORD_REQUIRED":
            res.status(400).json({message : "Email & Password required!"})
            break;
        case "EMAIL_PASSWORD_INVALID":
            res.status(400).json({message : "Email / Password Not Valid!"})
            break;
        case "DATA_NOT_FOUND":
            res.status(404).json({message : "Data Not Found!"})
            break;
        case "SequelizeValidationError":
        case "SequelizeUniqueConstraintError":
            res.status(400).json({message: err.errors[0].message})
            break;
        case "SequelizeDatabaseError":
        case "SequelizeForeignKeyConstraintError":
            res.status(400).json({message: "Invalid Input!"})
            break;
    
        default:
            res.status(500).json({message : "Internal Server Error!"})
            break;
    }
}