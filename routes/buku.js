var express = require('express');
var router = express.Router();

const multer = require('../middleware/multer')

const authUser = require("../middleware/user")
const authAdmin = require("../middleware/admin")

const BukuController = require('../controller/buku')

router.get('/seller/buku', authAdmin, BukuController.getAllDataBukuSeller)
router.post('/seller/buku', authAdmin, multer.array('gambar'), BukuController.tambahBuku)
router.put('/seller/buku/:id', authAdmin, multer.array('gambar'), BukuController.editDetailBuku)
router.get('/seller/buku/:id',  authAdmin, BukuController.getDataBukuByIdSeller)

router.delete('/seller/buku/:id', authAdmin, BukuController.deleteBuku)
router.get('/seller/terjual', authAdmin, BukuController.filterTerjual)

//bug
router.get('/seller/diminati', authAdmin, BukuController.filterDiminati)


//USER
router.get('/user/buku', BukuController.getAllDataBuku)
router.get('/user/buku/kategori', BukuController.GetBukubyKategori)
router.get('/user/buku/:id', BukuController.getDataBukuById)
router.get('/cari', BukuController.searchBuku)


router.patch('/v1/buku/:id/like', authUser, BukuController.likeDataBuku)
router.patch('/v1/buku/:id/unlike', authUser, BukuController.unlikeDataBuku)

module.exports = router;