var express = require('express');
var router = express.Router();
const TransaksiController = require('../controller/transaksi')
const authUser = require("../middleware/user")
const authAdmin = require("../middleware/admin")

//halaman user
router.post('/', authUser, TransaksiController.tambahTransaksi);
router.get('/', authUser, TransaksiController.getdataByUserId);
router.get('/detail/:id', authUser, TransaksiController.DetailTransaksiUserId);


//halaman seller
router.get('/seller', authAdmin, TransaksiController.getdataBySellerId);
router.get('/seller/detail/:id', authAdmin, TransaksiController.DetailTransaksiHalamanSeller);
router.put('/seller/:id', authAdmin, TransaksiController.updateTransaksiBerhasil);
router.put('/seller/:id/batal', authAdmin, TransaksiController.updateTransaksiBatal);

module.exports = router;
