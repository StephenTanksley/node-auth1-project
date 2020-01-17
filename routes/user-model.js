const bcrypt = require('bcryptjs')
const db = require('../data/db-config')

const add = async (user) => {
    user.password = await bcrypt.hash(user.password, 15)
    const [id] = await db('users').insert(user)
    return findById(id)
}

const find = () => {
    return db('users')
        .select('id', 'username')
}

const findBy = (filter) => {
    return db('users')
        .where(filter)
        .select('id', 'username', 'password')
}

const findById = (id) => {
    return db('users')
        .where({ id })
        .first('id', 'username')
}

module.exports = {
    add,
    find, 
    findBy,
    findById,
}