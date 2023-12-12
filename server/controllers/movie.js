const { Movie } = require('../models')

class MovieController{
    static async findAll(req, res, next){
        try {
            let data = await Movie.findAll()

            if(!data.length){
                throw {name: "DATA_NOT_FOUND"}
            }

            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async findById(req, res, next){
        try {
            const {id} = req.params
            let data = await Movie.findByPk(id)

            if(!data){
                throw {name: "DATA_NOT_FOUND"}
            }

            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async create(req, res, next){
        try {
            const {title, synopsis, trailerUrl, imgUrl, rating, genreId, authorId} = req.body

            let data = await Movie.create({title, synopsis, trailerUrl, imgUrl, rating, genreId, authorId})

            res.status(201).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async update(req, res, next){
        try {
            const {id} = req.params
            const {title, synopsis, trailerUrl, imgUrl, rating, genreId, authorId} = req.body

            let data = await Movie.findByPk(id)

            if(!data){
                throw {name: "DATA_NOT_FOUND"}
            }

            await Movie.update({title, synopsis, trailerUrl, imgUrl, rating, genreId, authorId}, {
                where : {id}
            })

            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async updateRating(req, res, next){
        try {
            const {id} = req.params
            const {rating} = req.body

            let data = await Movie.update({rating}, {
                where: {id},
                returning : true
            })
            // ! return data
            res.status(200).json({message: `Id ${id} rating updated`})
        } catch (error) {
            next(error)
        }
    }

    static async delete(req, res, next){
        try {
            const {id} = req.params
            
            await Movie.destroy({where : {id}})
            // ! message: '<entity name> success to delete'
            res.status(200).json({message: `Id ${id} success deleted`})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = { Movie : MovieController }