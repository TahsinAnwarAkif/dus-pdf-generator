import asyncHandler from 'express-async-handler';
import ErrorResponse from '../utils/ErrorResponse.js';

export const authenticate = asyncHandler(async (req, res, next) => {
  if (!process.env.REQUIRED_API_KEY) {
    return next(new ErrorResponse(503, "Please provide REQUIRED_API_KEY in your config file"));
  }
  
  const apiKey = req.headers.authorization;
  
  if (!apiKey || apiKey !== process.env.REQUIRED_API_KEY) {
    return next(new ErrorResponse(401, "Unauthorized! Please provide valid API Key in your request"));
  }
  
  next();
});