import asyncHandler from '../middleware/asyncHandler.js';
import { AuthService } from './authService.js';
import { SignupDto } from './dto/signup.dto.js';


export default class AuthController {
    static async signin(req, res, next) {
      const user = await AuthService.signin(req.body);
      return res.status(200).json({
        status: 'success',
        data: {
          user
        },
      });
    }
    static async signup(req, res, next) {
      const data = new SignupDto(req.body);
      const user = await AuthService.signup(data);
      return res.status(200).json({
        status: 'success',
        data: {
          user
        },
      });
    }
    static async refreshToken(req, res, next) {
      const user = AuthService.refreshToken(req.body);
      return res.status(200).json({
        status: 'success',
        data: {
          user
        },
      });
    }
}