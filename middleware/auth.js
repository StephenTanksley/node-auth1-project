const bcrypt = require('bcryptjs')

const authorized = (password) => async (req, res, next) => {
    const authError = {
        message: "Invalid credentials."
    }

    const { username, password } = req.headers
    if(!username || !password) {
        return res.status(401).json(authError)
    }

    const passwordValid = await bcrypt.compare(password, user.password)
    if(!passwordValid) {
        return res.status(401).json
    }

}

module.exports = authorized