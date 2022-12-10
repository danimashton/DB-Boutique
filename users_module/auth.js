const jwt = require('jsonwebtoken')


const auth = async (req, res, next) => {
    const cookies = req.cookies
    if(cookies.token) {
        try {
            const verified = await jwt.verify(cookies.token, "SECRET_KEY")
            if(verified && verified.userId) {
                req.userId = verified.userId
                next()
            } else {
                res.status(401).redirect('/signin')
                res.end()
                return;
            }
        } catch (error){
            res.status(401).redirect('/signin')
            res.end()
            return;
        }
    } else {
        res.status(401).redirect('/signin')
        res.end()
        return;
    }   
}

const createToken = async (userId) => {
    return await jwt.sign(
        {userId: userId},
        "SECRET_KEY",
        {expiresIn: "1h"}
    )
}

module.exports = {
    auth,
    createToken, 
}