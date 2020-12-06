const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY


const tokenGenerator = (user) => {
    const { id, username } = user

    const token = jwt.sign({
        id,
        username,
    }, secretKey)
    return token;
}

const tokenVerifier = (access_token) => {
    return jwt.verify(access_token, secretKey)
}

module.exports = {
    tokenGenerator, tokenVerifier
}