const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const authRouter = require('./routes/auth-router.js')
const userRouter = require('./routes/user-router.js')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/auth', authRouter)
server.use('/users', userRouter)

server.get('/', (req, res, next) => {
    res.json({
        message: "Welcome to the Auth 1 API."
    })
})

server.use((err, req, res, next) => {
    console.log("Error:", err)
    res.status(500).json({ message: "Something went wrong." })
})

module.exports = server