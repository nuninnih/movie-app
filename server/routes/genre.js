const router = require('express').Router()
const {Genre} = require('../controllers/genre')


router.get('/', () => {})
router.post('/add', Genre.create)
router.pist('/edit/:id', Genre.update)

module.exports = router