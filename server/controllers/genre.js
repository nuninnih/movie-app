const { Genre } = require('../models')

class GenreController {
    static async findAll(req, res){
        try {
            let data = await Genre.findAll()

            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({message : "belum dihandle"})
        }
    }

    static async create(req, res){
        try {
            const {name} = req.body

            let data = await Genre.create({name})

            res.status(201).json(data)
        } catch (error) {
            res.status(500).json({message : "belum dihandle"})
        }
    }

    static async update(req, res){
        try {
            const {id} = req.params

            await Genre.update({name}, {where : {id}})
            // ! return data
            res.status(200).json({message : `Id ${id} updated`})
        } catch (error) {
            res.status(500).json({message : "belum dihandle"})
        }
    }
}

module.exports = {Genre : GenreController}