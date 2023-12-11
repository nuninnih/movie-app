const { Movie } = require('../models')

class MovieController{
    static async findAll(req, res){
        try {
            let data = await Movie.findAll()

            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({error : "belum dihandle"})
        }
    }

    static async findById(req, res){
        try {
            const {id} = req.params
            let data = await Movie.findByPk(id)

            res.status(200).json(data)
        } catch (error) {
            console.log(error);
            res.status(500).json({error : "belum dihandle"})
        }
    }

    static async create(req, res){
        try {
            const {title, synopsis, trailerUrl, imgUrl, rating, genreId, authorId} = req.body

            let data = await Movie.create({title, synopsis, trailerUrl, imgUrl, rating, genreId, authorId})

            res.status(201).json(data)
        } catch (error) {
            console.log(error);
            res.status(500).json({error : "belum dihandle"})
        }
    }

    static async update(req, res){
        try {
            const {id} = req.params
            const {title, synopsis, trailerUrl, imgUrl, rating, genreId, authorId} = req.body

            await Movie.update({title, synopsis, trailerUrl, imgUrl, rating, genreId, authorId}, {
                where : {id}
            })
            // ! return data

            res.status(200).json({message: `Id ${id} data updated`})
        } catch (error) {
            console.log(error);
            res.status(500).json({error : "belum dihandle"})
        }
    }

    static async updateRating(req, res){
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
            console.log(error);
            res.status(500).json({error : "belum dihandle"})
        }
    }

    static async delete(req, res){
        try {
            const {id} = req.params
            
            await Movie.destroy({where : {id}})
            // ! message: '<entity name> success to delete'
            res.status(200).json({message: `Id ${id} success deleted`})
        } catch (error) {
            console.log(error);
            res.status(500).json({error : "belum dihandle"})
        }
    }
}

module.exports = { Movie : MovieController }