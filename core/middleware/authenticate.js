import jwt from 'jsonwebtoken';
import UnauthorizedError  from '../common/errorHandler/errorClasses/UnauthorizedError.js';
import UserModel from '../../models/user.js';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.SECRET;
const authenticate = async (req, res, next) => {
  const {authorization = ""} = req.headers;
  try {
    if (authorization.startsWith("Bearer ")) {
      const bearerToken = authorization.split(" ")[1];
        const decodedToken = await jwt.verify(bearerToken, secret);
        const user = await UserModel.findById(decodedToken.id).select("-refreshToken -password").exec();
        if (user) {
          req.user = user;
          return next();
        }
    }
    next(new UnauthorizedError());
  } catch (err) {
    next(err)
  }
}

export default authenticate;