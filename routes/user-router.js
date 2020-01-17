const express = require('express')
const userModel = require('./user-model')
const auth = require('../middleware/auth')

const router = express.Router()

router.get('/', auth(), async (req, res, next) => {
    try {
        const users = await userModel.find()
        res.json(users)
    }
    catch (error) {
        next(error)
    }
})

router.get('/:id', auth(), async (req, res, next) => {
    try {
        const [id] = await userModel.findById(req.params.id)
        res.json(id)
    }
    catch (error) {
        next(error)
    }
})

module.exports = router