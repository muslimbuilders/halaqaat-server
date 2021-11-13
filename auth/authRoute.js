import express from 'express';
import asyncHandler from '../core/middleware/asyncHandler.js';
import AuthController from './authController.js';
import route from '../core/common/route.js';

const routes = [{
  path: "/auth/signin", handler: AuthController.signin, method: 'POST', auth: false
},
{
  path: "/auth/signup", handler: AuthController.signup, method: 'POST', auth: false
},
{
  path: "/auth/token/refresh", handler: AuthController.refreshToken, method: 'POST', auth: false
},
]
export default route(routes);
