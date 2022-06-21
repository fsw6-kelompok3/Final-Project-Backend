const { Transaksi } = require('../models')

module.exports = class {
    // post transaksi
    static async tambahTransaksi(req, res, next) {
        try {
            const {
               id_barang,
               id_user,
               pesetujuan_harga,
               harga_tawar,
            } = req.body

            const transaksi = await Transaksi.create({
               id_barang,
               id_user,
               pesetujuan_harga,
               harga_tawar,
            })

            res.status(201).json(buku)
        } catch (err) {
            res.status(422).json({
                error: {
                    name: err.name,
                    message: err.message
                }
            })
        }
    }

    // edit detail buku
    static async editBuku(req, res, next) {
        try {

        } catch (err) {
            res.status(422).json({
                error: {
                    name: err.name,
                    message: err.message
                }
            })
        }
    }

    // delete data buku
    static async deleteBuku(req, res, next) {
        try {
            await Buku.destroy({
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