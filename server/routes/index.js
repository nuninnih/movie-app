const router = require('express').Router()
const user = require('./user')
const genre = require('./user')
const movie = require('./movie')

router.get('/', async(req, res) => {
    res.send("Hello World!")
})
router.get('/register', async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

router.get('/login', async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

router.use('/users', user)
router.use('/genres', genre)
router.use('movies', movie)

module.exports = router