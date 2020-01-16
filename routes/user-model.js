const db = require('../data/db-config')

const get = async () => {
    const user = await db('users')
    return user
}

const getById = async (id) => {
    const [user] = await db('users').where({ id }).first()
    return user
}

module.exports = {
    get, 
    getById
}