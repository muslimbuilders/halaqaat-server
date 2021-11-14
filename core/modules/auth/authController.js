import asyncHandler from '../../middleware/asyncHandler.js';
import AuthService  from './authService.js';
import { SignupDto } from './dto/signup.dto.js';


const signin = async (req, res, next) => {
  const user = await AuthService.signin(req.body);
  return res.status(200).json({
    status: 'success',
    data: {
      user
    },
  });
}

const signup = async (req, res, next) => {
  const data = new SignupDto(req.body);
  const user = await AuthService.signup(data);
  return res.status(200).json({
    status: 'success',
    data: {
      user
    },
  });
}

const refreshToken = async (req, res, next) => {
  const user = AuthService.refreshToken(req.body);
  return res.status(200).json({
    status: 'success',
    data: {
      user
    },
  });
}


export default {signup, signin, refreshToken}