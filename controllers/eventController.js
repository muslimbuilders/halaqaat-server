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
  const events = await Event.find({});
  res.status(200).json({
    status: 'success',
    data: {
      events,
    },
  });
});

const getEvent = asyncHandler(async (req, res, next) => {
  
  const { id } = req.params
  const event = await Event.findById( id );
  res.status(200).json({
    status: 'success',
    data: {
      event
    },
  });
});

export { createEvent, getAllEvents, getEvent };
