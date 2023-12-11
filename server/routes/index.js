const router = require('express').Router()
const user = require('./user')
const genre = require('./user')
const movie = require('./movie')
const { User } = require('../controllers/user')

router.get('/', async(req, res) => {
    res.send("Hello World!")
})
router.get('/register', User.register)

router.get('/login', User.login)

router.use('/users', user)
router.use('/genres', genre)
router.use('/movies', movie)

module.exports = router