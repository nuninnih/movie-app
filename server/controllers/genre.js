const { Genre } = require('../models')

class GenreController {
    static async findAll(req, res, next){
        try {
            let data = await Genre.findAll()

            if(!data.length){
                throw {name: "DATA_NOT_FOUND"}
            }

            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async create(req, res, next){
        try {
            const {name} = req.body

            let data = await Genre.create({name})

            if(!data){
                throw {name: "DATA_NOT_FOUND"}
            }

            res.status(201).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async update(req, res, next){
        try {
            const {id} = req.params

            let data = await Genre.findByPk(id)

            if(!data){
                throw {name: "DATA_NOT_FOUND"}
            }

            await Genre.update({name}, {where : {id}})

            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = {Genre : GenreController}