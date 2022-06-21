const { User } = require('../models')
var bcrypt = require('bcrypt');
const jwt = require('../helper/jwt')

module.exports = class {
    static async addUser(req, res, next) {
        try {
            const user = await User.create({
                nama: req.body.nama,
                password: req.body.password,
                email: req.body.email,
                level:"user"
            })
            res.status(200).send({
                status: 200,
                message: 'Data User Ditambahkan!',
                data: user
            })
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    }
    static async addAdmin (req, res, next) {
        try {
            const user = await User.create({
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                level:"admin",
            })
            res.status(200).send({
                status: 200,
                message: 'Data Admin Ditambahkan!',
                data: user 
            })
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    }
    static getAllUser(req, res, next) {
        User.findAll({
            whare: { ...req.query },
        })
            .then((result) => {
                res.status(200).send({
                    status: 201,
                    data: result,
                })
            })
            .catch((result) => {
                res.status(400).send(err)
            })
    }

    static async login (req, res, next) {
        try {
            const user = await User.findOne({where: {email: req.body.email}})
            if (!user) {
               res.status(404).send({
                status: 404,
                message: 'User not found!',
               }) 
            }

            const isValidPassword = await bcrypt.compare(req.body.password, user.password)

            if (!isValidPassword) {
                res.status(404).send({
                    status: 400,
                    message: 'Email and password not match!',
                   }) 
            }
            const token = jwt.generateToken({email: user.email, password: user.password})
            const secureUser = user.dataValues
            delete secureUser.password

            res.status(200).send({
                status: 200,
                message: 'User found!',
                data: {
                    user: secureUser,
                    token: token
                }
               }) 
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
}

}