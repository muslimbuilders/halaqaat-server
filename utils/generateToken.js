import jwt from 'jsonwebtoken';
import envs from '../config/env.js'


const generateToken = (id) => {
  return jwt.sign({ id }, envs.secret, {
    expiresIn: '30d',
  });
};

export default generateToken;
