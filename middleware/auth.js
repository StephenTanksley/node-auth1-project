const bcrypt = require('bcryptjs')
const userModel = require('../routes/user-model')

const auth = () => async (req, res, next) => {
    const authError = {
        message: "Invalid credentials."
    }
    return async (req, res, next) => {
        try {
            const { username, password } = req.headers
            if(!username || !password) {
                return res.status(401).json(authError)
            }
        
            const user = await userModel.findBy({ username }).first()
            if(!user) {
                return res.status(401).json(authError)
            }
        
            const passwordValid = await bcrypt.compare(password, user.password)
            if(!passwordValid) {
                return res.status(401).json(authError)
            }
            next()
        }
        catch (error) {
            next(error)
        }

    }
}

module.exports = auth