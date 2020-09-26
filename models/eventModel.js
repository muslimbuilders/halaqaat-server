const mongoose = require('mongoose')


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
  location: {
    type: String,
  },
  eventType: {
    type: String,
  },
});

module.exports = mongoose.model('Event', eventSchema)