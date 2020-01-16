const express = require('express')

const server = express()
server.use(express.json())

server.use((req, res) => {
    res.status(404).json({ message: "Route was not found." })
})

server.use((err, req, res, next) => {
    res.status(500).json({ message: "An internal error occurred." })
})

module.exports = server