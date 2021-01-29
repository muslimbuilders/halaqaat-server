import  Event from "../models/eventModel.js";

const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        event,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json({
      status: "success",
      data: {
        events
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export {createEvent, getAllEvents}