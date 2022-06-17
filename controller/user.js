const bcrypt = require("bcryptjs");
const { User } = require('../models')

module.exports = class {
    static async addUser(req, res, next) {
        User.create(req.body)
            .then((result) => {
                res.status(201).send({
                    status:201,
                    message: "User berhasil dibuat",
                    data: result,
                })
            })
            .catch((err) => {
                res.status(400).send(err)
            })
    }

    static getAllUser(req, res, next) {
        User.findAll({
            whare: {...req.query},
        })
            .then((result) => {
                res.status(200).send({
                    status:201,
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
        
            const secureUser = user.dataValues
            
            req.session.isAuthenticated = true;
            req.session.user = secureUser;

            res.status(200).send({
                status: 200,
                message: 'User found!',
                data: {
                    user: secureUser,
                }
               }) 
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    }
    
}