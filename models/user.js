import  mongoose from 'mongoose';
import {loadMiddleware} from './hooks/user.js'
export const UserSchema = mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, selected: false},
  firstName: { type: String, required: true},
  lastName: { type: String, required: true},
  refreshToken: { type: String }
});
UserSchema.set("toObject", {virtuals: true});
UserSchema.set("toJSON", {virtuals: true});

loadMiddleware(UserSchema);

const UserModel = mongoose.model('User', UserSchema );


export default UserModel;