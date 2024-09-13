require('dotenv')
const jwt = require('jsonwebtoken')

const createAccessToken = (userId, email, username) => {
    return jwt.sign({ id: userId, email: email, username: username }, process.env.ACCESS_TOKEN_SECRET)
}

exports.createAccessToken = createAccessToken