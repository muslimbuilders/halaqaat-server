import express from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
import authenticate from '../middleware/authenticate.js';



const authenticateRoute = (auth, req, res, next) => {
  if (!auth) return next();

  authenticate(req,res,next);
}

const route = (routes) => {
  const router = express.Router();
  routes.forEach(({method, handler, auth, path}) => {
    console.log({path, method})
    router[method.toLowerCase()](path, (req,res,next) => authenticateRoute(auth, req, res, next), asyncHandler(handler))
  })
  return router;
}

export default route;
