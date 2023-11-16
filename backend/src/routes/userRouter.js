const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController')

router.get('/users', userController.getAllUsers)
router.post('/users', userController.createUser)

module.exports = router
