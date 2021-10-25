import UserModel from '../users/userModel'
import {hash, compare} from 'bcrypt';
import jwt from 'jsonwebtoken'


const secret = process.env.SECRET;

export class AuthService {
  async signin({email, password}) {
    const user = UserModel.findOne({email});
    if (!user) throw new Error("Incorrect email/password");
    const isCorrectPassword = this.comparePassword(password, user.password);

    if (!isCorrectPassword) throw new Error("Incorrect email/password")

    // move this to hook
    const accessToken = await this.generateToken(user);
    const refreshToken = await this.generateToken(user, true);
    user.refreshToken = refreshToken;
    await user.save();
    const {password, ...rest} = user;
    return {rest, refreshToken, accessToken};
  },

  async signup({email, password, firstName, lastName}) {
    const user = UserModel.findOne({email: email});
    if (user) throw new Error("User Already Exists");
    const hashedPassword = await this.hashPassword(password);
    const newUser = UserModel.Create({email, password: hashedPassword, firsName, lastName});
    // move this to hook
    const accessToken = await this.generateToken(newUser);
    const refreshToken = await this.generateToken(newUser, true);
    newUser.refreshToken = refreshToken;
    await newUser.save();
    c
    const {password, ...rest} = user;
    return {...rest, refreshToken, accessToken};
  },

  async hashPassword (password) {
    return hash(password, 10);
  },

  async comparePassword (password, hashedPassword) {
    return compare(password, hashedPassword);
  },
  async generateToken(user, isRefresh = false) {
    const {password, ...rest} = user;
    if (isRefresh) return jwt.sign(rest, secret);

    return return jwt.sign(rest, secret, {expiresIn: "20m", algorithm: 'ES256'});
  }

  async verifyToken(token) {
    const {email} = await jwt.verify(token, secret);
    const user = UserModel.find({email});
    if (!user) throw new Error("Inavlid Token");
    return user;
  }
}