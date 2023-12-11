const router = require('express').Router()
const { Movie } = require('../controllers/movie')

router.get('/', Movie.findAll)
router.get('/:id', Movie.findById)
router.post('/add', Movie.create)
router.put('/edit/:id', Movie.update)
router.patch('/edit/:id', Movie.updateRating)
router.delete('/delete/:id', Movie.delete)

module.exports = router