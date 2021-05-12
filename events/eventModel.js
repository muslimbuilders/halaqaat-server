import mongoose from 'mongoose';


const eventSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
  date: {
    type: [Date],
  },
  eventBanner: {
    type: String,
    required: true
  },
  location: {
    type: String,
  },
  eventType: {
    type: String,
  },
});

const Event  = mongoose.model('Event', eventSchema)

export default Event;