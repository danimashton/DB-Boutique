const userModel = require('./model.js')
const bcryptjs = require('bcryptjs')

const storeUser = async (userData) => {
    
    try {
        const password = await bcryptjs.hash(userData.password, 10)
        const user = new userModel({
            ...userData, 
            password
        })
        await user.save()
    } catch(err) {
        throw 'failed to create user, please check your input'
    }
    
}

const signIn = async (userData) => {

        try {
            const user = await userModel.findOne({
                email: userData.email
            });
            if (!user) {
                throw "Invalid signin information"
            }
            const passwordMatch = await bcryptjs.compare(userData.password, user.password)
            if(!passwordMatch) {
                throw "Invalid signin information"
            }
            return user.Id
        } catch (error) {
            throw error
        }
}
module.exports = {
    storeUser,
    signIn,
}