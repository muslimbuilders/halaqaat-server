import UserModel from '../users/userModel.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';



dotenv.config();


const secret = process.env.SECRET;
export class AuthService {
  static async refreshToken({accessTokenParam, refreshTokenParam}) {
    let accessUser = await AuthService.verifyToken(accessTokenParam);
    if (!user) throw new Error("Unauthorised");
    const refreshuser = await AuthService.verifyToken(refreshTokenParam, true);
    if (!refreshuser) throw new Error("Unauthorised");
    const {refreshToken, accessToken} = await AuthService.getTokens(user);
    const user = await AuthService.updateUser(refreshUser.id, {refreshToken});
    delete user.password;
    return {...user, accessToken};
  }

  static async signin({email, password}) {
    let user = await UserModel.findOne({email});
    if (!user) throw new Error("Incorrect email/password");
    const isCorrectPassword = await AuthService.comparePassword(password, user.password);

    if (!isCorrectPassword) throw new Error("Incorrect email/password")

    const {refreshToken, accessToken} = await AuthService.getTokens(user);
    user = await AuthService.updateUser(user.id, {refreshToken});
    delete user.password;
    return {...user, accessToken};
  }

  static async signup({email, password, firstName, lastName}) {
    let user = await UserModel.findOne({email: email});
    if (user) throw new Error("User Already Exists");

    if (!password) throw new Error("Password is required");
    const hashedPassword = await AuthService.hashPassword(password);
    user = await UserModel.create({email, password: hashedPassword, firstName, lastName});
    const {refreshToken, accessToken} = await AuthService.getTokens(user);
    user = await AuthService.updateUser(user.id, {refreshToken})
    delete user.password;
    return {...user, accessToken};
  }

  static async hashPassword (password) {
    return bcrypt.hash(password, 10);
  }

  static async comparePassword (password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
  }
  static async generateToken(user, isRefresh = false) {
    const {password, ...rest} = user;
    if (isRefresh) return jwt.sign(rest, secret);

    return jwt.sign(rest, secret, {expiresIn: "20m"});
  }
  static async getTokens(user) {
    const accessToken = await AuthService.generateToken(user);
    const refreshToken = await AuthService.generateToken(user, true);

    return {accessToken, refreshToken};
  }
  static async verifyToken(token, isRefresh = false) {
    const {email} = await jwt.verify(token, secret, {ignoreExpired: isRefresh});
    return UserModel.find({email});
  }
  static async updateUser(id, data) {
    return UserModel.findByIdAndUpdate(id, {$set: data}, {new: true}).lean()
  }
}