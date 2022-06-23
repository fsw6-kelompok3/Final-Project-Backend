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

            res.status(201).json(transaksi)
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