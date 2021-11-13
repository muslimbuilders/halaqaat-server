import UserModel from '../models/user.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const secret = process.env.SECRET;

const refreshToken = async ({accessTokenParam, refreshTokenParam}) => {
  let accessUser = await verifyToken(accessTokenParam);
  if (!accessUser) throw new Error("Unauthorised");
  const refreshuser = await verifyToken(refreshTokenParam, true);
  if (!refreshuser) throw new Error("Unauthorised");
  const {refreshToken, accessToken} = await getTokens(accessUser);
  const user = await updateUser(refreshUser.id, {refreshToken});
  delete user.password;
  return {...user, accessToken};
}

const signin = async ({email, password}) => {
  let user = await UserModel.findOne({email}).exec()
  console.log({user});
  if (!user) throw new Error("Incorrect email/password");
  const isCorrectPassword = await comparePassword(password, user.password);

  if (!isCorrectPassword) throw new Error("Incorrect email/password")

  const {refreshToken, accessToken} = await getTokens(user);
  user = await updateUser(user.id, {refreshToken});
  delete user.password;
  return {...user, accessToken};
}

const signup = async ({email, password, firstName, lastName}) => {
  let user = await UserModel.findOne({email: email});
  if (user) throw new Error("User Already Exists");

  if (!password) throw new Error("Password is required");
  user = await UserModel.create({email, password, firstName, lastName});
  const {refreshToken, accessToken} = await getTokens(user);
  user = await updateUser(user.id, {refreshToken})
  delete user.password;
  return {...user, accessToken};
}

async function updateUser(id, data) {
  return UserModel.findByIdAndUpdate(id, {$set: data}, {new: true}).lean()
}

async function comparePassword(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}

async function generateToken(user, isRefresh = false) {
  const {password, ...rest} = user;
  console.log({rest})
  if (isRefresh) return jwt.sign(rest, secret);

  return jwt.sign(rest, secret, {expiresIn: "20m"});
}

async function getTokens({id, email}) {
  const accessToken = await generateToken({id, email});
  const refreshToken = await generateToken({id, email}, true);

  return {accessToken, refreshToken};
}

async function verifyToken(token, isRefresh = false) {
  const {email} = await jwt.verify(token, secret, {ignoreExpired: isRefresh});
  return UserModel.find({email});
}


export default {signin, signup, refreshToken}