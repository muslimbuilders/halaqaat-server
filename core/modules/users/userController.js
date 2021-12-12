import asyncHandler from '../../middleware/asyncHandler.js';
import userDetails from './userDetails.js';

export const getUserDetails = asyncHandler(async (req, res, next) => {
  const userId = req.params.id;
  const user = await userDetails.userDetails(userId);
  return res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});
