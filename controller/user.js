const { User } = require('../models')
const { Op } = require('sequelize')

module.exports = class {
    // tambah data user (sementara)
    static async tambahUser(req, res, next) {
        try {
            const url = `/uploads/${req.file.filename}`

            const {
                email,
                password,
                foto,
                nama,
                kota,
                alamat,
                nohp,
                level
            } = req.body

            const user = await User.create({
                email,
                password,
                foto: url,
                nama,
                kota,
                alamat,
                nohp,
                level
            })
            res.status(201).json(user)
        } catch (err) {
            res.status(422).json({
                error: {
                    name: err.name,
                    message: err.message
                }
            })
        }
    }

    // get data user by id
    static async getDataUserById(req, res, next) {
        try {
            const id = req.params.id
            const user = await User.findByPk(id)
            res.status(201).send(user)
        } catch (err) {
            res.status(422).json({
                error: {
                    name: err.name,
                    message: err.message
                }
            })
        }
    }

    // edit detail user
    static async editDetailUser(req, res, next) {
        try {
            const url = `/uploads/${req.file.filename}`

            const {
                foto,
                nama,
                kota,
                alamat,
                nohp
            } = req.body
            const user = await User.update({
                foto: url,
                nama,
                kota,
                alamat,
                nohp
            }, { where: { id: req.params.id } })
            res.status(201).send(user)
        } catch (err) {
            res.status(422).json({
                error: {
                    name: err.name,
                    message: err.message
                }
            })
        }
    }

    // delete user
    static async deleteUser(req, res, next) {
        try {
            await User.destroy({
                where: { id: req.params.id }
            })
            res.status(204).end()
        } catch (err) {
            res.status(422).json({
                error: {
                    name: err.name,
                    message: err.message
                }
            })
        }
    }
}