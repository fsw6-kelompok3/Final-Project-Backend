var express = require('express');
var router = express.Router();

const multer = require('../middleware/multer')

const authUser = require("../middleware/user")
const authAdmin = require("../middleware/admin")

const BukuController = require('../controller/buku')

router.get('/v1/buku', BukuController.getAllDataBuku)
router.post('/v1/buku', authAdmin, multer.array('gambar'), BukuController.tambahBuku)
router.get('/v1/buku/:id', BukuController.getDataBukuById)
router.put('/v1/buku/:id', authAdmin, multer.array('gambar'), BukuController.editDetailBuku)
router.delete('/v1/buku/:id', authAdmin, BukuController.deleteBuku)

router.get('/v1/cari', BukuController.searchBuku)

router.patch('/v1/buku/:id/like', authUser, BukuController.likeDataBuku)
router.patch('/v1/buku/:id/unlike', authUser, BukuController.unlikeDataBuku)

module.exports = router;