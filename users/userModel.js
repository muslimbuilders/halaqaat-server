import  mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true},
  firstName: { type: String, required: true},
  lastName: { type: String, required: true},
  refreshToken: { type: String }
});
UserSchema.set("toObject", {virtuals: true});
UserSchema.set("toJSON", {virtuals: true});
const UserModel = mongoose.model('User', UserSchema );
export default UserModel;