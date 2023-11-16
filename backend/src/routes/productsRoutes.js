const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController')

router.get('/products', productsController.getAllProducts)
router.post('/products', productsController.createProduct)

module.exports = router
