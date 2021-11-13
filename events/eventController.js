import Event from './eventModel.js';
import asyncHandler from '../core/middleware/asyncHandler.js';

const createEvent = async (req, res, next) => {

  const event = await Event.create(req.body);
  res.status(200).json({
    status: 'success',
    data: {
      event,
    },
  });
}

const getAllEvents = async (req, res, next) => {
  console.log("user", req.user);
  const { page = 1, limit = 10 } = req.query

  const events = await Event.find({}).skip((limit * page) - limit).limit(limit * 1);

  res.status(200).json({
    status: 'success',
    per_page: limit,
    numOfPages: page,
    data: {
      events,
    },
  });
}

const getEvent = async (req, res, next) => {
  
  const { id } = req.params
  const event = await Event.findById( id );
  res.status(200).json({
    status: 'success',
    data: {
      event
    },
  });
}

export { createEvent, getAllEvents, getEvent };
