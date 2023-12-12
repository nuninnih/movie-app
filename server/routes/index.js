const router = require('express').Router()
const user = require('./user')
const genre = require('./user')
const movie = require('./movie')
const { User } = require('../controllers/user')
const authentication = require('../middlewares/authentication')
const errorHandler = require('../middlewares/errorHandler')
// ! Create routes /pub here

router.get('/register', User.register)
router.get('/login', User.login)

router.use(authentication)

router.use('/users', user)
router.use('/genres', genre)
router.use('/movies', movie)

router.use(errorHandler)

module.exports = router