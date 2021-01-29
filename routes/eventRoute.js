import  express from 'express';

import { createEvent, getAllEvents } from "../controllers/eventController.js";

const router = express.Router()

router.route("/").get(getAllEvents).post(createEvent);

module.exports = router