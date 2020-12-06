// const {tokenVerifier} = require('../helpers/jwt')

// const authentication = (req, res, next) => {
//     console.log("Authentication works!")
//     const { access_token } = req.headers;
//     // console.log(access_token)
//     if(!access_token){
//         res.status(404).json({
//             msg : "Token not found"
//         })
//     }else {
//         try {
//             const decode = tokenVerifier(access_token)
//             // console.log(decode)
//             req.userData = decode
//             next();
//         }catch (err) {
//             res.status(400).json(err)
//         }
//     }
// }

// module.exports = {
//     authentication
// }