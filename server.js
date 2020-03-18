const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const session = require('express-session')

const authRouter = require('./routes/auth-router.js')
const userRouter = require('./routes/user-router.js')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(
    session({
        name: 'session',
        secret: "I... am your father...",
        cookie: {
            maxAge: 1 * 24 * 60 * 60 * 1000, //1 day, 24 hours, 60 minutes, 60 seconds, 1000 milliseconds
            secure: false,
        },
        httpOnly: true,
        resave: false,
        saveUninitialized: false,
    })
)

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