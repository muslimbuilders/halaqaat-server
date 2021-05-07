import Event from '../models/eventModel.js';
import asyncHandler from '../middleware/asyncHandler.js';

const createEvent = asyncHandler(async (req, res, next) => {

  const event = await Event.create(req.body);
  res.status(200).json({
    status: 'success',
    data: {
      event,
    },
  });
});

const getAllEvents = asyncHandler(async (req, res, next) => {
  
  const { page = 1, limit = 10 } = req.query

  const events = await Event.find({}).skip((limit * page) - limit).limit(limit * 1);

  res.status(200).json({
    status: 'success',
    data: {
      events,
    },
  });
});

export { createEvent, getAllEvents };
