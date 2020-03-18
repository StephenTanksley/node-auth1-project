const server = require('./server')

const PORT = process.env.PORT || 5000
const HOST = process.env.HOST || '127.0.0.1'

server.listen(PORT, HOST, () => {
    console.log(`Listening on ${HOST}:${PORT}...`)
})