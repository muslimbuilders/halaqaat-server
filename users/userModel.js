import  {Schema, model} from 'mongoose';

const userSchema = Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true},
  refreshToken: { type: String }
});


module.exports = model('User', userSchema);