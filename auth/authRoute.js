import express from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
import AuthController from './authController.js';

const router = express.Router();

router.post("/auth/signin", asyncHandler(AuthController.signin));
router.post("/auth/signup", asyncHandler(AuthController.signup));
router.post("/auth/token/refresh", asyncHandler(AuthController.refreshToken));

export default router;
