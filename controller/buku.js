const { Buku } = require('../models')

module.exports = class {
    // tambah data buku
    static async tambahBuku(req, res, next) {
        try {
            const {
                nama,
                deskripsi,
                gambar,
                harga,
                lokasi,
                pengarang,
                tahun_terbit,
                kategori_id
            } = req.body

            const buku = await Buku.create({
                nama,
                deskripsi,
                gambar,
                harga,
                lokasi,
                pengarang,
                tahun_terbit,
                kategori_id,
                diminati: null
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

    // search data buku

    // pagination data buku

    // fitur like data buku

    // fitur diminati (seller)

    // get all data buku by seller id
}