const bcrypt = require('bcryptjs')
const express = require('express')
const userModel = require('../routes/user-model')
// const auth = require('../middleware/auth')

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

router.post('/login', async (req, res, next) => {
    try {
        const { username, password } = req.body
        const user = await userModel.findBy({username}).first()
        const passwordValid = await bcrypt.compare(password, userPassword)

        if(user && passwordValid) {
            res.status(200).json({
                message: `Welcome ${user.username}!`,
            })
        } else {
            res.status(401).json({
                message: "Invalid credentials",
            })
        }
    }
    catch (error) {
        next(error)
    }
})

module.exports = router