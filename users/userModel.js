import  mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email: { type: String, unique: true},
    password: { type: String},
    confirmPassword: { type: String}
})


module.exports = mongoose.model('User', userSchema)