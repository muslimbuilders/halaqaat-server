const express = require('express')

const { createEvent, getAllEvents } = require("../controllers/eventController");

const router = express.Router()

router.route("/").get(getAllEvents).post(createEvent);

module.exports = router