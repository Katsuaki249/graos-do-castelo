const router = require('express').Router()

const usersRouter = require('./userRouter')

router.use('/', usersRouter)

module.exports = router
