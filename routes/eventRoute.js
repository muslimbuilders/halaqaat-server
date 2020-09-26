const express = require('express')

const { createEvent, getAllEvents } = require("../controllers/eventController");

const router = express.Router()

router.route("/").post(createEvent).get(getAllEvents)

module.exports = router