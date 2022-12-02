const {getConnection, Schema, mongoose} = require('../db/mongoose')
getConnection();

const userSchema = new Schema({
    name:    String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: String, 
    repeatPassword: String,
    createdAt: {
        type: Date,
        default: Date.now,
    }
  })
  

const userModel = mongoose.model('users', userSchema)


// whenever a user is saved, you want to send an email ** how do I do this? I have a 15% off "coupon" I wanted people to get

module.exports = userModel

