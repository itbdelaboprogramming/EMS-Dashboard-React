const { Router } = require("express");
const { getData_1, getData_2, getData_3, getData_4, getData_5, getData_6, getData_7, getData_8 } = require("../controllers/getData");

const router = Router()

router.get('/data_1', getData_1)
router.get('/data_2', getData_2)
router.get('/data_3', getData_3)
router.get('/data_4', getData_4)
router.get('/data_5', getData_5)
router.get('/data_6', getData_6)
router.get('/data_7', getData_7)
router.get('/data_8', getData_8)

module.exports = router