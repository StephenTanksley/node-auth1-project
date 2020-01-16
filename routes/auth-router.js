const bcrypt = require('bcryptjs')
const express = require('express')
const userModel = require('../routes/user-model')
const auth = require('../middleware/auth')

const router = express.Router()

router.post('/register', async (req, res, next) => {
    try {
        const saved = await userModel.add(req.body)
        res.status(201).json(saved)
    }
    catch (error) {
        next(error)
    }
})

router.post('/login', auth(), async (req, res, next) => {
    try {

    }
    catch (error) {
        next(error)
    }
})

module.exports = router